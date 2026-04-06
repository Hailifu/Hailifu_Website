const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { v2: cloudinary } = require('cloudinary');

if (!admin.apps.length) {
  admin.initializeApp();
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
const apiKey = process.env.CLOUDINARY_API_KEY || '';
const apiSecret = process.env.CLOUDINARY_API_SECRET || '';

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  });
}

exports.deleteCloudinaryAsset = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required.');
  }

  if (!cloudName || !apiKey || !apiSecret) {
    throw new functions.https.HttpsError('failed-precondition', 'Cloudinary environment variables are missing.');
  }

  const publicId = String(data?.publicId || '').trim();
  const resourceType = String(data?.resourceType || 'image').trim().toLowerCase() || 'image';
  if (!publicId) {
    throw new functions.https.HttpsError('invalid-argument', 'publicId is required.');
  }

  const allowed = new Set(['image', 'video', 'raw']);
  const safeResourceType = allowed.has(resourceType) ? resourceType : 'image';

  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: safeResourceType,
      invalidate: true
    });
    return {
      ok: true,
      result
    };
  } catch (error) {
    const message = String(error?.message || error || 'Cloudinary delete failed');
    throw new functions.https.HttpsError('internal', message);
  }
});
