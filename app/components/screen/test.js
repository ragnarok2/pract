import React from 'react'
import {
    View, 
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Style from '../../styles/style'

import {regItem} from '../../services/ItemService'

import {login, password} from '../../services/validate'



class Test extends React.Component{

    constructor(){
        super()
        this.state = {
            login: '',
            password: '',
            name: '',
            email: '',
            phone: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = () => {
        regItem(this.state.login,
            this.state.password,
            this.state,name,
            this.state.email,
            this.state.phone)
        alert("Registration successful")
    }

    handleChange = (e) =>{
        this.setState({
            login: e.nativeEvent.text,
            password: e.nativeEvent.text,
            name: e.nativeEvent.text,
            email: e.nativeEvent.text,
            phone: e.nativeEvent.text,
        })
    }

    validate(type, text){

        login
        password

        if (type == 'login')
        {
            if (login.test(text)){
                alert("login is validated")
            } else {
                alert("login isn`t validated")
            }
        } else if (type == 'password')
        {
            if (password.test(text)){
                alert("password is validated")
            } else {
                alert("password isn`t validated")
            }
        }else {
            alert("You don`t enter any login any password")
        }
        
    }

    render(){
        return (        
            <View style = {Style.container} >
                {/* <Text>
                    Hi my friend {this.props.login}
                </Text>
                <Text>\
                    Your pasword is {this.props.password}
                </Text> */}
                <View style = {Style.title}>
                    <Text style = {Style.login}>login</Text>
                    <TextInput style = {Style.edit}
                    onChangeText={() => this.handleChange} ></TextInput>
                    <Text style = {Style.login}>password</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={() => this.handleChange}></TextInput>
                    <Text style = {Style.login}>repeat password</Text>
                    <TextInput style = {Style.edit} ></TextInput>
                    <Text style = {Style.login}>name</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={() => this.handleChange}></TextInput>
                    <Text style = {Style.login}>email</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={() => this.handleChange}></TextInput>
                    <Text style = {Style.login}>phone</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={() => this.handleChange}></TextInput>
                    <View style = {Style.group} >
                        <TouchableOpacity style = {Style.button}>
                            <Text style={Style.text} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {Style.button}>
                            <Text style={Style.text} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )        
    }
}

export default Test 