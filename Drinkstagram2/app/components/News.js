import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Picker, ScrollView} from 'react-native'
import NavigationBar from 'react-native-navigation-bar'
import {fetchPosts, setContentText, setCurrentRating, postPost, setImage, setSelectedBar, setCurrentPost} from '../store'
import Navbar from './Navbar'



class News extends Component{
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getPosts()
    }


    

  render() {

    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{height: 60, backgroundColor: 'powderblue'}}><Text style={styles.logo}>Drinkstagram</Text></View>
          <Image source={{uri: 'https://i.pinimg.com/originals/f5/58/a9/f558a9c7e36608a1f09fa3d628c9aee7.jpg'}} style={styles.backgroundImage}>
        <ScrollView>
            {this.props.posts.slice(0).reverse().map(post => (
                <View key={post.id} style={styles.postContainer}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Image source={{uri: post.user.profilePic}} style={{width: 50, height: 50, borderRadius: 1000}}/>
                    <Text style={styles.name}>{post.user.username}</Text>
                </View>
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
                <Text style={styles.words}>{post.rating}</Text>
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
        posts: state.posts,
        currentRating: state.currentRating,
        currentContent: state.currentContent,
        image: state.image,
    }
}

const mapDispatch = (dispatch) => {
    return {
        getPosts() {
            dispatch(fetchPosts())
        },
        setCurrentContent(content){
            dispatch(setContentText(content))
        },
        setCurrentRating(num) {
           dispatch(setCurrentRating(num))
        },
        sendPost(content, rating, userId, image) {
            dispatch(postPost(content, rating, userId, image))
        },
        setImage (image) {
            dispatch(setImage(image))
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
    name: {
        color: 'black',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold', 
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
    words: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
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

export default connect(mapState, mapDispatch)(News)

