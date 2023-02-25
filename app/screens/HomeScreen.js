import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    return (
        <Screen style={styles.screen}>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Nav */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                        {/* Menue */}
                        <TouchableOpacity activeOpacity={0.6} >
                            <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/Images/menue.png')} />
                        </TouchableOpacity>

                        <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity activeOpacity={0.6} >
                                <Image style={{ width: RFPercentage(2.8), height: RFPercentage(2.8) }} source={require('../../assets/Images/noti.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} >
                                <Image style={{ marginLeft: RFPercentage(2), width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../assets/Images/profile.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Headings */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8) }} >
                            Hi Name,
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1.8) }} >
                            Welcome to myGutech
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.8), fontWeight: '600' }} >
                            Registry Services
                        </Text>
                    </View>

                    {/*Registry Services Cart */}
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                        {/* First */}
                        <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: 'center', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%' }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Instructional Videos & guides
                                </Text>
                            </View>
                            <Image style={{ width: RFPercentage(10), height: RFPercentage(8) }} source={require('../../assets/Images/1.png')} />
                        </TouchableOpacity>
                        {/* Second */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%' }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Registarion FAQ
                                </Text>
                            </View>
                            <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(10), height: RFPercentage(8) }} source={require('../../assets/Images/2.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                        {/* Third */}
                        <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: 'center', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%' }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    MoHERI Scholarship FAQ
                                </Text>
                            </View>
                            <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(7.5), height: RFPercentage(6.6) }} source={require('../../assets/Images/3.png')} />
                        </TouchableOpacity>
                        {/* Fourth */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%' }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Excused Absences & Grade Appeal
                                </Text>
                            </View>
                            <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(7.7), height: RFPercentage(7) }} source={require('../../assets/Images/4.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Other Services Carts */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.8), fontWeight: '600' }} >
                            Other Services
                        </Text>
                    </View>

                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                        {/* First */}
                        <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: 'flex-start', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%', marginTop: RFPercentage(2) }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Custom
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* Second */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, justifyContent: 'flex-start', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%', marginTop: RFPercentage(2) }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Custom
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                        {/* Third */}
                        <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: 'flex-start', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%', marginTop: RFPercentage(2) }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Custom
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* Fourth */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, justifyContent: 'flex-start', alignItems: 'center', width: '46%', height: RFPercentage(20), borderRadius: RFPercentage(2), backgroundColor: Colors.white }} >
                            <View style={{ width: '90%', marginTop: RFPercentage(2) }} >
                                <Text style={{ textAlign: 'center', color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    Custom
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: RFPercentage(12) }} />
            </ScrollView>

            {/* Bottom Tab */}
            <View style={{ position: 'absolute', bottom: RFPercentage(5), width: '80%', height: RFPercentage(8), borderRadius: RFPercentage(20), backgroundColor: Colors.white, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(2.7), height: RFPercentage(2.7) }} source={require('../../assets/Images/b2.png')} />
                    <Text style={{ color: '#999999', fontSize: RFPercentage(1.6), fontWeight: '600' }} >
                        Subjects
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', left: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(2.7), height: RFPercentage(2.7) }} source={require('../../assets/Images/b1.png')} />
                    <Text style={{ color: '#495ECA', fontSize: RFPercentage(1.6), fontWeight: '600' }} >
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(2.7), height: RFPercentage(2.7) }} source={require('../../assets/Images/b3.png')} />
                    <Text style={{ color: '#999999', fontSize: RFPercentage(1.6), fontWeight: '600' }} >
                        Subjects
                    </Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#F6F6F9'
    }
})

export default HomeScreen;