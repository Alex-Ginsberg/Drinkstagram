import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsynStorage} from 'react-native'
import {setUserText, setPasswordText, postUser, fetchLocations, setSelectedBar} from '../store'

class Bars extends Component{
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getLocations()
    }

  render() {
    return(
        <View>
            {this.props.locations.map(location => (
                <TouchableOpacity key={location.id} onPress={() => {
                    this.props.setBar(location)
                    this.props.navigator.push({id: 'SelectedBar'})}}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{location.name}</Text>
                </TouchableOpacity>
            ))}
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
        setBar(bar) {
            dispatch(setSelectedBar(bar))
        }
    }
}

export default connect(mapState, mapDispatch)(Bars)

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
// AppRegistry.registerComponent('Login', () => Login)