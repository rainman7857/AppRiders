import { CHANGE_LANG, DATA_USER, DATA_STORAGE } from '../const/Main'
import { getStatusBarHeight, getBottomSpace } from '../iphone_helper'

const top_space = getStatusBarHeight(true)
const bottom_space = getBottomSpace()

const INITIAL_STATE = {
  lang: 'en',

  top_space,
  bottom_space,

  data_user: {},
  // data_user: {
  //   email: "v.jalbu31@gmail.com",
  //   first_name: "Courier",
  //   id: "1000",
  //   last_name: "one",
  //   phone: null,
  //   hash_user_id: "d6e2d534f6e48e5df2a9117aff488276",
  //   token: "token_demo",
  //   listing: {
  //     address: "Via milano 12 Brescia",
  //     detailed_address: {
  //       city: "Brescia",
  //       country: null,
  //       state: null,
  //       street_address_1: "Via milano",
  //       street_address_2: "12",
  //       zip_code: "25040"
  //     },
  //     id: "11111",
  //     image_url: "https://www.ceebo.com/uploads/pizza.jpg",
  //     location: {
  //       lat: "30.39353370",
  //       lng: "-86.49578330"
  //     },
  //     name: "Restaurant one",
  //     phone_number: "4155555555"
  //   }
  // }

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
