import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class CheckScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Checkout</Text>
            </View>
        )
    }
}