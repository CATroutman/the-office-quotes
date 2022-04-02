//#region Characters
const andy_bernard = require('../assets/characters/andy_bernard.jpg')
const angela_martin = require('../assets/characters/angela_martin.jpg')
const bob = require('../assets/characters/bob.jpg')
const carol = require('../assets/characters/carol.jpg')
const cathy = require('../assets/characters/cathy.jpg')
const clark = require('../assets/characters/clark.jpg')
const creed_bratton = require('../assets/characters/creed_bratton.jpg')
const darryl = require('../assets/characters/darryl.jpg')
const david_brent = require('../assets/characters/david_brent.jpg')
const david = require('../assets/characters/david.jpg')
const deangelo = require('../assets/characters/deangelo.jpg')
const dunder_mifflin = require('../assets/characters/dunder_mifflin.jpg')
const dwight_schrute = require('../assets/characters/dwight_schrute.jpg')
const erin = require('../assets/characters/erin.jpg')
const gabe = require('../assets/characters/gabe.jpg')
const hank = require('../assets/characters/hank.jpg')
const holly = require('../assets/characters/holly.jpg')
const jan = require('../assets/characters/jan.jpg')
const jim_halpert = require('../assets/characters/jim_halpert.jpg')
const jo = require('../assets/characters/jo.jpg')
const karen_filippelli = require('../assets/characters/karen_filippelli.jpg')
const katy = require('../assets/characters/katy.jpg')
const kelly = require('../assets/characters/kelly.jpg')
const kevin = require('../assets/characters/kevin.jpg')
const meredith = require('../assets/characters/meredith.jpg')
const michael_scott = require('../assets/characters/michael_scott.jpg')
const mose = require('../assets/characters/mose.jpg')
const nate = require('../assets/characters/nate.jpg')
const nellie = require('../assets/characters/nellie.jpg')
const oscar = require('../assets/characters/oscar.jpg')
const pam_beesley = require('../assets/characters/pam_beesley.jpg')
const pete = require('../assets/characters/pete.jpg')
const phyllis = require('../assets/characters/phyllis.jpg')
const robert_california = require('../assets/characters/robert_california.jpg')
const roy = require('../assets/characters/roy.jpg')
const ryan_howard = require('../assets/characters/ryan_howard.jpg')
const stanley = require('../assets/characters/stanley.jpg')
const toby = require('../assets/characters/toby.jpg')
const todd = require('../assets/characters/todd.jpg')
//#endregion

export function getCharacter(line: string) {
  const re = /^[^\:]+/;
  const match = line.match(re);

  const name = match ? match[0] : '';

  switch (name.toLowerCase()) {
    case 'michael':
      return michael_scott;
    case 'dwight':
      return dwight_schrute;
    case 'jim':
      return jim_halpert;
    case 'pam':
      return pam_beesley;
    case 'andy':
      return andy_bernard;
    case 'phyllis':
      return phyllis;
    case 'angela':
      return angela_martin;
    case 'kevin':
      return kevin;
    case 'kelly':
      return kelly;
    case 'ryan':
      return ryan_howard;
    case 'clark':
      return clark;
    case 'creed':
      return creed_bratton;
    case 'daryl':
    case 'darryl':
      return darryl;
    case 'erin':
      return erin;
    case 'gabe':
      return gabe;
    case 'karen':
      return karen_filippelli;
    case 'meredith':
      return meredith;
    case 'nellie':
      return nellie;
    case 'oscar':
      return oscar;
    case 'pete':
      return pete;
    case 'robert':
    case 'robert california':
      return robert_california;
    case 'stanley':
      return stanley;
    case 'bob':
    case 'bob vance':
      return bob;
    case 'carol':
    case 'carol stills':
      return carol;
    case 'cathy':
    case 'kathy':
      return cathy;
    case 'david':
    case 'david wallace':
      return david;
    case 'deangelo':
    case 'deangelo vickers':
      return deangelo;
    case 'hank':
      return hank;
    case 'holly':
      return holly;
    case 'jan':
      return jan;
    case 'jo':
    case 'jo bennet':
      return jo;
    case 'katy':
    case 'katie':
      return katy;
    case 'mose':
      return mose;
    case 'nate':
      return nate;
    case 'roy':
      return roy;
    case 'toby':
      return toby;
    case 'todd':
    case 'todd packer':
    case 'packer':
      return todd;
    case 'david brent':
      return david_brent;
    default:
      return dunder_mifflin;
  }
}