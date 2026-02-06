// --- Firebase Configuration (Compatible Version) ---
const firebaseConfig = {
  apiKey: "AIzaSyBf0-nHMqu_ojZ1Ls-CEIHCXyiCnkNbRCY",
  authDomain: "hailifu-website.firebaseapp.com",
  databaseURL: "https://hailifu-website-default-rtdb.firebaseio.com",
  projectId: "hailifu-website",
  storageBucket: "hailifu-website.firebasestorage.app",
  messagingSenderId: "209696316971",
  appId: "1:209696316971:web:4074db68735ba09221d46e"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
console.log("FIREBASE_READY: Connected to hailifu-website");

console.log("SYSTEM_STATUS: Connecting to Hailifu Cloud...");
let knockCount = 0;

// 1. SECRET DOOR
const footer = document.querySelector('footer');
if (footer) {
    footer.addEventListener('click', () => {
        knockCount++;
        if (knockCount === 5) {
            document.getElementById('admin-gate').style.display = 'block';
            knockCount = 0;
        }
    });
}

// 2. EXIT FUNCTION
function closeAdminGate() {
    document.getElementById('admin-gate').style.display = 'none';
}

// 3. SYNC FUNCTION (Cloudinary)
async function saveSystemChanges() {
    const fileInput = document.getElementById('admin-file-upload');
    const file = fileInput.files[0];
    const syncBtn = document.getElementById('sync-btn');
    if (!file) return alert("Select a file.");

    syncBtn.innerText = "UPLOADING...";
    syncBtn.disabled = true;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'daovfi3i5'); 

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dclv77vgs/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        await firebase.firestore().collection("installations").add({
            url: data.secure_url,
            type: file.type.startsWith('video/') ? 'video' : 'image',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("SYNC SUCCESSFUL!");
        location.reload();
    } catch (error) {
        console.error(error);
        alert("Sync Failed.");
        syncBtn.disabled = false;
        syncBtn.innerText = "[ INITIATE_SYNC ]";
    }
}