import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  text,
  ScrollView,
} from "react-native";

import HorizontalScrollView from "./HorizontalScrollView";
import Title from "./Title";
import Search from "./Search";
import OngoingTasks from "./OngoingTasks";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <Title />
          <Search />
          <HorizontalScrollView />
          <OngoingTasks />
          <StatusBar style="auto" />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#bcb380",
    height: "100%",
    margin: 0,
    padding: 10,
  },
});
