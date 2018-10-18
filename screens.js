import {Navigation} from 'react-native-navigation'

export function registerScreens() {
    Navigation.registerComponent('Init', (sc) => require('./components/login/login').default);
    Navigation.registerComponent('SocialLogin', (sc) => require('./components/login/socialLogin').default);
}
