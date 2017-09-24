import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import {setUserText, setPasswordText, postUser} from '../store'

class Login extends Component{
    constructor() {
        super()
        this.login = this.login.bind(this)
    }

  render() {
    return(
        <View style={styles.container}> 
            <Image source={require('../img/bar.jpg')} style={styles.backgroundImage}>
                <View style={styles.content}>
                    <Text style={styles.logo}>- Drinkstagram -</Text>

                    <View style={styles.inputContainer}>
                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                         onChangeText={username => this.props.setUserText(username)}   
                         value={this.props.userText} placeholder="username">
                        </TextInput>
                        <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                        onChangeText={password => this.props.setPasswordText(password)}
                        value={this.props.passwordText} placeholder="password">
                        </TextInput>
                        <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Signup'})} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Not a user? Sign up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Image>
        </View>
    )
  }

  login() {
    this.props.loginUser(this.props.userText, this.props.passwordText)
    this.props.navigator.push({
        id: 'Memberarea'
    })
  }
}

const mapState = (state) => {
    return {
        userText: state.userText,
        passwordText: state.passwordText,
        user: state.user
    }
}

const mapDispatch = (dispatch) => {
    return {
        setUserText (text) {
            dispatch(setUserText(text))
      },
        setPasswordText (text) {
            dispatch(setPasswordText(text))
        },
        loginUser(username, password) {
            dispatch(postUser(username, password))
        },
    }
}

export default connect(mapState, mapDispatch)(Login)

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