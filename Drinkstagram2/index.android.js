import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Login from './app/components/Login'
import Memberarea from './app/components/Memberarea'
import Signup from './app/components/Signup'
import News from './app/components/News'
import PostForm from './app/components/PostForm'
import Google from './app/components/Google'
import Bars from './app/components/Bars'
import SelectedBar from './app/components/SelectedBar'
import Map from './app/components/Map'
import NavigationExperimental from 'react-native-deprecated-custom-components';
const Navigator = NavigationExperimental.Navigator
import {Provider} from 'react-redux'
import store from './app/store'


export default class Drinkstagram2 extends Component{
  render() {
    return(
      // Build the navigation router
      <Provider store={store}>
      <Navigator initialRoute = {{id: 'Login'}}
      renderScene = {this.navigatorRenderScence} />

      </Provider>
    )
  }

  navigatorRenderScence(route, navigator) {
    _navigator = navigator
    switch (route.id) {
      case 'Login':
        return(<Login navigator = {navigator} />)
      case 'Memberarea':
        return(<Memberarea navigator = {navigator} />)
      case 'Signup':
        return(<Signup navigator = {navigator} />)
      case 'News':
        return(<News navigator = {navigator} />)
      case 'Bars':
        return(<Bars navigator = {navigator} />)
      case 'PostForm':
        return(<PostForm navigator = {navigator} />)
      case 'Google':
        return(<Google navigator = {navigator} />)
      case 'SelectedBar':
        return(<SelectedBar navigator = {navigator} />)
      case 'Map':
        return(<Map navigator = {navigator} />)
    }
  }
}


AppRegistry.registerComponent('Drinkstagram2', () => Drinkstagram2)