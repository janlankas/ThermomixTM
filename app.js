document.querySelectorAll("video").forEach(vid => {
    vid.onclick = () => {
        document.querySelector(".popup-video").style.display = "block";
        document.querySelector(" video").src = vid.getAttribute("src");
    }
});

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
    document.querySelector(" video").muted = vid.getAttribute("muted")
}