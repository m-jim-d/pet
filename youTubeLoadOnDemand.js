// youTubeLoadOnDemand.js
   console.log('yTLoD version 1.2');
// (1:16 PM Tue July 28, 2020)
// Written by: James D. Miller

// Set up on-demand YouTube loading. Append iframe and run YouTube video when video-container is clicked. 
// Also see section in physics_engine.css, where styles are defined for div.video-container, img.frameCapture, and img.playButton.
$(document).ready( function() { 
   // Define event handlers for the video container.
   $('.video-container').click( function() {
      if ( ! $(this).children("img.playButton").is(":hidden")) {
         // ?autoplay=1&mute=1  --->  an autoplay with mute works, but apparently YouTube does not count these as user-initiated plays.
         var video = '<iframe src="' +  "//www.youtube-nocookie.com/embed/" + $(this).attr('data-videoID') + "?rel=0" + '"' +
                            ' width="' +  $(this).children("img.frameCapture").width()      + '"' + 
                            ' height="' + $(this).children("img.frameCapture").height()     + '"' + 
                            ' frameborder="0" allowfullscreen></iframe>';
         $(this).find("img").hide();
         $(this).append( video);
      }
   }).mouseenter( function() {
      $(this).children("img.playButton").css('opacity', "1.0");
   }).mouseleave( function() {
      $(this).children("img.playButton").css('opacity', "0.7");
   });
   
   // Use the YouTube default image if an src for a screen-shot isn't given.
   $('.video-container').each( function(i, item) {
      var imageSource = $(item).children("img.frameCapture").attr('src');
      if (imageSource == "") {
         var linkToYTImage = "https://i.ytimg.com/vi/" + $(this).attr('data-videoID') + "/hqdefault.jpg";   // mqdefault hqdefault maxresdefault 
         $(item).children("img.frameCapture").attr('src', linkToYTImage);
      }
      // Add a play-button image as an overlay.
      $(item).append('<img class="playButton" src="screenshots/play_button.png" >');
   });
});
