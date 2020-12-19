import React, { useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import ExpoImagePicker from "./ExpoImagePicker";
import PhotoComponent from "./PhotoComponent";
import pickImage from "./pickImage";
import takePhoto from "./takePhoto";

const MainPage: React.FC = ({ navigation }) => {
  const [image, setImage] = useState<string>("");
  const [sendImage, setSendImage] = useState<string>("");

  const [data, setData] = useState<string>("");

  const [loading, setLoading] = useState(false);

  console.log(1111111111, image);

  const onPress = () => {
    if (!image) {
      Alert.alert("画像がありません。", "", [{ text: "OK" }]);
      return;
    }
    // axios
    //   .post("http://13.78.20.183:5000/test2", {
    //     img: sendImage,
    //   })
    //   .then((res) => {
    //     console.log(res, sendImage);
    //   });
    navigation.navigate("SubPage");
    // console.log(sendImage);
  };

  return (
    <View style={styles.container}>
      <PhotoComponent
        takePhoto={() =>
          takePhoto({
            setImage,
            setSendImage,
            navigation,
          })
        }
        pickImage={() =>
          pickImage({
            setImage,
            setSendImage,
            navigation,
          })
        }
        navigation={navigation}
        image={image}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 100,
        }}
        onPress={() => onPress()}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          スタート
        </Text>
      </TouchableOpacity>
      <ExpoImagePicker image={image} />
      <Image source={{ uri: `${data}` }} style={{ width: 60, height: 60 }} />
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
