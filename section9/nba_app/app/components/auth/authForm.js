import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';

import Input from '../../utils/forms/input';

export default class AuthForm extends Component {
    
    state = {
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form: {
            email:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    isEmail:true
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    minLength:6
                }
            },
            confirmPassword:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    confirmPass:'password'
                }
            }
        }
    }

    render() {
        return (
            <View>
                <Input 
                    placeholder="Enter email"
                    placeholderTextColor="#cecece"
                    autoCapitalize={"none"}
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    keyboardType={"email-address"}
                    //overrideStyle={{}}
                />
            </View>
        )
    }
}