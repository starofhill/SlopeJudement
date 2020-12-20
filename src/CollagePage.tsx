import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  SafeAreaView,
  Text,
} from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";

const songs = [
  {
    id: ["n-15-1", "n-15-2"],
    song: require("../assets/nogi/15.mp3"),
  },
  {
    id: ["n-16-1", "n-16-2", "n-16-3"],
    song: require("../assets/nogi/16.mp3"),
  },
  {
    id: ["n-18-1", "n-18-2"],
    song: require("../assets/nogi/18.mp3"),
  },
  {
    id: ["n-20-1", "n-20-2"],
    song: require("../assets/nogi/20.mp3"),
  },
  {
    id: ["n-23-1", "n-23-2"],
    song: require("../assets/nogi/23.mp3"),
  },
  {
    id: ["n-24-1", "n-24-2"],
    song: require("../assets/nogi/24.mp3"),
  },
  {
    id: ["n-25-1", "n-25-2"],
    song: require("../assets/nogi/25.mp3"),
  },
  {
    id: ["s-1-1", "s-1-2"],
    song: require("../assets/sakura/1.mp3"),
  },
  {
    id: ["s-3-2"],
    song: require("../assets/sakura/3.mp3"),
  },
  {
    id: ["s-4-1", "s-4-2", "s-4-3"],
    song: require("../assets/sakura/4.mp3"),
  },
  {
    id: ["s-6-1"],
    song: require("../assets/sakura/6.mp3"),
  },
  {
    id: ["s-8-1", "s-8-2", "s-8-3"],
    song: require("../assets/sakura/8.mp3"),
  },
  {
    id: ["s-9-1", "s-9-2"],
    song: require("../assets/sakura/9.mp3"),
  },
  {
    id: ["h-1-1", "h-1-2", "h-1-3"],
    song: require("../assets/hinata/18.mp3"),
  },
  {
    id: ["h-2-1", "h-2-2", "h-2-3"],
    song: require("../assets/hinata/2.mp3"),
  },
  {
    id: ["h-3-1", "h-3-2"],
    song: require("../assets/hinata/3.mp3"),
  },
  {
    id: ["h-4-1", "h-4-2", "h-4-3", "h-4-4"],
    song: require("../assets/hinata/4.mp3"),
  },
  {
    id: ["y-1-1", "y-1-2", "y-1-3"],
    song: require("../assets/yoshimoto/1.mp3"),
  },
  {
    id: ["y-2-1", "y-2-2", "y-2-3"],
    song: require("../assets/yoshimoto/2.mp3"),
  },
  {
    id: ["y-3-1", "y-3-2", "y-3-3"],
    song: require("../assets/yoshimoto/3.mp3"),
  },
];

const CollagePage: React.FC<{
  navigation: Record<string, unknown>;
  route: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navigation, route, setLoading }) => {
  const [sound, setSound] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const image = route.params?.img;
  const songId = route.params?.songId;
  const teamColor = route.params?.teamColor;

  const { song } = songs.find((s) => s.id.includes(songId));
  // const song = require("../assets/23th-SingOut.mp3");

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(song);
    setSound(sound);
    setIsPlay(true);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    isPlay ? await sound?.pauseAsync() : await sound?.playAsync();
    setIsPlay(!isPlay);
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();

    Animated.timing(fadeOpacity, {
      toValue: 1,
      delay: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: fadeOpacity }]}>
        <Image source={{ uri: image }} style={styles.collage} />
      </Animated.View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "black" }]}
          onPress={pauseSound}
        >
          {isPlay ? (
            <Icon name="pause" size={30} style={styles.icon} />
          ) : (
            <Icon name="play" size={30} style={styles.icon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: teamColor }]}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>TOP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CollagePage;

const cartdWidth = Dimensions.get("screen").width * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    margin: 5,
    width: cartdWidth,
    justifyContent: "center",
    alignItems: "center",
  },

  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  collage: {
    width: cartdWidth,
    height: cartdWidth,
    borderRadius: 15,
    resizeMode: "cover",
  },
  icon: {
    color: "white",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
