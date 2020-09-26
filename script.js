const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){ //prompt to select media stream, pass to video element, play vdo
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    }catch(err){
        console.log(err);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
});

selectMediaStream();