import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import {setUserText, setPasswordText, setImage, makeUser} from '../store'
import ImagePicker from 'react-native-image-picker';

class Signup extends Component{
    constructor() {
        super()
        this.signup = this.signup.bind(this)
    }

    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
        
            if (response.didCancel) {
            console.log('User cancelled image picker');
            }
            else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            }
            else {
            let source = { uri: response.uri };
            this.props.setImage(source)
        
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
      });
    }
    

  render() {
    return(
        <View style={styles.container}> 
            <Image source={require('../img/theboys.jpg')} style={styles.backgroundImage}>
                <View style={styles.content}>
                    <View style={styles.inputContainer}>
                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                            onChangeText={username => this.props.setUserText(username)}   
                            value={this.props.userText} placeholder="username">
                            </TextInput>
                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                            onChangeText={password => this.props.setPasswordText(password)}
                            value={this.props.passwordText} placeholder="password">
                            </TextInput>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={styles.buttonContainer}>
                            <Text>Select Photo</Text>
                            </TouchableOpacity>
                            <Image source={{uri: this.props.image.uri}} style={{width: 300, height: 200}}/>
                            <TouchableOpacity onPress={this.signup} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </Image>
        </View>
    )
  }

  signup() {
    this.props.signupUser(this.props.userText, this.props.passwordText, this.props.image)
    this.props.navigator.push({
        id: 'Memberarea'
    })
  }
}

const mapState = (state) => {
    return {
        user: state.user,
        userText: state.userText,
        image: state.image,
        passwordText: state.passwordText
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
        setImage (image) {
            dispatch(setImage(image))
        },
        signupUser (username, password, profilePic) {
            dispatch(makeUser(username, password, profilePic))
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

export default connect(mapState, mapDispatch)(Signup)

