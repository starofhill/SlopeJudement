import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";

const songs = [
  {
    id: ["n-15-1", "n-15-2"],
    song: require("../assets/乃木坂/裸足でSummer.mp3"),
  },
  {
    id: ["n-16-1", "n-16-2", "n-16-3"],
    song: require("../assets/乃木坂/サヨナラの意味.mp3"),
  },
  {
    id: ["n-18-1", "n-18-2"],
    song: require("../assets/乃木坂/18th-逃げ水.mp3"),
  },
  {
    id: ["n-20-1", "n-20-2"],
    song: require("../assets/乃木坂/20th-シンクロニシティ.mp3"),
  },
  {
    id: ["n-23-1", "n-23-2"],
    song: require("../assets/乃木坂/23th-Sing Out.mp3"),
  },
  {
    id: ["n-24-1", "n-24-2"],
    song: require("../assets/乃木坂/24th-夜明けまで強がらなくてもいい.mp3"),
  },
  {
    id: ["n-25-1", "n-25-2"],
    song: require("../assets/乃木坂/No25-幸せの保護色.mp3"),
  },

  {
    id: ["s-1-1", "s-1-2"],
    song: require("../assets/欅坂/1st-サイレントマジョリティー.mp3"),
  },
  {
    id: ["s-3-2"],
    song: require("../assets/欅坂/3rd-二人セゾン.mp3"),
  },
  {
    id: ["s-4-1", "s-4-2", "s-4-3"],
    song: require("../assets/欅坂/4th-不協和音.mp3"),
  },
  {
    id: ["s-6-1"],
    song: require("../assets/欅坂/6th-ガラスを割れ.mp3"),
  },
  {
    id: ["s-8-1", "s-8-2", "s-8-3"],
    song: require("../assets/欅坂/8th-黒い羊.mp3"),
  },
  {
    id: ["s-9-1", "s-9-2"],
    song: require("../assets/欅坂/Nobodys fault.mp3"),
  },

  {
    id: ["h-1-1", "h-1-2", "h-1-3"],
    song: require("../assets/日向坂/18th-キュン.mp3"),
  },
  {
    id: ["h-2-1", "h-2-2", "h-2-3"],
    song: require("../assets/日向坂/2nd-ドレミソラシド.mp3"),
  },
  {
    id: ["h-3-1", "h-3-2"],
    song: require("../assets/日向坂/3rd-こんなに好きになっちゃっていいの.mp3"),
  },
  {
    id: ["h-4-1", "h-4-2", "h-4-3", "h-4-4"],
    song: require("../assets/日向坂/4th-そんなことないよ.mp3"),
  },

  {
    id: ["y-1-1", "y-1-2", "y-1-3"],
    song: require("../assets/吉本坂/1st-泣かせてくれよ.mp3"),
  },
  {
    id: ["y-2-1", "y-2-2", "y-2-3"],
    song: require("../assets/吉本坂/2nd-今夜はええやんMusic Video  YOSHIMOTOZAKA46-Konyaha eeyan.mp3"),
  },
  {
    id: ["y-3-1", "y-3-2", "y-3-3"],
    song: require("../assets/吉本坂/3rd-不能ではいられない.mp3"),
  },
];

const CollagePage: React.FC<{
  navigation: Record<string, unknown>;
  route: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navigation, route, setLoading }) => {
  const [sound, setSound] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const image = route.params?.img;
  const responseData = route.params?.responseData;

  //   const song = songs.find((t) => t.id.includes(responseData));
  const song = require("../assets/23th-SingOut.mp3");

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
  }, []);

  return (
    <View>
      <Image source={{ uri: image }} style={styles.collage} />

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

const cartdWidth = Dimensions.get("screen").width * 0.9;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: "#EF5769",
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
});
