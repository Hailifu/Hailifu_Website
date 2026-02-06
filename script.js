﻿console.log("SYSTEM_ACTIVE");

﻿// 1. Secret Door Logic
let knockCount = 0;
const footer = document.querySelector('footer');

if (footer) {
    footer.addEventListener('click', () => {
        knockCount++;
        console.log("Knock detected:", knockCount); // This helps us debug!
        
        if (knockCount === 5) {
            const pin = prompt("ENTER ACCESS CODE:");
            if (pin === "1234") {
                document.getElementById('admin-gate').style.display = 'block';
                knockCount = 0;
            } else {
                alert("ACCESS DENIED");
                knockCount = 0;
            }
        }
    });
} else {
    console.error("FOOTER NOT FOUND: Make sure your HTML has a <footer> tag.");
}

// 2. Cloudinary Upload Logic
// Function to close the gate
function closeAdminGate() {
    document.getElementById('admin-gate').style.display = 'none';
    // Clear the click count so they have to knock 5 times again
    knockCount = 0;
}

// Function to handle the upload (Make sure this matches your Cloudinary setup)
async function saveSystemChanges() {
    const fileInput = document.getElementById('admin-file-upload');
    const file = fileInput.files[0];
    const syncBtn = document.getElementById('sync-btn');

    if (!file) return alert("CRITICAL: No file selected.");

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

        // Save to Firebase (The text database)
        await firebase.firestore().collection("installations").add({
            url: data.secure_url,
            type: file.type.startsWith('video/') ? 'video' : 'image',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("SYNC SUCCESSFUL!");
        location.reload();
    } catch (error) {
        console.error(error);
        alert("Sync Failed. Check console.");
        syncBtn.disabled = false;
        syncBtn.innerText = "[ INITIATE_SYNC ]";
    }
}
