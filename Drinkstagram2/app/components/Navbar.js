import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class Navbar extends Component {
    constructor() {
        super()
    }
    
  render() {
    const navArray = ['News', 'Bars', 'PostForm']
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => {this.props.navigator.push({id: navArray[newTabIndex]}); alert(newTabIndex)}}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="NewsFeed"
          icon={<Icon name="rocket" size={30} color="#900" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Bars"
          icon={<Icon size={24} color="white" name="rocket" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Post"
          icon={<Icon size={24} color="white" name="rocket" />}
        />
      </BottomNavigation>
    )
  }
}