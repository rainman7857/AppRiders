import React from "react";
import { StatusBar, AppState, Dimensions } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';
import async from 'async'
import Icon from "react-native-vector-icons/Feather";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(Thunk));

import rootReducer from './src/rootReducer';
import { dataStorage } from './src/actions/Main'
const { width } = Dimensions.get("window")

import { Login, Forgot, Home, SideBar, Earnings, OrderDetails, Settings, Ordini, Deposits, Splash } from './src'
import ErrorMessage from './src/components/ErrorMessage'

const MainStack = createStackNavigator({
  Main: Home,
  Ordini: Ordini,
  Deposits: Deposits,
  Settings: Settings,
  OrderDetails: OrderDetails,
  Login: Login,
  Forgot: Forgot,
},{ defaultNavigationOptions: { gesturesEnabled: false, header: null } });

const MyDrawerNavigator = createDrawerNavigator({ Home: MainStack },{
  contentComponent: (props) => (<SideBar {...props} />),
  drawerBackgroundColor: 'transparent',
  defaultNavigationOptions: { gesturesEnabled: false, header: null },
  drawerWidth: width - 45,
});

const WelcomeStack = createStackNavigator({
  Login: Login,
  Home: MyDrawerNavigator,
  Forgot: Forgot,
  ErrorMessage: ErrorMessage
},{ defaultNavigationOptions: { gesturesEnabled: false, header: null }, headerMode: 'none', mode: 'modal', transparentCard: true, cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0)', opacity: 1 } });

const HomeStack = createStackNavigator({
  Home: MyDrawerNavigator,
  Login: Login,
  Forgot: Forgot,
  ErrorMessage: ErrorMessage
},{ defaultNavigationOptions: { gesturesEnabled: false, header: null }, headerMode: 'none', mode: 'modal', transparentCard: true, cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0)', opacity: 1 } });

const AppContainer = createAppContainer(WelcomeStack);
const MainContainer = createAppContainer(HomeStack);

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      data_bool: true,
      welcome: false,
    }
    setTimeout(() => {
      this.setState({loading: false})
    }, 1500)
    this._handleAppStateChange = this._handleAppStateChange.bind(this)
  }
  componentDidMount(){
    this.getDataUser()
    AppState.addEventListener('change', (state) => this._handleAppStateChange(state));
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  async getDataUser(){
    try {
      let use = await AsyncStorage.getItem('data');
      let parse = JSON.parse(use);
      if(parse === null || parse === undefined){
        this.setState({data_bool: false})
      } else {
        store.dispatch(dataStorage(parse))
        console.log(parse)
        this.setState({data_bool: false, welcome: parse.data_user.token ? true : false})
      }
    }
    catch(error){ this.setState({data_bool: false}) }
  }
  async addUserStorage(){
    const data = store.getState()
    const jd = JSON.stringify(data)
    AsyncStorage.setItem('data', JSON.stringify(data.main));
  }
  _handleAppStateChange = (state) => {
    if(state === 'background'){
      this.addUserStorage()
    }
  }
  render() {
    const { loading, data_bool, welcome } = this.state
    console.disableYellowBox = true;
    if(loading || data_bool){
      return <Splash />
    } else {
      return(
        <Provider store={store}>
          <StatusBar backgroundColor={"#38C67C"} barStyle={"dark-content"} />
          {welcome ? <MainContainer /> : <AppContainer />}
        </Provider>
      )
    }
  }
}
