import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email email or username",
            value: "",
        },
        {
            placeholder: "Password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={styles.screen}>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Back Frame */}
                    <ImageBackground style={{ left: RFPercentage(0.5), width: RFPercentage(55), height: RFPercentage(100), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/Images/back.png')} >
                        <View style={{ right: RFPercentage(0.6), width: RFPercentage(38), height: RFPercentage(55), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }} >
                            {/* Logo */}
                            <Image style={{ marginTop: RFPercentage(5), width: RFPercentage(30), height: RFPercentage(12) }} source={require('../../assets/Images/logo.png')} />

                            {/* Input field */}
                            <View style={{ marginTop: RFPercentage(-1.8), justifyContent: 'center', alignItems: 'center', width: '100%', alignSelf: 'center' }}>
                                {inputField.map((item, i) => (
                                    <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(0.2), alignSelf: 'center' }} >
                                        <InputField
                                            placeholder={item.placeholder}
                                            placeholderColor={Colors.grey}
                                            placeholderAtCenter={false}
                                            height={RFPercentage(6.8)}
                                            backgroundColor={Colors.white}
                                            borderWidth={RFPercentage(0.3)}
                                            secure={item.secure}
                                            borderColor={'#EAEAF5'}
                                            borderRadius={RFPercentage(1.4)}
                                            color={Colors.black}
                                            fontSize={RFPercentage(1.7)}
                                            handleFeild={(text) => handleChange(text, i)}
                                            value={item.value}
                                            width={"93%"}
                                        />
                                    </View>
                                ))}
                            </View>

                            <View style={{ marginTop: RFPercentage(1.5), width: '82%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }} >
                                <TouchableOpacity activeOpacity={0.5} >
                                    <Text style={{ color: Colors.grey, fontSize: RFPercentage(1.6) }} >
                                        Forget Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Button */}
                            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                                <MyAppButton
                                    title="Log In"
                                    padding={RFPercentage(1.5)}
                                    backgroundColor={Colors.primary}
                                    color={Colors.white}
                                    bold={false}
                                    borderRadius={RFPercentage(10)}
                                    width={"80%"}
                                    onPress={() => handleLogin()}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary
    }
})

export default LoginScreen;