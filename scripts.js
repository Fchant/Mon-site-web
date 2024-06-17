window.addEventListener('scroll', function() {
    const title = document.querySelector('.title');
    const videoContainer = document.querySelector('.video-container');

    let scrollPosition = window.scrollY;

    // Zoomer le titre
    if (scrollPosition < 200) {
        let scale = 1 + scrollPosition / 200;
        title.style.transform = `scale(${scale})`;
    }

    // Ajuster la taille de la vidéo
    if (scrollPosition > 200 && scrollPosition < 600) {
        let widthPercentage = 80 + (scrollPosition - 200) / 5;
        videoContainer.style.width = `${widthPercentage}%`;
    }
});
