import { SCREEN_MAIN } from '../const/Home';

//Welcome
export const screenMain = (name) => {
  return (dispatch) => {
    dispatch({type: SCREEN_MAIN, name})
  }
};
