import { CHANGE_LANG, DATA_USER, DATA_STORAGE } from '../const/Main'
import { getStatusBarHeight, getBottomSpace } from '../iphone_helper'

const top_space = getStatusBarHeight(true)
const bottom_space = getBottomSpace()

const INITIAL_STATE = {
  lang: 'en',

  top_space,
  bottom_space,

  data_user: {},
};

const Main = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.lang
      }
    case DATA_USER:
      return {
        ...state,
        data_user: action.data
      }
    case DATA_STORAGE:
      return action.data
    default:
      return state;
  }
}

export default Main;
