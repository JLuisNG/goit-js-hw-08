import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const Storage = 'videoplayer-current-time';
/*
player.on('eventName', function (data) {
   data is an object containing properties specific to that event
});
*/
// _.throttle(func, [wait=0], [options={}])

/*timeupdate
Triggered as the of the video updates. It generally fires every 250ms, but it may vary depending on the browser.currentTime

{ es un objeto y se accede mediante el argumento data?
    duration: 61.857
    percent: 0.049
    -- USar => seconds: 3.034
}
*/
player.on(
  'timeupdate',
  throttle(function (data) {
    // console.log(data.seconds);
    let playTime = data.seconds;
    localStorage.setItem(Storage, JSON.stringify(playTime));
  }, 1000)
);

let initTime = localStorage.getItem(Storage);
console.log(initTime);
player.setCurrentTime(initTime);

console.log(initTime);
