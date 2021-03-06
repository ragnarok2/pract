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

    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: '',
            name: '',
            email: '',
            phone: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(text) {
        this.setState({
            login: text,
            password: text,
            name: text,
            email: text,
            phone: text,
        })
    }

    handleSubmit() {
        regItem(
            this.state.login,
            this.state.password,
            this.state.name,
            this.state.email,
            this.state.phone)
        alert("Registration successful")
    }

    show = () => {
        const {login, password} = this.state;
        alert(this.state.login);
        alert(this.state.password);
        alert(this.state.name);
        alert(this.state.email);
        alert(this.state.phone);
    }

    // readyToDB(type, text){
    //     if (type == 'login'){
    //         this.setState({login: text})
    //     }else if (type == 'password'){
    //         this.setState({password: text})
    //     }else if (type == 'name'){
    //         this.setState({name: text})
    //     }else if (type == 'email'){
    //         this.setState({email: text})
    //     }else if (type == 'login'){
    //         this.setState({phone: text})
    //     }
    // }

    // validate(type, text){

    //     login
    //     password

    //     if (type == 'login')
    //     {
    //         if (login.test(text)){
    //             alert("login is validated")
    //         } else {
    //             alert("login isn`t validated")
    //         }
    //     } else if (type == 'password')
    //     {
    //         if (password.test(text)){
    //             alert("password is validated")
    //         } else {
    //             alert("password isn`t validated")
    //         }
    //     }else {
    //         alert("You don`t enter any login any password")
    //     }
        
    // }

    render(){
        return (        
            <View style = {Style.container} >                
                <View style = {Style.title}>
                    <Text style = {Style.login}>login</Text>
                    <TextInput style = {Style.edit}
                    onChangeText={login => this.setState({login})}
                    ></TextInput>
                    <Text style = {Style.login}>password</Text>
                    <TextInput style = {Style.edit}
                    onChangeText={password => this.setState({password})}
                    secureTextEntry={true} ></TextInput>
                    <Text style = {Style.login}>repeat password</Text>
                    <TextInput style = {Style.edit} 
                    secureTextEntry={true}></TextInput>
                    <Text style = {Style.login}>name</Text>
                    <TextInput style = {Style.edit}
                    onChangeText={name=> this.setState({name})}
                    ></TextInput>
                    <Text style = {Style.login}>email</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={email=> this.setState({email})}
                    ></TextInput>
                    <Text style = {Style.login}>phone</Text>
                    <TextInput style = {Style.edit} 
                    onChangeText={phone=> this.setState({phone})}
                    ></TextInput>                    
                    <View style = {Style.group} >
                        <TouchableOpacity style = {Style.button}
                            onPress={this.handleSubmit}>
                            <Text style={Style.text} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {Style.button}>
                            <Text style={Style.text} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {Style.button}
                            onPress={this.show}>
                            <Text style={Style.text} >Show Data</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )        
    }
}

export default Test 