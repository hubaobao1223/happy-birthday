import { combineReducers } from 'redux'
import LocalStorage from 'util/LocalStorage'
import defaultState from './state'

function loveWorldItems(state = defaultState.loveWorldItems, action) {
  switch (action.type) {
    case 'SET_LOVE_WORLD_ITEMS':
      return action.data
    case 'ADD_LOVE_WORLD_ITEM':
      saveLoveWorldItem(action.data)
      return state.concat(action.data)
    default: {
      let savedItems = LocalStorage.getItem('loveWorldItems')
      return savedItems ? state.concat(savedItems) : state
    }
  }
}

function allVideos(videoItems = [], action) {
  let currentState = action.state ? action.state : defaultState
  let videoList = []
  currentState.loveWorldItems.forEach((item) => {
    if (!item) {return}
    videoList = videoList.concat(item.videos)
  })
  return videoList.concat(currentState.otherVideos)
}

function allPictures(pictureItems = [], action) {
  let currentState = action.state ? action.state : defaultState
  let picturesList = []
  currentState.loveWorldItems.forEach(item => {
    picturesList = picturesList.concat(item.pictures)
  })
  return picturesList.concat(currentState.otherPictures)
}

function allStories(stories = [], action) {
  let currentState = action.state ? action.state : defaultState
  let storyList = []
  currentState.loveWorldItems.forEach(item => {
    storyList.push(item.story)
  })
  return storyList
}

function currentDetailItem(detailItem = getDefaultDetailItem(), action) {
  let currentState = action.state ? action.state : defaultState
  switch (action.type) {
    case 'SET_CURRENT_DETAIL_ID':
      return getLoveWorldItemById(action.data, currentState.loveWorldItems)
    default:
      return detailItem
  }
}

function currentDetailId(state = defaultState.currentDetailId, action) {
  switch (action.type) {
    case 'SET_CURRENT_DETAIL_ID':
      return action.data
    default:
      return state
  }
}

function getDefaultDetailItem() {
  return getLoveWorldItemById(defaultState.currentDetailId, defaultState.loveWorldItems)
}

function getLoveWorldItemById(id, loveItems) {
  for (let i = 0; i < loveItems.length; i++) {
    if (loveItems[i].id === id) {
      return loveItems[i]
    }
  }
}

function saveLoveWorldItem(item) {
  let savedLoveItems = LocalStorage.getItem('loveWorldItems')
  let newSaveItems = savedLoveItems ? savedLoveItems.concat(item) : [item]
  LocalStorage.setItem('loveWorldItems', newSaveItems)
}

export default combineReducers({
  loveWorldItems,
  allVideos,
  allPictures,
  currentDetailItem,
  currentDetailId,
  allStories
})