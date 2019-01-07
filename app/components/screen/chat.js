import React from 'react'
import {
    View, 
    Text,
} from 'react-native'

class Chat extends React.Component{
    render(){
        return (        
            <View>
                <Text>
                    Lets {this.props.login}
                </Text>
            </View>
        )        
    }
}

export default Chat 