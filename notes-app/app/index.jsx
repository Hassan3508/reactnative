import { StyleSheet, Text, View } from "react-native";

const HomeScreen =  () =>  {
  return (
    <View style={Styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen