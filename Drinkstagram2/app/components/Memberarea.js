import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import NavigationBar from 'react-native-navigation-bar'
import Navbar from './Navbar'
import {fetchPosts} from '../store'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class Memberarea extends Component{
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getPosts()
    }

  render() {
    const filteredPosts = this.props.posts.filter(post => post.userId === this.props.user.id)
    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* <TouchableOpacity onPress={() => this.props.navigator.push({id: 'News'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>News Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Bars'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Bars</Text>
            </TouchableOpacity> */}
            <View style={{height: 50, backgroundColor: 'powderblue'}}><Text>Drinkstagram</Text></View>
            <Text>Welcome back, {this.props.user.username}</Text>
            <Image source={{uri: this.props.user.profilePic}} style={{width: 200, height: 108, borderRadius: 10}}/>
            <Text>Your most recent posts: </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <ScrollView>
            {filteredPosts.map(post => (
                <View>
                    <Image source={{uri: post.image}} style={{width: 200, height: 108, borderRadius: 10}}/>
                    <Text>{post.content}</Text>
                    <Text>Rating: {post.rating}</Text>
                </View>
            ))}
            </ScrollView>
            <View style={{height: 50, backgroundColor: 'steelblue'}} ></View>
            <Navbar navigator={this.props.navigator}/>
        </View>
    )
  }
}

const mapState = (state) => {
    return {
        user: state.user,
        userText: state.userText,
        posts: state.posts
    }
}

const mapDispatch = (dispatch) => {
    return {
        getPosts() {
            dispatch(fetchPosts())
        },
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

