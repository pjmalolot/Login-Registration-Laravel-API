import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';


const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const vemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!vemail.test(email)) {
      setEmailError('Not a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('At least 6 characters are required.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleForgotPassword = () => {
    // Navigate to the account recovery page or implement your own logic
    navigation.navigate('ForgotPassword');
  };


  const successLogin = async () => {
    try {
      if (validateEmail() && validatePassword()) {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Login Failed');
        }
  
        const data = await response.json();
  
        // Assuming the API response includes an access token
        const accessToken = data.access_token;
  
        // Store the access token securely (you may use AsyncStorage or other secure storage)
        // AsyncStorage.setItem('access_token', accessToken);
  
        // Navigate to the next screen or perform other actions
        navigation.navigate('Welcome');
      } else {
        Alert.alert('Validation Error', 'Please fix the validation errors before proceeding.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'An unexpected error occurred.');
    }
  };
  

  // Rest of your code remains unchanged

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, paddingTop: 20, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 60 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.primary
                }}>
                Hi. Welcome back!👋
            </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
            }}>Email address</Text>

            <View style={{
                width: "100%",
                height: 48,
                borderColor: emailError ? COLORS.error : COLORS.primary, // Change border color based on error
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                placeholder='Enter your email address'
                placeholderTextColor={COLORS.black}
                keyboardType='email-address'
                style={{
                    width: "100%"
                }}
                value={email}
                onChangeText={(text) => setEmail(text)}
                onBlur={validateEmail}
                />
            </View>
            <Text style={{ color: COLORS.error }}>{emailError}</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
            }}>Password</Text>

            <View style={{
                width: "100%",
                height: 48,
                borderColor: passwordError ? COLORS.error : COLORS.primary, // Change border color based on error
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                placeholder='Enter your password'
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                style={{
                    width: "100%"
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                onBlur={validatePassword}
                />

                <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                    position: "absolute",
                    right: 12
                }}
                >
                {
                    isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                    )
                }
                </TouchableOpacity>
        </View>
            <Text style={{ color: COLORS.error }}>{passwordError}</Text>
            </View>
            
            <Button
            title="Login"
            filled
            onPress={successLogin}
            style={{
                marginTop: 18,
                marginBottom: 4,
            }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 15,
            }}>
              <Pressable onPress={handleForgotPassword}>
                <Text style={{ fontSize: 16, color: COLORS.primary }}>Forget password?</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Signup')}>
                <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: 'bold' }}>Register</Text>
              </Pressable>
            </View> 
       </View>
    </SafeAreaView>
  );
};

export default Login;
