const startCameraBtn = document.getElementById('startCamera');
const camVideo = document.getElementById("camVideo");
const scanBtn = document.getElementById('scanCube');
const capturedImg = document.getElementById('capturedImage');

async function startCamera() {
    const constraints = {
    video: {
        width: 360,
        height: 360,
        facingMode: "environment",
    },
    };
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
        camVideo.srcObject = stream;
    })
    .catch((error) => {
        console.error(error);
    });
}

function captureImage() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  canvas.width = camVideo.videoWidth;
  canvas.height = camVideo.videoHeight;
  
  context.drawImage(camVideo, 0, 0, canvas.width, canvas.height);
  const imageData = canvas.toDataURL('image/png');
  capturedImg.src = imageData;
}

startCameraBtn.addEventListener('click', () => {
  startCamera();  // Start camera after user interaction
});

scanBtn.addEventListener('click', captureImage);
