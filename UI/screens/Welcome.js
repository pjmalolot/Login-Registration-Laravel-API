import { View, Text, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'
// import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <ImageBackground
        source={require('../assets/bg.png')} 
        style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }}>
                <View>
                    {/* <Image
                        source={require("../assets/light.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    /> */}

                    {/* <Image
                        source={require("../assets/light.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    /> */}

                    {/* <Image
                        source={require("../assets/light.png")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    /> */}

                    <Image
                        source={require("../assets/logo2.png")}
                        style={{
                            height: 123,
                            width: 250,
                            borderRadius: 20,
                            position: "absolute",
                            top: 175,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 500,
                    width: "100%"
                }}>
                    {/* <Text style={{
                        fontSize: 60,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Welcome</Text> */}

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            opacity: 0.5,
                            marginHorizontal: 75,
                            left: 10,
                            bottom: 330,
                            justifyContent: 'center',
                        }}>START    YOUR    DAY    WITH</Text>
                    </View>

                    <Button
                        title="Get Started"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            // marginTop: 1,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Welcome