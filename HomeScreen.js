import React, { Component }from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image } from "react-native";


export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/bg_image.png")} style = {styles.backgroundImage}>
                <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>
                    ISS Tracker</Text>
                </View>

                <TouchableOpacity style = {styles.routeCard} onPress = {()=>
                this.props.navigation.navigate("ISSLocation")}>
                    <Text style = {styles.routeText}>Iss Location</Text>
                    <Text style = {styles.knowMore}>{"know More"}</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard} onPress = {()=>
                this.props.navigation.navigate("Meteors")}>
                    <Text style = {styles.routeText}>Meteors</Text>
                    <Text style = {styles.knowMore}>{"know More"}</Text>
                    <Text style = {styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS == "android"? StatusBar.currentHeight: 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white",
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        marginTop: 40,
        paddingLeft: 40, 
        fontSize: 30,
        fontWeight: 'bold',
        color: "red"
    },
    backgroundImage: { 
        flex: 1,
        resizeMode: 'cover',
  },
  knowMore: {
      paddingLeft: 30,
      color: "black",
      fontSize: 15,
  },
  bgDigit: {
      positon: 'absolute',
      fontSize: 50,
      right: 20,
      bottom: -15,
      color: "blue",
      zIndex: -1,
  },
  iconImage: {
      position: 'absolute',
      height: 200,
      width: 200,
      resizeMode: 'contain',
      right: 20,
      top: -80
  }
})