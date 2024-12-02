import React from "react";
import { View, StyleSheet, Text } from "react-native";

const StylingExample = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Hello</Text>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5f5f5", // Memberikan warna latar belakang untuk container
    },
    box:{
        width:150, // Lebih besar agar terlihat lebih baik
        height:150,
        backgroundColor:"lightgreen",
        margin:10, // Memberikan jarak dengan elemen lain
        borderRadius:10, // Membuat sudut melengkung
        justifyContent:"center", // Menempatkan teks di tengah 
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        elevation:4, // Untuk efek bayangan di android
    },
    text:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
    },
});

export default StylingExample;