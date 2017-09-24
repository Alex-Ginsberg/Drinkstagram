import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Picker} from 'react-native'
import {setContentText, setCurrentRating, postPost, setImage, fetchLocations, setCurrentLocation, setDrinkText} from '../store'
import ImagePicker from 'react-native-image-picker';

class PostForm extends Component{
    constructor() {
        super()
        this.post = this.post.bind(this)
    }

    componentDidMount() {
        this.props.getLocations()
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
        }
      });
    }

    post() {
        this.props.sendPost(this.props.currentContent, this.props.currentRating, this.props.user.id, this.props.image, this.props.currentDrinkName)
    }


  render() {
    return (
        <View style={styles.content}>
        <View style={styles.inputContainer}>
            <TextInput underlineColorAndroid='transparent' style={styles.input}
             onChangeText={name => this.props.setDrinkText(name)}   
             value={this.props.currentDrinkName} placeholder="Drink Name">
            </TextInput>
            <TextInput underlineColorAndroid='transparent' style={styles.input}
             onChangeText={content => this.props.setCurrentContent(content)}   
             value={this.props.currentContent} placeholder="Content">
            </TextInput>
            <Picker
                selectedValue={this.props.currentRating}
                onValueChange={(itemValue, itemIndex) => this.props.setCurrentRating(itemValue)}>
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
            </Picker>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={styles.buttonContainer}>
                <Text>Select Photo</Text>
                </TouchableOpacity>
            <Image source={{uri: this.props.image.uri}} style={{width: 300, height: 200}}/>
            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Google'})} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Select a Bar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }

 
}

const mapState = (state) => {
    return {
        user: state.user,
        currentRating: state.currentRating,
        currentContent: state.currentContent,
        image: state.image,
        locations: state.locations,
        currentLocation: state.currentLocation,
        currentDrinkName: state.currentDrinkName
    }
}

const mapDispatch = (dispatch) => {
    return {
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
        getLocations() {
            dispatch(fetchLocations())
        },
        setCurrentLocation(place) {
            dispatch(setCurrentLocation(place))
        },
        setDrinkText(text) {
            dispatch(setDrinkText(text))
        }
    }
}

export default connect(mapState, mapDispatch)(PostForm)

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
