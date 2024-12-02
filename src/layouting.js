import React from "react";
import { View, StyleSheet } from "react-native";

const FlexBoxLayout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
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
    box1:{
        width:50,
        height:50,
        backgroundColor:'red',
        borderRadius:10,
    },
    box2:{
        width:50,
        height:50,
        backgroundColor:'blue',
        borderRadius:10,
    },
    box3:{
        width:50,
        height:50,
        backgroundColor:'green',
        borderRadius:10,
    },
});

export default FlexBoxLayout;