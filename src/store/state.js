import {pictures as otherPictures} from './resourceStore/scatteredImages'
import {videos as otherVideos} from './resourceStore/scatteredVideos'

function getDescription(storyId) {
  const item = getLoveItemStore(storyId)
  return item && item.story ? item.story : ''
}

function getPictures(storyId) {
  const item = getLoveItemStore(storyId)
  return item && item.pictures ? item.pictures : []
}

function getVideos(storyId) {
  const item = getLoveItemStore(storyId)
  return item && item.videos ? item.videos : []
}

function getAvatar(storyId) {
  const item = getLoveItemStore(storyId)
  return item && item.avatar ? item.avatar : ''
}
function getLoveItemStore(storyId) {
  return require('./loveItemsStore/' + storyId)
}

function getLoveWorlItems() {
  return loveWorldItems.map((item) => {
    const id = item.time.replace(new RegExp('-', 'gm'), '') + item.name
    return {
      ...item,
      id,
      description: getDescription(id),
      avatar: getAvatar(id),
      pictures: getPictures(id),
      videos: getVideos(id)
    }
  })
}

const loveWorldItems = [
  {
    time: '2016-06-27',
    name: 'meet'
  }, {
    time: '2016-07-03',
    name: 'dinner'
  }, {  //todo to confirm
    time: '2016-07-10',
    name: 'sing'
  }, { //todo to confirm
    time: '2016-07-12',
    name: 'movie'
  }, {//todo to confirm
    time: '2016-07-16',
    name: 'mountain'
  }, {
    time: '2016-08-05',
    name: 'belover'
  }, {  //todo to confirm
    time: '2016-08-09',
    name: 'Valentine'
  }, {
    time: '2016-09-05',
    name: 'commemoration'
  }, {
    time: '2016-10-01',
    name: 'excursion'
  }, {   //todo to confirm
    time: '2016-11-15',
    name: 'onbusiness'
  }, {
    time: '2016-12-25',
    name: 'Christmas'
  }, {
    time: '2017-01-20',
    name: 'mybirthday'
  }, {
    time: '2017-02-01',
    name: 'hengshan'
  }, {  //todo to confirm
    time: '2017-03-05',
    name: 'onbusiness'
  }, {  //todo to confirm
    time: '2017-04-15',
    name: 'disney'
  }, {  //todo to confirm
    time: '2017-06-02',
    name: 'beihai'
  }, {
    time: '2017-08-05',
    name: 'aniversary'
  },{
    time: '2017-12-24',
    name: 'hongkong'
  },{//todo to confirm
    time: '2018-01-20',
    name: 'hotSpring'
  },{
    time: '2018-01-28',
    name: 'mybirthday'
  },{
    time: '2018-05-01',
    name: 'excursion'
  },{
    time: '2018-05-07',
    name: 'move'
  },{
    time: '2018-05-20',
    name: 'birthday'
  },{
    time: '2019-01-28',
    name: 'birthday'
  }
]

const loveItems = getLoveWorlItems()

console.log(otherPictures)

export default {
  currentDetailId: loveItems[0].id,
  loveWorldItems: loveItems,
  otherPictures: otherPictures,
  otherVideos:otherVideos
}