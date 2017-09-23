import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsynStorage, ScrollView} from 'react-native'
import {setSelectedBar, fetchComments, setCommentText, postComment} from '../store'


class SinglePost extends Component{
    constructor() {
        super()
        this.postComment = this.postComment.bind(this)
    }

    componentDidMount() {
        this.props.getCurrentComments(this.props.currentPost.id)
    }

    postComment() {
        this.props.postComment(this.props.commentText, this.props.user.id, this.props.currentPost.id)
        this.props.setCommentText('')
    }

  render() {
      const post = this.props.currentPost
    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{height: 60, backgroundColor: 'powderblue'}}><Text style={styles.logo}>Drinkstagram</Text></View>
          <Image source={{uri: 'https://i.pinimg.com/originals/f5/58/a9/f558a9c7e36608a1f09fa3d628c9aee7.jpg'}} style={styles.backgroundImage}>
          <ScrollView>
            <View style={styles.postContainer}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Image source={{uri: post.user.profilePic}} style={{width: 50, height: 50, borderRadius: 1000}}/>
                    <Text style={styles.name}>{post.user.username}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.setBar(post.location)
                    this.props.navigator.push({id: 'SelectedBar'})}}>
                    <Text style={styles.buttonText}>{post.name}, {post.location.name}</Text>
                </TouchableOpacity>
                <Image source={{uri: post.image}} style={{width: 250, height: 208, borderRadius: 10}}/>
                <Text style={styles.words}>{post.content}</Text>
                <Text style={styles.words}>{post.rating}</Text>
            </View>
            <View style={styles.postContainer}>
                {this.props.currentComments.map(comment => (
                    <View key={comment.id}>
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <Image source={{uri: comment.user.profilePic}} style={{width: 25, height: 25, borderRadius: 1000}}/>
                            <Text style={styles.commentName}>{comment.user.username}</Text>
                        </View>
                        <Text style={styles.words}>{comment.content}</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                ))}
            </View>
            <View style={styles.inputContainer}>
                <TextInput underlineColorAndroid='transparent' style={styles.input}
                         onChangeText={text => this.props.setCommentText(text)}   
                         value={this.props.commentText} placeholder="Leave a comment...">
                </TextInput>
                <TouchableOpacity onPress={this.postComment} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
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
        currentPost: state.currentPost,
        currentComments: state.currentComments,
        commentText: state.commentText,
        user: state.user
    }
}

const mapDispatch = (dispatch) => {
    return {
        setBar(bar) {
            dispatch(setSelectedBar(bar))
        },
        getCurrentComments(id) {
            dispatch(fetchComments(id))
        },
        setCommentText(text) {
            dispatch(setCommentText(text))
        },
        postComment(content, userId, postId) {
            dispatch(postComment(content, userId, postId))
        }

    }
}

export default connect(mapState, mapDispatch)(SinglePost)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    words: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    name: {
        color: 'black',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold', 
    },
    commentName: {
        color: 'black',
        fontSize: 25,
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
        margin: 20,
        padding: 20,
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
// AppRegistry.registerComponent('Login', () => Login)