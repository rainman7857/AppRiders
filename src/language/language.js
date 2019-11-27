import { CHANGE_LANG } from '../const/Main'

import en from './en';
import it from './it';

const INITIAL_STATE = {
  lang: en
};

const language = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_LANG:
      return {
        ...state,
        lang: it
      }
    default:
      return state;
  }
}

export default language
