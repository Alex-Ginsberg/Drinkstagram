import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import NavigationBar from 'react-native-navigation-bar'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class Memberarea extends Component{
    constructor() {
        super()
    }

  render() {
    const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
    const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
    return(
        <View > 
            <View>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'News'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>News Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Bars'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Bars</Text>
            </TouchableOpacity>
        </View>
            <Text>WELCOME{this.props.user.username}</Text>
            <Image source={{uri: this.props.user.profilePic}} style={{width: 100, height: 58}}/>
            
        </View>
    )
  }
}

const mapState = (state) => {
    return {
        user: state.user,
        userText: state.userText
    }
}

const mapDispatch = (dispatch) => {
    return {
        
    }
}


  const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15, 
        marginBottom: 20, 
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0, 
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1, 
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)'

    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(mapState, mapDispatch)(Memberarea)

