import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";
import PhotoComponent from "./PhotoComponent";
import pickImage from "./pickImage";
import takePhoto from "./takePhoto";

const MainPage: React.FC<{
  navigation: Record<string, unknown>;
  route: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navigation, route, setLoading }) => {
  const [image, setImage] = useState<string>("");
  const [sendImage, setSendImage] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/top_image.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={styles.bottoms}>
        <Text style={styles.text}>顔写真を選択してください</Text>
        <PhotoComponent
          takePhoto={() =>
            takePhoto({
              setImage,
              setSendImage,
              navigation,
              setLoading,
            })
          }
          pickImage={() =>
            pickImage({
              setImage,
              setSendImage,
              navigation,
              setLoading,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MainPage;

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
  bottoms: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  logo: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").width * 0.9 * 0.6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
