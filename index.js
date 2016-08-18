function autoplay() {
  function createPlayer(info) {
    var player = new YT.Player(info.id, {
      videoId: info.videoId,
      events: {
        onReady: () => {
          player.playVideo();
        }
      }
    });

    return player;
  }

  function applyPlayer() {
    const targets = Array.from(document.querySelectorAll('[data-autoplay]'));

    targets.map(item => {
      const id = item.id;
      const videoId = item.getAttribute('data-video-id');

      this.createPlayer({ id, videoId })
    })
  }

  function createScriptElement() {
    let firstScriptTag;
    let tag = document.createElement('script');
        tag.src = 'http://www.youtube.com/player_api';

    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  return { applyPlayer, createScriptElement }
}

function onYouTubePlayerAPIReady() {
  autoplay().applyPlayer();
}

autoplay().createScriptElement();
