import Axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PhotoComponent from "./PhotoComponent";
import pickImage from "./pickImage";
import takePhoto from "./takePhoto";

const SubPage: React.FC<{
  navigation: Record<string, unknown>;
  route: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navigation, route, setLoading }) => {
  const [image, setImage] = useState<string>(route.params?.img);
  const [sendImage, setSendImage] = useState<string>(route.params?.sendImg);

  const [data, setData] = useState<string>("");

  const onPress = () => {
    // if (!image) {
    //   Alert.alert("画像がありません。", "", [{ text: "OK" }]);
    //   return;
    // }
    // Axios.post("http://13.78.20.183:5000/test2", {
    //   img: sendImage,
    // });
    navigation.navigate("ResultPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      {!!image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      )}

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

        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text style={styles.whiteText}>START</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
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
  image: {
    width: Dimensions.get("screen").width * 0.9,
    height: (Dimensions.get("screen").width * 0.9) / 1.6,
    borderRadius: 15,
  },
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: "#EF5769",
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
