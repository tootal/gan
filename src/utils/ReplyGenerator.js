import soul from './soul.js'
import seedrandom from 'seedrandom'
import ChineseNameGenerator from './ChineseNameGenerator.js'

export default function (seed, count) {
  let replys = [];
  let rand = seedrandom(seed);
  for (let i = 0; i < count; i++) {
    let reply = {};
    reply.content = soul[Math.floor(soul.length * rand())]
    reply.author = ChineseNameGenerator(rand())
    replys.push(reply)
    rand = seedrandom(rand())
  }
  return replys;
}