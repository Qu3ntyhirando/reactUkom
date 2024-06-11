import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginNotification, setLoginNotification] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setLoginNotification('Both fields are required.');
    } else if (username === 'admin' && password === '12345') {
      setLoginNotification('Login successful!');
      navigation.navigate('Home');
    } else {
      setLoginNotification('Invalid credentials.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/your-image.jpg' }} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} color="gray" />
      {loginNotification ? (
        <Text style={styles.notification}>{loginNotification}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  notification: {
    marginTop: 16,
    textAlign: 'center',
    color: 'red',
  },
});

export default LoginScreen;
