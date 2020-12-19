import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const teams = [
  {
    id: "nogi",
    name: "乃木坂46",
    image: require("../assets/nogizaka_group.jpg"),
    color: "#932993",
  },
  {
    id: "sakura",
    name: "櫻坂46",
    image: require("../assets/sakura_group.jpg"),
    color: "#F19DB5",
  },
  {
    id: "hinata",
    name: "日向坂46",
    image: require("../assets/hinata_group.png"),
    color: "#7CC8E9",
  },
  {
    id: "yoshimoto",
    name: "吉本坂46",
    image: require("../assets/yoshimoto_group.jpg"),
    color: "#E84709",
  },
];

const ResultPage: React.FC<{ navigation: Record<string, unknown> }> = ({
  navigation,
}) => {
  const team = teams.find((t) => t.id === "nogi");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} activeOpacity={0.9}>
        <Image source={team?.image} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.typeContainer}>
        <Text style={styles.subText}>あなたの顔は</Text>
        <Text style={[styles.mainText, { color: team?.color }]}>
          {team?.name}
        </Text>
        <Text style={styles.subText}>タイプ</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: team?.color }]}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>TOP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  typeContainer: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    height: "25%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("screen").width * 0.9,
    height: (Dimensions.get("screen").width * 0.9) / 1.6,
    borderRadius: 15,
    resizeMode: "cover",
  },
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    margin: 5,
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  mainText: {
    fontSize: 35,
    marginBottom: 20,
    fontFamily: "Hiragino Mincho ProN",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
