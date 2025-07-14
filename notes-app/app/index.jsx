import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Image source={require('../assets/images/post.png')} style={Styles.image} />
      <Text style={Styles.title}>Welcome To Notes App</Text>
      <Text style={Styles.subtitle}>Capture Your thoughts anytime anywhere</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
