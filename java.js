document.addEventListener('DOMContentLoaded', function() {
    var yesButton = document.getElementById('yes');
    var noButton = document.getElementById('no');
    var videoPlayer = document.getElementById('videoPlayer');

    var yesVideoUrl = 'https://www.youtube.com/embed/f2XuoqdTTmU?si=12NjxTGf3cS6cAne'; // Replace 'f2XuoqdTTmU' with your 'yes' YouTube video ID
    var noVideoUrl = 'https://www.youtube.com/embed/NGBtM026ty4?si=BBgc_3pnUEsF8rOH'; // Replace 'NGBtM026ty4' with your 'no' YouTube video ID

    // Function to play video
    function playVideo(videoUrl) {
        videoPlayer.src = videoUrl;
        videoPlayer.play(); // Start playing the video
    }

    // Event listener for 'Yes' button
    yesButton.addEventListener('click', function() {
        playVideo(yesVideoUrl);
    });

    // Event listener for 'No' button
    noButton.addEventListener('click', function() {
        playVideo(noVideoUrl);
    });
});document.addEventListener('DOMContentLoaded', function() {
    var yesButton = document.getElementById('yes');
    var noButton = document.getElementById('no');
    var videoPlayer = document.getElementById('videoPlayer');

    var yesVideoUrl = 'https://www.youtube.com/embed/f2XuoqdTTmU?si=12NjxTGf3cS6cAne'; // Replace 'f2XuoqdTTmU' with your 'yes' YouTube video ID
    var noVideoUrl = 'https://www.youtube.com/embed/NGBtM026ty4?si=BBgc_3pnUEsF8rOH'; // Replace 'NGBtM026ty4' with your 'no' YouTube video ID

    // Function to play video
    function playVideo(videoUrl) {
        videoPlayer.src = videoUrl;
        videoPlayer.play(); // Start playing the video
    }

    // Event listener for 'Yes' button
    yesButton.addEventListener('click', function() {
        playVideo(yesVideoUrl);
    });

   

