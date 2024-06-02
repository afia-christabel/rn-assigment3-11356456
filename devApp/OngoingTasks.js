import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const data = [
  {
    title: "TODAY",
    data: [
      "My Sql Assignment Due",
      "DCIT 208 SOFTWARE ENGINEERING ASSIGNMENT",
      "DCIT 206 SYSTEMS ADMINISTRATION QUIZ",
      "DCIT 204 COMPUTER NETWORKS LAB REPORT",
      "Binary Trees Task",
      "DCIT 212 WEB PROGRAMMING QUIZ",
    ],
  },
  {
    title: "TOMORROW",
    data: [
      "HUAWEI HACKATHON",
      "Fix My Code Session",
      "LEVEL 200 GENERAL MEETING",
      "Higher-level Programming Assignment Due",
      "Web Infrastructure Assignment Due",
      "Networking - Social Media Marketing",
      "AirBnB clone Project Due",
    ],
  },
  {
    title: "UPCOMING",
    data: [
      "Strugling with your Learning? Let's talk!",
      "AMS Session",
      "Study Group Meeting",
      "Student Live Disccussion",
      "Technical Writing Workshop",
      "Stuck on a Project?",
    ],
  },
];

const OngoingTasks = () => {
  return (
    <>
      <Text style={styles.Ongoing}>Ongoing Tasks</Text>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#a39370",
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderBlockColor: "black",
  },
  itemText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  sectionHeader: {
    backgroundColor: "#44391a",
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    textDecorationStyle: "solid",
    letterSpacing: 8,
    color: "white",
  },
  Ongoing: {
    fontWeight: "600",
    fontSize: 25,
    marginLeft: 10,
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default OngoingTasks;
