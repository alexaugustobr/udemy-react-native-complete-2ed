import React, { component } from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';


const styles = StyleSheet.create({
    input: {
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea',
        fontSize:16,
        padding:5,
        marginTop:10
    }
})

const input = (props) => {
    let template = null;

    switch(props.type) {
        case 'textinput': 
            template = 
                <TextInput 
                    {...props}
                    style={[
                        styles.input,
                        props.overrideStyle
                    ]}
                />
        break;
        default:
            return template;
    }

    return template;
}

export default input;