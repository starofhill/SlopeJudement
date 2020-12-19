import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
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
    </View>
  );
};

export default MainPage;

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
