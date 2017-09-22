import MapView from 'react-native-maps';
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsynStorage, Picker} from 'react-native'
import {fetchPosts, setContentText, setCurrentRating, postPost, setImage, fetchLocations, setCurrentLocation, setDrinkText} from '../store'
import ImagePicker from 'react-native-image-picker';
import Google from './Google'
import Navbar from './Navbar'

class Map extends Component{
    constructor() {
        super()
        this.state = {
            latitude: 10,
            longitude: 10
        }
    }

    componentDidMount() {
        console.log('MOuNTING', navigator)
        this.props.getLocations()
        navigator.geolocation.getCurrentPosition(
          (position) => {
              console.log('POSITION: ', position)
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => {console.log('INSIDE ERRPR', error.message)
              this.setState({ error: error.message })},
          { enableHighAccuracy: false, timeout: 1000000, maximumAge: 1000 }
        );
      }


  render() {
      const latitude = this.state.latitude
      const longitude = this.state.longitude
    return(
        <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <MapView.Marker
            coordinate={{latitude, longitude}}
            title={'You!'}
            description={'Current Location'}
            image={'https://d30y9cdsu7xlg0.cloudfront.net/png/25719-200.png'}
        />
        {this.props.locations.map(location => (
            <MapView.Marker key={location.id}
            coordinate={{latitude: location.lat, longitude: location.long}}
            title={location.name}
            description={location.description}
        />
        ))}
        </MapView>
      </View>
    )
  }

 
}

const mapState = (state) => {
    return {
        locations: state.locations
    }
}

const mapDispatch = (dispatch) => {
    return {
        getLocations() {
            dispatch(fetchLocations())
        },
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

export default connect(mapState, mapDispatch)(Map)

