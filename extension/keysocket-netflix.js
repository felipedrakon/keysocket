keySocket.init(
    "nexflix",
    {
        "play-pause": function () {
  
                var playPauseButton = document.querySelector('.button-nfplayerPlay, .button-nfplayerPause');
                keySocket.simulateClick(playPauseButton);
    
        },
        "prev": function () {
           
                var prevButton = document.querySelector('.prev');//Don't Find
                keySocket.simulateClick(prevButton);
            
        },
        "next":  function () {
           
                var nextButton = document.querySelector('.button-nfplayerNextEpisode');
                keySocket.simulateClick(nextButton);
            
        },
        "stop": function () {
           
                var stopButton = document.querySelector('.button-nfplayerPause');
                keySocket.simulateClick(stopButton);
            
        }
    }
);
