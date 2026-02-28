/**
 * DOM Tree inspection script – paste into browser console to find suppressed content.
 * Identifies elements with height 0px, visibility:hidden, display:none, opacity:0, etc.
 *
 * Usage:
 *   1. Open your live site in Chrome/Edge/Firefox.
 *   2. Open DevTools (F12) → Console tab.
 *   3. Copy this entire file and paste into the console, then press Enter.
 *   Or run the one-liner below to get a quick list without CSS-rule hints.
 *
 * One-liner (quick list of suppressed nodes):
 *   [].slice.call(document.querySelectorAll('*')).filter(function(e){var r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.height===0||s.visibility==='hidden'||s.display==='none';}).forEach(function(e){console.log(e.tagName,e.id,e.className,e.getBoundingClientRect(),getComputedStyle(e).visibility,getComputedStyle(e).display);});
 */
(function domTreeInspect() {
  'use strict';

  function getSelector(el) {
    if (!el || !el.tagName) return '';
    var id = el.id;
    if (id && document.querySelectorAll('#' + CSS.escape(id)).length === 1) {
      return '#' + id;
    }
    var path = [];
    while (el && el.nodeType === Node.ELEMENT_NODE) {
      var part = el.tagName.toLowerCase();
      if (el.id) part += '#' + CSS.escape(el.id);
      else if (el.className && typeof el.className === 'string') {
        var classes = el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2);
        if (classes.length) part += '.' + classes.map(function(c) { return CSS.escape(c); }).join('.');
      }
      path.unshift(part);
      el = el.parentElement;
      if (path.length >= 5) break;
    }
    return path.join(' > ');
  }

  function getComputed(el) {
    try {
      return el && el.ownerDocument && el.ownerDocument.defaultView
        ? el.ownerDocument.defaultView.getComputedStyle(el)
        : null;
    } catch (e) {
      return null;
    }
  }

  function getRuleThatSet(el, prop) {
    try {
      var sheets = el.ownerDocument.styleSheets;
      var value = null;
      var match = el.matches ? function(sel) { try { return el.matches(sel); } catch (e) { return false; } } : function() { return false; };
      for (var i = 0; i < sheets.length; i++) {
        try {
          if (sheets[i].href && sheets[i].href.indexOf(window.location.origin) !== 0) continue;
          var rules = sheets[i].cssRules || sheets[i].rules;
          if (!rules) continue;
          for (var j = 0; j < rules.length; j++) {
            var r = rules[j];
            if (r.selectorText && match(r.selectorText)) {
              var v = r.style && r.style.getPropertyValue ? r.style.getPropertyValue(prop) : r.style[prop];
              if (v) value = { rule: r.selectorText, value: v, sheet: (sheets[i].href || 'inline') };
            }
            if (r.cssRules) {
              for (var k = 0; k < r.cssRules.length; k++) {
                var mr = r.cssRules[k];
                if (mr.selectorText && match(mr.selectorText)) {
                  var mv = mr.style && mr.style.getPropertyValue ? mr.style.getPropertyValue(prop) : mr.style[prop];
                  if (mv) value = { rule: mr.selectorText, value: mv, sheet: (sheets[i].href || 'inline') };
                }
              }
            }
          }
        } catch (err) {}
      }
      return value;
    } catch (e) {
      return null;
    }
  }

  function inspectElement(el, depth, results) {
    if (!el || depth > 25) return;
    var rect = el.getBoundingClientRect();
    var cs = getComputed(el);
    if (!cs) return;

    var height = rect.height;
    var visibility = cs.visibility;
    var display = cs.display;
    var opacity = parseFloat(cs.opacity);
    var overflow = cs.overflow;
    var clip = cs.clip;
    var transform = cs.transform;

    var issues = [];
    if (height === 0 && el.offsetParent !== null) issues.push('height:0px (visible in layout)');
    if (height === 0 && display !== 'none') issues.push('height:0px');
    if (visibility === 'hidden') issues.push('visibility:hidden');
    if (visibility === 'collapse') issues.push('visibility:collapse');
    if (display === 'none') issues.push('display:none');
    if (opacity === 0) issues.push('opacity:0');
    if (overflow === 'hidden' && height === 0) issues.push('overflow:hidden + zero height');
    if (clip === 'rect(0px, 0px, 0px, 0px)' || clip === 'rect(0 0 0 0)') issues.push('clip:rect(0,0,0,0)');

    if (issues.length === 0) return;

    var ruleHint = '';
    if (height === 0) {
      var hRule = getRuleThatSet(el, 'height');
      if (hRule) ruleHint = ' [height from: ' + hRule.rule + ' in ' + (hRule.sheet || '') + ']';
    }
    if (visibility === 'hidden') {
      var vRule = getRuleThatSet(el, 'visibility');
      if (vRule) ruleHint += ' [visibility from: ' + vRule.rule + ']';
    }
    if (display === 'none') {
      var dRule = getRuleThatSet(el, 'display');
      if (dRule) ruleHint += ' [display from: ' + dRule.rule + ']';
    }

    results.push({
      depth: depth,
      selector: getSelector(el),
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: (el.className && typeof el.className === 'string') ? el.className.trim() : null,
      issues: issues,
      ruleHint: ruleHint,
      rect: { width: rect.width, height: rect.height, top: rect.top, left: rect.left },
      childCount: el.children.length
    });
  }

  function walk(root, depth, results) {
    if (!root || depth > 20) return;
    inspectElement(root, depth, results);
    for (var i = 0; i < root.children.length; i++) {
      walk(root.children[i], depth + 1, results);
    }
  }

  var results = [];
  var root = document.body || document.documentElement;
  walk(root, 0, results);

  // Tree-style console output
  console.group('%c DOM Tree – suppressed / zero-height elements ', 'background:#1a1a1a; color:#995400; padding:6px 10px; font-weight:bold;');
  console.log('Total elements with issues: ' + results.length);
  console.log('');

  results.forEach(function(r) {
    var indent = '  '.repeat(r.depth);
    var line = indent + '<' + r.tag + (r.id ? '#' + r.id : '') + (r.classes ? '.' + r.classes.split(/\s+/).slice(0, 2).join('.') : '') + '>';
    console.groupCollapsed('%c ' + line + ' ', 'color:#888;');
    console.log('Selector (approx):', r.selector);
    console.log('Issues:', r.issues.join(', '));
    if (r.ruleHint) console.log('Likely CSS source:', r.ruleHint);
    console.log('Rect:', r.rect);
    console.log('Child count:', r.childCount);
    console.groupEnd();
  });

  console.log('');
  console.log('%c Summary table (copy for debugging) ', 'color:#995400; font-weight:bold;');
  console.table(results.map(function(r) {
    return {
      depth: r.depth,
      tag: r.tag,
      id: r.id || '–',
      issues: r.issues.join('; '),
      width: r.rect.width,
      height: r.rect.height
    };
  }));

  console.groupEnd();

  return results;
})();

/* === ALTERNATIVE: minimal one-liner (paste in console) ===
function domInspect() {
  var out = [];
  [].slice.call(document.querySelectorAll('*')).forEach(function(el) {
    var r = el.getBoundingClientRect();
    var s = getComputedStyle(el);
    if (r.height === 0 || s.visibility === 'hidden' || s.display === 'none' || s.opacity === '0') {
      out.push({ tag: el.tagName, id: el.id, class: el.className, height: r.height, visibility: s.visibility, display: s.display });
    }
  });
  console.table(out);
  return out;
}
domInspect();
*/

