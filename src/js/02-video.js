import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const Storage = 'videoplayer-current-time';

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