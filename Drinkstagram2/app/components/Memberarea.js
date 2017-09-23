import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import NavigationBar from 'react-native-navigation-bar'
import Navbar from './Navbar'
import {fetchPosts, setSelectedBar, setCurrentPost} from '../store'
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
          <Image source={{uri: 'https://i.pinimg.com/originals/f5/58/a9/f558a9c7e36608a1f09fa3d628c9aee7.jpg'}} style={styles.backgroundImage}>
            <View style={{height: 60, backgroundColor: 'powderblue'}}><Text style={styles.logo}>Drinkstagram</Text></View>
            <ScrollView>
            <View style={styles.postContainer}>
                <Text style={styles.words}>Welcome back, {this.props.user.username}</Text>
                <Image source={{uri: this.props.user.profilePic}} style={{width: 200, height: 108, borderRadius: 10}}/>
            </View>
            <Text>Your most recent posts: </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            {filteredPosts.slice(0).reverse().map(post => (
                <View key={post.id} style={styles.postContainer}>
                    <TouchableOpacity onPress={() => {
                        this.props.setBar(post.location)
                        this.props.navigator.push({id: 'SelectedBar'})}}>
                        <Text style={styles.buttonText}>{post.name}, {post.location.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.setPost(post)
                        this.props.navigator.push({id: 'SinglePost'})
                    }}>
                    <Image source={{uri: post.image}} style={{width: 250, height: 208, borderRadius: 10, opacity:1}}/>
                    </TouchableOpacity>
                    <Text style={styles.words}>{post.content}</Text>
                    <Text style={styles.words}>Rating: {post.rating}/5</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            ))}
            </ScrollView>
            <View style={{height: 50, backgroundColor: 'steelblue'}} >
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'News'})} style={styles.lowLeft} >
                <Text style={styles.buttonText}>News Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Bars'})} style={styles.lowMiddle} >
                <Text style={styles.buttonText}>Bars</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'PostForm'})} style={styles.lowRight} >
                <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
            </View>
            </Image>
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
        setBar(bar) {
            dispatch(setSelectedBar(bar))
        },
        setPost(post) {
            dispatch(setCurrentPost(post))
        }
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
    words: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
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
    postContainer: {
        margin: 20,
        marginBottom: 0, 
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1, 
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',

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
        margin: 0,
        padding: 0,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderWidth: 1,
        borderColor: '#fff'
    },
    lowLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    lowMiddle: {
        position: 'absolute',
        bottom:0,
        right:25,
        left:200,
        marginLeft:-150,
    },
    lowRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    buttonText: {
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(mapState, mapDispatch)(Memberarea)

