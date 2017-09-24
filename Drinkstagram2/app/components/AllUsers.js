import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import {fetchUsers, fetchFollowing, postFollow} from '../store'

class AllUsers extends Component{

    componentDidMount() {
        this.props.getUsers()
        this.props.getFollowing(this.props.user.id)
    }


  render() {
    const filterUsers = this.props.allUsers.filter(user => user.id !== this.props.user.id)
    const following = []
    for (var i = 0; i < this.props.following.length; i++) {
        following.push(this.props.following[i].followerId)
    }
    const users = filterUsers.filter(user => !following.includes(user.id))

    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{height: 60, backgroundColor: 'powderblue'}}><Text style={styles.logo}>Drinkstagram</Text></View>
          <Image source={{uri: 'https://i.pinimg.com/originals/f5/58/a9/f558a9c7e36608a1f09fa3d628c9aee7.jpg'}} style={styles.backgroundImage}>
            <ScrollView>
                {users.map(user => (
                    <View key={user.id} style={styles.postContainer}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Image source={{uri: user.profilePic}} style={{width: 100, height: 100, borderRadius: 1000}}/>
                        <Text style={styles.name}>{user.username}</Text>
                        <TouchableOpacity style={styles.follow} onPress={() => {
                            this.props.follow(this.props.user.id, user.id)}}>
                            <Text style={{color: 'white', fontSize: 15}}>Follow</Text>
                        </TouchableOpacity>
                    </View>
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
        allUsers: state.allUsers,
        following: state.following
    }
}

const mapDispatch = (dispatch) => {
    return {
        getUsers() {
            dispatch(fetchUsers())
        },
        follow(userId, followerId) {
            dispatch(postFollow(userId, followerId))
        },
        getFollowing(id) {
            dispatch(fetchFollowing(id))
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
    follow: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(mapState, mapDispatch)(AllUsers)

