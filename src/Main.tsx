import React, { useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import ExpoImagePicker from "./ExpoImagePicker";
import PhotoComponent from "./PhotoComponent";
import pickImage from "./pickImage";
import takePhoto from "./takePhoto";

const Main: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [sendImage, setSendImage] = useState<string>("");

  const [data, setData] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const onPress = () => {
    axios.post("http://13.78.20.183:5000/test2", {
      image: sendImage,
    });
  };

  return (
    <View style={styles.container}>
      <PhotoComponent
        takePhoto={() =>
          takePhoto({
            setImage,
            setSendImage,
          })
        }
        pickImage={() =>
          pickImage({
            setImage,
            setSendImage,
          })
        }
      />
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          width: 120,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
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

export default Main;

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
