import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FontExample = ()=>{
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Hello world!</Text>
        <Text style={styles.largeText}>This is A Larger Text</Text>
        <Text style={styles.redText}>This text is red and italic</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5',//Memberikan warna latar belakang untuk estetika
        padding:20,    
    },
    text:{
        fontSize:20,
        color:'#333333', // warna abu-abu gelap agar terlihat
    },
    largeText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#007BFF', // Warna biru untuk text besar
        marginTop:15, // memberikan jarak antar text
    },
    redText:{
        fontSize:18,
        color:'red',
        fontStyle:'italic',
        textDecorationLine:'underline', // Memberikan garis bawah
        marginTop:15,
    },
});

export default FontExample;