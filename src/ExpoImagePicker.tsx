import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface ExpoImagePicker {
  image: string;
}
const ExpoImagePicker: React.FC<ExpoImagePicker> = ({ image }) => {
  const data = [{ id: 0, name: "camera", text: "(必須)" }];

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.image}
      horizontal
      keyExtractor={(item) => `enterProductInformation-${item.id}`}
      renderItem={({ item }) => (
        <View>
          {!image ? (
            // 画像なし
            <>
              <TouchableOpacity style={styles.imageBox}>
                <Text style={styles.imageNumber}>{item.id + 1}</Text>
                <Icon name={item.name} size={20} />
                <Text style={styles.imageText}>{item.text}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.imageBox}>
              <Text style={styles.imageNumber}>{item.id + 1}</Text>
              <Image
                source={{ uri: image }}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
};

export default ExpoImagePicker;

const styles = StyleSheet.create({
  image: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  imageNumber: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    backgroundColor: "#ddd",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    zIndex: 10,
  },
  imageText: {
    fontSize: 12,
    color: "#555",
  },
});
