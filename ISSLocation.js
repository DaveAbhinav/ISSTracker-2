import React, { Component }from "react";
import { View, Text } from "react-native";


export default class ISSLocationScreen extends Component {
    render(){
        return(
            <View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>ISS Location Screen</Text>
            </View>
        )
    }
}