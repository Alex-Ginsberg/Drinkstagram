import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

 
export default class Nav extends Component {

    render() {
        return(
        <View>
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
        )
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