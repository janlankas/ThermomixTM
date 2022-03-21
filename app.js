
document.querySelectorAll("video").forEach(vid => {
    vid.onclick = () => {
        document.querySelector(".popup-video").style.display = "block";
        document.querySelector(".popup-video video").src = vid.getAttribute("src");
    }
});

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
    document.querySelector(".popup-video video").pause();
}



//Image popup

document.querySelectorAll(".video img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".popup-img").style.display = "block";
        document.querySelector(".popup-img img").src = img.getAttribute("src");
    }
})

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
}

