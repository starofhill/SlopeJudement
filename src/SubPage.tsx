import Axios from "axios";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
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
      {image && (
        <Image source={{ uri: image }} style={{ width: 60, height: 60 }} />
      )}
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
    </View>
  );
};

export default SubPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
