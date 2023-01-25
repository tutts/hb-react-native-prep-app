import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { HelloWorld } from "./components/HelloWorld/HelloWorld";

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: "#07574c",
    width: "100%",
    height: "100%",
    padding: 10
  },
  text: {
    color: "white",
    marginBottom: 10
  }
});

export const App = () => {
  return (
    <View style={styles.app}>
      <HelloWorld />
      <Text style={styles.text}>
        Welcome to the H&B Technical Preparation App
      </Text>
      <Text style={styles.text}>
        The technical interview will be conducted in Codesandbox, as this allows
        us to host and collaborate on a simple React Native Application, written
        with React Native Web (RNW). We use RNW as it provides a familiar set of
        API's (React Native), and enables you to live code in the browser should
        you wish, without the need for compilation, or setting up a native
        application on a local machine.
      </Text>
      <Text style={styles.text}>
        So take a look around and get comfortable... add new Components, write
        some Hooks... it's all here!
      </Text>
      <Text style={styles.text}>Best of luck, we're rooting for you 🤞</Text>
      <Text style={styles.text}>H&B App Team</Text>
    </View>
  );
};
