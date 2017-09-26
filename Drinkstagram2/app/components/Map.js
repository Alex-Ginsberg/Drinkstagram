import MapView from 'react-native-maps';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native'
import {fetchLocations, setCurrentLat, setCurrentLng} from '../store'

class Map extends Component{
    componentDidMount() {
        console.log('Inside mount')
        this.props.getLocations()
        navigator.geolocation.getCurrentPosition(
          (position) => {
              console.log(position, 'position')
              this.props.setLat(position.coords.latitude)
              this.props.setLng(position.coords.longitude)
          },
          (error) => {console.log('INSIDE ERRPR', error.message)},
          { enableHighAccuracy: false, timeout: 50000, maximumAge: 1000 }
        );
      }


  render() {
    const latitude = this.props.currentLat
    const longitude = this.props.currentLng
    return (
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
            coordinate={{latitude: latitude, longitude: longitude}}
            title={'You!'}
            description={'Current Location'}
            image={'https://d30y9cdsu7xlg0.cloudfront.net/png/25719-200.png'}
        />
        {this.props.locations.map(location => (
            <MapView.Marker key={location.id}
            coordinate={{latitude: location.lat, longitude: location.long}}
            title={location.name}
            description={location.description} />
        ))}
        </MapView>
      </View>
    )
  }

 
}

const mapState = (state) => {
    return {
        locations: state.locations,
        currentLat: state.currentLat,
        currentLng: state.currentLng
    }
}

const mapDispatch = (dispatch) => {
    return {
        getLocations() {
            dispatch(fetchLocations())
        },
        setLat(lat) {
            dispatch(setCurrentLat(lat))
        },
        setLng(lng) {
            dispatch(setCurrentLng(lng))
        }
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

