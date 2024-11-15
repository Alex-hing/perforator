anime({
    targets: 'button',
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutExpo'
});

anime({
    targets: '.recommendations img',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(200),
    duration: 800
});


document.getElementById('qualitySelect').addEventListener('change', function () {
    const quality = this.value;
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = `https://example.com/player?movie=sinister&quality=${quality}`;
});


document.getElementById('volumeControl').addEventListener('input', function () {
    const volume = this.value;
    console.log("Гучність змінено на: ", volume);
});

document.getElementById('postComment').addEventListener('click', function () {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = document.getElementById('commentList');
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentList.appendChild(commentElement);
        commentInput.value = ''; 
    }
});