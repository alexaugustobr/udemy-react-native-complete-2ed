import React, { component } from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';

const input = (props) => {
    let template = null;

    switch(props.type) {
        case 'textinput': 
            template = <TextInput {...props}/>
        break;
        default:
            return template;
    }

    return template;
}

export default input;