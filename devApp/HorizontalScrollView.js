import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import pic3 from "./assets/picture3.jpg";
import pic1 from "./assets/picture1.jpg";

const HorizontalScrollView = () => {
  return (
    <>
      <Text style={styles.Cate}>Categories{"\n"}</Text>

      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.miniField1}>
          <Text style={styles.Major1}>
            Exercise{"\n"}
            <Text style={styles.Minor1}>12 Tasks</Text>
          </Text>
          <ImageBackground source={pic3} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Tutoring{"\n"}
            <Text style={styles.Minor2}>8 Tasks</Text>
          </Text>
          <ImageBackground source={pic1} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Socials{"\n"}
            <Text style={styles.Minor2}>7 Tasks</Text>
          </Text>
          <ImageBackground source={pic1} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Asignment{"\n"}
            <Text style={styles.Minor2}>4 Tasks</Text>
          </Text>
          <ImageBackground source={pic3} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Lab{"\n"}
            <Text style={styles.Minor2}>2 Tasks</Text>
          </Text>
          <ImageBackground source={pic1} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Reports{"\n"}
            <Text style={styles.Minor2}>4 Tasks</Text>
          </Text>
          <ImageBackground source={pic1} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Quiz{"\n"}
            <Text style={styles.Minor2}>1 Task</Text>
          </Text>
          <ImageBackground source={pic3} style={styles.img}></ImageBackground>
        </View>
        <View style={styles.miniField2}>
          <Text style={styles.Major2}>
            Study{"\n"}
            <Text style={styles.Minor2}>6 Tasks</Text>
          </Text>
          <ImageBackground source={pic1} style={styles.img}></ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  Cate: {
    fontWeight: "600",
    fontSize: 25,
    marginLeft: 10,
    letterSpacing: 1,
  },
  miniField1: {
    width: 240,
    height: 270,
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    flex: 1,
  },
  miniField2: {
    width: 240,
    height: 270,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    flex: 1,
    textAlign: "left",
  },
  img: {
    height: 200,
    width: 200,
    position: "absolute",
    alignSelf: "center",
    zIndex: -1000,
  },
  Major1: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 30,
    top: -100,
  },
  Major2: { fontSize: 15, fontWeight: "bold", marginLeft: -160, top: -100 },
  Minor1: { fontSize: 15, fontWeight: "normal" },
  Minor2: { fontSize: 15, fontWeight: "normal" },
  lit: {
    borderWidth: 2,
    borderColor: "black",
    top: 0,
    marginLeft: 0,
  },
});

export default HorizontalScrollView;
