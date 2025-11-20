const fs = require('fs');
const path = require('path');

async function testUpload() {
    const formData = new FormData();

    // Create a dummy image file
    const buffer = Buffer.from('fake image data');
    const blob = new Blob([buffer], { type: 'image/jpeg' });
    formData.append('file', blob, 'test-image.jpg');

    try {
        const response = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log('Upload Result:', result);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

testUpload();
