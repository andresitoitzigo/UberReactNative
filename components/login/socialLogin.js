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

export default class SocialLogin extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    goBack = () => {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
        })
    }
    render(){
        return(
            <View style= {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <TouchableHighlight
                    onPress={this.goBack}
                >
                    <Text>Back</Text>
                </TouchableHighlight>
            </View>

        )
    }
}
