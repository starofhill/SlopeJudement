import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SubPage = ({ route }) => {
  const image = route.params.img;

  // console.log(route);

  return (
    <View>
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
      <Image source={{ uri: image }} style={{ width: 60, height: 60 }} />
    </View>
  );
};

export default SubPage;
