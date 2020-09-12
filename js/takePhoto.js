const takePhotoButton = document.querySelector("button#takePhoto");
const video = document.querySelector("video#videoElement");
const canvas = window.canvas = document.querySelector('canvas');

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.log(error.message);
    });
}

canvas.width = 500;
canvas.height = 360;

takePhotoButton.onclick = function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};