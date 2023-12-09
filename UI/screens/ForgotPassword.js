import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     // Implement your logic for password reset here
//     // You can send a reset email to the entered email address
//     // This is a placeholder, replace it with your actual logic

//     console.log(`Password reset initiated for email: ${email}`);
//   };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22, justifyContent: 'center' }}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: COLORS.primary,
          marginBottom: 20,
        }}>
          Forgot Password
        </Text>

        <Text style={{ marginBottom: 12, fontSize: 16 }}>Enter your email address to reset your password</Text>

        <View style={{
          width: '100%',
          height: 48,
          borderColor: COLORS.primary,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 22,
          marginBottom: 20,
        }}>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={{ width: '100%' }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <Button
          title="Reset Password"
          filled
          onPress={() => navigation.navigate('Home')}
          style={{ marginBottom: 20 }}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 16, color: COLORS.primary }}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
