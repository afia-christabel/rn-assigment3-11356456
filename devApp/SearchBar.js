import React from "react";
import {
  TextInput,
  text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import pic2 from "./assets/picture2.jpg";

const Search = () => {
  return (
    <View style={styles.field2}>
      <TextInput style={styles.input} placeholder="Search" value={text} />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => console.log("Button Pressed!")}
      >
        <Image source={pic2} style={styles.ButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    width: "78%",
    borderColor: "balck",
    borderRadius: 15,
    marginVertical: 8,
    padding: 8,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "white",
  },

  field2: {
    padding: 10,
    height: 80,
    marginBottom: 30,
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  picTwo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    top: -60,
  },
  Button: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "black",
    alignSelf: "flex-end",
    top: -60,
  },
  ButtonImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});

export default Search;
