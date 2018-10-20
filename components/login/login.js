import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    socialLogin = () => {
        this.props.navigator.showModal({
            screen: 'SocialLogin',
            animated: true,
            animationType: 'slide-up'
        })
    }
    render() {
        return(
            <View style={styles.container}  >  
                <ImageBackground
                    source={require('../../images/bg.jpg')}
                    style={styles.fondo}
                >
                    <View style={styles.logocontent}>
                        <View style={styles.logo}>
                            <Text style={styles.logoText}>UBERSITO</Text>
                        </View>
                    </View>
                    <View style={styles.cont}>
                        <View style={styles.contBox} >
                            <Text style={styles.contTitle}>Empieza A Viajar Con Uber</Text>
                            <View style={styles.contPhone} >
                                <Image 
                                    source={require('../../images/ban.jpg')}
                                    style={styles.band}                               
                                />
                                <Icon
                                    style={styles.contIcon}
                                    name="caret-down"
                                />
                                <Text style={styles.prefijo}>52</Text>
                                <Text style={styles.num}>Intruce Tu Numero</Text>
                            </View>

                        </View>
                        <TouchableHighlight style={styles.social}
                            onPress={this.socialLogin}
                        >
                        <Text style={styles.socialText} >Conectate con una Red Social</Text>
                
                        </TouchableHighlight>   
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:  1

        
    },
    fondo: {
        flex: 1,
        resizeMode: 'contain',

    },
    logocontent: {
        flexGrow: 4,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    logo: {
        backgroundColor: 'white',
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    logoText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 23

    },
    cont: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: 150,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },
    band: {
        height: 30,
        width: 40
    },
    contTitle: {
        fontSize: 25,
        fontWeight: '200'
        


    },

    contPhone: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"

        
    },
    contIcon: {
        marginLeft: 10
    },

    prefijo: {
        marginLeft: 10,
        fontSize: 20
        

    },

    num: {
        marginLeft: 10,
        fontSize: 20,
        color: "#ccc"
    },
    social: {
        backgroundColor: 'white',
        paddingVertical: 30
    }, 
    socialText: {
        color: '#627ED8'

    }



});



