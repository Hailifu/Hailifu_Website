// 1. Secret Door Logic
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
async function saveSystemChanges() {
    const fileInput = document.getElementById('admin-file-upload');
    const file = fileInput.files[0];
    const syncBtn = document.getElementById('sync-btn');

    if (!file) return alert("Please select a file.");

    syncBtn.innerText = "SYNCING...";
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
        console.error("Upload Error:", error);
        alert("Upload Failed. Check console for details.");
        syncBtn.disabled = false;
        syncBtn.innerText = "INITIATE_SYNC";
    }
}