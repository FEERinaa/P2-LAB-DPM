import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const DimensionExample = ()=> {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <View style = {styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>window Width: {windowWidth.toFixed(2)}</Text>
                <Text style={styles.text}>window Height: {windowHeight.toFixed(2)}</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5',//Memberikan warna latar belakang untuk estetika
    },
    box:{
        backgroundColor:'lightblue',
        padding:20,
        borderRadius:10,  // Membuat sudut kotak melengkung
        alignItems:'center', // Menempatkan text di tengah kotak
    },
    text:{
        fontSize:16,
        color:'darkblue', // warna text yang lebih terlihat
        marginBottom:5, // jarak antar text
    },
});

export default DimensionExample;