import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";

const CollagePage: React.FC<{
  navigation: Record<string, unknown>;
  route: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navigation, route, setLoading }) => {
  const [sound, setSound] = useState();
  const [isPlay, setIsPlay] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/23th-SingOut.mp3")
    );
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
  }, []);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={pauseSound}>
        {isPlay ? (
          <Icon name="pause" size={20} />
        ) : (
          <Icon name="play" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default CollagePage;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: "#EF5769",
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },

  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
