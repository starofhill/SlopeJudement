import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
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
  // const [data, setData] = useState<string>("");

  let d;
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
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
          onPress={async () => {
            const { data } = await axios.get("http://13.78.20.183:5000/test");
            d = data;
            console.log(11111111111111111111, d);
          }}
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
        <Image
          source={{ uri: `data:image/jpeg;base64,${d}` }}
          style={{ width: 60, height: 60 }}
        />
      </View>
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
    </KeyboardAvoidingView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
