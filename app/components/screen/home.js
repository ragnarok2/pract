import React from 'react'
import {
    View, 
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import {
    Actions,
} from 'react-native-router-flux'

import {login, password} from '../../services/validate'

import Style from '../../styles/style'

import {addItem} from '../../services/ItemService'



class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRead = this.handleRead.bind(this)

    }
    
    handleChange(e) {
        this.setState({
            login: e.nativeEvent.text,
            password: e.nativeEvent.text
        })
    }

    handleSubmit () {
        addItem(this.state.login, this.state.password)
        alert('add item successfully')
    }

    handleRead(){        
    }
    
    validate(text, type)
    {
        login
        password

        if (type == 'login')
        {
            if (login.test(text)){
                alert("login is validated")
                console.log("login is validated")
                this.setState({ login : text })
            } else {
                console.log("login isn`t validated")
                alert("login isn`t validated")
            }
        }

        if (type == 'password')
        {
            if (password.test(text)){
                alert("password is validated")
                console.log("password is validated")
                this.setState({ password : text })
            } else {
                console.log("password isn`t validated")
                alert("password isn`t validated")
            }
        }
    }

    show = () => {
        const {login, password} = this.state;
        alert(this.state.login);
        alert(this.state.password);
    }

    render(){
        return (        
            <View style = {Style.container} >
                <Text style = {Style.title} >
                    Enter login/password
                </Text>

                <Text style = {Style.login} >
                    Login:
                </Text>

                <TextInput
                    style = { Style.edit } 
                    onChangeText = {(text) => this.validate(text, 'login')}
                    onChange = {() => this.handleChange}
                    value = {this.state.login} >

                </TextInput>

                <Text style = {Style.login} >
                    Password:
                </Text>

                <TextInput
                    style = {Style.edit}
                    onChangeText = {(text) => {this.validate(text, 'password')}} 
                    secureTextEntry = {true} 
                    value = {this.state.password}>

                </TextInput>

                <View style = {Style.group}>
                    <TouchableOpacity style={Style.button}
                        onPress={() => {
                            Actions.chat({
                                login: this.state.login,
                            })
                        }
                        } >
                        <Text style={Style.text} >LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.button}
                        onPress={() => {
                            Actions.registry({
                                login: this.state.login,
                            })
                        }
                        } >
                        <Text style={Style.text} >REGISTRY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.button}
                        onPress={this.handleSubmit} >
                        <Text style={Style.text} >WRITE</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style = {Style.group} >   
                    <TouchableOpacity style={Style.button}
                        onPress={() => {
                            Actions.ListItem({
                                listItem: this.state.ListItem
                            })
                        }
                        } >
                        <Text style={Style.text} >READ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.button}
                        onPress={() => {
                            Actions.Test({
                                login: this.state.login,
                                password: this.state.password
                            })
                        }
                        } >
                        <Text style={Style.text} > TEST </Text>
                    </TouchableOpacity>                 
                </View>
            </View>
        )        
    }
}

export default Home