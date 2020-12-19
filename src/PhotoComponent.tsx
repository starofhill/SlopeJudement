import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface PhotoComponent {
  takePhoto: () => void;
  pickImage: () => void;
}

const PhotoComponent: React.FC<PhotoComponent> = ({ takePhoto, pickImage }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>出品方法を選択してください</Text>

          <View style={styles.modalCard}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                takePhoto();
              }}
            >
              <View style={styles.modalBox}>
                <Icon name="camera" size={24} />
                <Text style={styles.textStyle}>写真を撮る</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                pickImage();
              }}
            >
              <View style={styles.modalBox}>
                <Icon name="photo" size={24} />
                <Text style={styles.textStyle}>アルバムから選ぶ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhotoComponent;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 25,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    alignItems: "center",
  },
  modalCard: {
    // flexDirection: "row",
  },
  modalBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    borderRadius: 15,
    padding: 20,
    margin: 5,
    elevation: 2,
    borderColor: "#ccc",
    borderWidth: 1,
    width: 130,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
  },
  textStyle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 11,
  },
  textCloseStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#888",
    padding: 20,
  },
});
