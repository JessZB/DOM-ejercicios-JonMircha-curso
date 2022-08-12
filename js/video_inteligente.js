const d = document;

export default function autoVideo(media){
    let $media = d.querySelectorAll("video[data-smart-video");
    const playMedia = (entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.play()
            }
            else {
                entry.target.pause()
            }
            window.addEventListener('visibilitychange', ()=>
            d.visibilityState === "visible" && entry.isIntersecting
            ? entry.target.play()
            : entry.target.pause())
        });
    }
   
    const observer = new IntersectionObserver(playMedia, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2,
    });
    $media.forEach(el=> observer.observe(el))
}