import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/bg.png')} 
        style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
      >
        <View style={{ marginHorizontal: 22, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.white,
            marginBottom: 20,
          }}>
            Welcome to Kaffee!
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            style={{
              backgroundColor: COLORS.primary,
              top: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}
          >
                <Text style={{ 
                    fontSize: 16, color: COLORS.white }}
                >Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
