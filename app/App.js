import React from 'react'

import Home from './components/screen/home'
import Chat from './components/screen/chat'
import Login from './components/screen/login'
import Registry from './components/screen/registry'
import ListItem from './components/screen/listItem'
import Test from './components/screen/test'
import Twitter from './components/screen/twitter'

import {
    Router,
    Scene,
} from 'react-native-router-flux'

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'


class App extends React.Component {


    render() {
        return (
            <Router>
                <Scene key='root' style={{ paddingTop: Platform.OS === 'ios' ? 60 : 70 }} >
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='chat' component={Chat} title='Chat' />
                    <Scene key='login' component={Login} title='Login' />
                    <Scene key='registry' component={Registry} title='Registry' />                    
                    <Scene key='ListItem' component={ListItem} title='ListItem' />
                    <Scene key='Test' component={Test} title='Test' />
                    <Scene key='Twitter' component={Twitter} title='Twitter' />
                </Scene>
            </Router>
        )
    }
}

export default App