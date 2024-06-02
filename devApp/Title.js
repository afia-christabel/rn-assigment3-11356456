import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import pic4 from "./assets/picture4.jpg";

const Title = () => {
  return (
    <View style={styles.field1}>
      <Text style={styles.header}>
        {"\n"}Hello, Afia {"\n"}
        <Text style={styles.miniHeader}>44 tasks today</Text>
      </Text>
      <Image source={pic4} style={styles.picFour} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    top: -24,
  },
  miniHeader: {
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 1,
  },
  picFour: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginTop: -73,
  },
  field1: {
    display: "flex",
    padding: 10,
    height: 110,

    marginTop: 30,
  },
});

export default Title;
