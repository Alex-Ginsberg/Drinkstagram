import React, {Component} from 'react';
import { Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {connect} from 'react-redux'
import {postPost, postLocation} from '../store'

class GooglePlacesInput extends Component{
    constructor() {
        super()
        this.post = this.post.bind(this)
    }

    post(data, details) {
        let locationExists = false
        let currentLocation
        for (var i = 0; i < this.props.locations.length; i++) {
            if (data.id === this.props.locations[i].googleId) {         // If the bar already exists in the database
                locationExists = true
                currentLocation = this.props.locations[i].id
            }
        }
        if (locationExists) {
            this.props.sendPost(this.props.currentContent, this.props.currentRating, this.props.user.id, this.props.image, currentLocation, this.props.currentDrinkName)
            this.props.navigator.push({id: 'News'})
        }

        else {
            this.props.createLocation(data, details, this.props.currentContent, this.props.currentRating, this.props.user.id, this.props.image)
            this.props.navigator.push({id: 'News'})
        }
    }
  
  render(){
    return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={(row) => row.description} // custom description render
      onPress={(data, details = null) => {this.post(data, details)}}
      getDefaultValue={() => {
        return ''; // text input default value
      }}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBTvyX_t4ek_Egw26jeGIaYEExuczxv8OM',
        language: 'en', // language of the results
        types: 'establishment' // default: 'geocode'
      }}
      styles={{
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

    />
  );
}
}

const mapState = (state) => {
    return {
        user: state.user,
        posts: state.posts,
        currentRating: state.currentRating,
        currentContent: state.currentContent,
        image: state.image,
        locations: state.locations,
        currentDrinkName: state.currentDrinkName
    }
}

const mapDispatch = (dispatch) => {
    return {
        submitNewLocation() {
            // check if location exists, if so, make post with that location id
            
        },
        submitPost() {
            // if location doesnt exist, make it, make post with that location id

        },
        sendPost(content, rating, userId, image, location, name) {
            dispatch(postPost(content, rating, userId, image, location, name))
        },
        createLocation(data, details, content, rating, userId, image) {
            dispatch(postLocation(data, details, content, rating, userId, image))
        }
    }
}

export default connect(mapState, mapDispatch)(GooglePlacesInput)