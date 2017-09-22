import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Picker, ScrollView} from 'react-native'
import NavigationBar from 'react-native-navigation-bar'
import {fetchPosts, setContentText, setCurrentRating, postPost, setImage} from '../store'
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
          <View style={{height: 50, backgroundColor: 'powderblue'}}><Text>Drinkstagram</Text></View>
        <ScrollView>
        
            
        <TouchableOpacity onPress={() => this.props.navigator.push({id: 'PostForm'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Post Something!</Text>
        </TouchableOpacity>
            {this.props.posts.slice(0).reverse().map(post => (
                <View key={post.id}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Image source={{uri: post.user.profilePic}} style={{width: 50, height: 50, borderRadius: 1000}}/>
                    <Text>{post.user.username}</Text>
                </View>
                <Image source={{uri: post.image}} style={{width: 300, height: 200}}/>
                <Text>{post.content}</Text>
                <Text>{post.rating}</Text>
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

