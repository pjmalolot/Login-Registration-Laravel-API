import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
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

  const validateFullName = () => {
    if (fullName.trim() === '') {
      setFullNameError('Fullname is required.');
      return false;
    }
    setFullNameError('');
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

  const successSignUp = async () => {
    try {
      if (validateEmail() && validateFullName() && validatePassword()) {
        const response = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name: fullName,
            password,
          }),
        });

        if (response.ok) {
          // Assuming the API response includes an access token
          const data = await response.json();
          // const accessToken = data.access_token;

          // Store the access token securely (you may use AsyncStorage or other secure storage)
          // AsyncStorage.setItem('access_token', accessToken);

          // Navigate to the next screen or perform other actions
          navigation.navigate('Home');
        } else {
          Alert.alert('Sign Up Failed', 'Please check your input and try again.');
        }
      } else {
        Alert.alert('Validation Error', 'Please fix the validation errors before proceeding.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
      console.error('API Error:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, paddingTop: 20, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 50 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.primary
          }}>
            Create Account
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Hello there!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}>Fullname</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: fullNameError ? COLORS.error : COLORS.primary,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your name'
              placeholderTextColor={COLORS.black}
              style={{
                width: "80%"
              }}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              onBlur={validateFullName}
            />
          </View>
          <Text style={{ color: COLORS.error }}>{fullNameError}</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}>Email address</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: emailError ? COLORS.error : COLORS.primary,
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
            marginVertical: 8,
          }}>Password</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: passwordError ? COLORS.error : COLORS.primary,
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
          title="Sign Up"
          onPress={async () => await successSignUp()}
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
