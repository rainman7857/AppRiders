import { CHANGE_LANG, DATA_USER, DATA_STORAGE } from '../const/Main';

//Welcome
export const changeLang = (lang) => {
  return (dispatch) => {
    dispatch({type: CHANGE_LANG, lang})
  }
};

//DataUser
export const dataUser = (data) => {
  return (dispatch) => {
    dispatch({type: DATA_USER, data})
  }
};
//DataStorage
export const dataStorage = (data) => {
  return (dispatch) => {
    dispatch({type: DATA_STORAGE, data})
  }
};
