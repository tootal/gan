import soul from './soul.js'
import seedrandom from 'seedrandom'

export default function (seed, count) {
  let replys = [];
  let rand = seedrandom(seed);
  for (let i = 0; i < count; i++) {
    let reply = soul[Math.floor(soul.length * rand())]
    replys.push(reply)
    rand = seedrandom(reply)
  }
  return replys;
}