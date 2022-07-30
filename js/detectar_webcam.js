const d = document,
n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then(()=>{
          $video.srcObject=stream;
          $video.play();
        })
        .catch((err)=>{
          console.log(`Sucedió un error: ${err}`)
          $video.insertAdjacentHTML("beforebegin",`<p><mark>Sucedió un error: ${err}</mark></p>`)
        })
    }
}