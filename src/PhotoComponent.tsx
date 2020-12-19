import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface PhotoComponent {
  takePhoto: () => void;
  pickImage: () => void;
}

const PhotoComponent: React.FC<PhotoComponent> = ({ takePhoto, pickImage }) => {
  return (
    <View style={styles.centeredView}>
      {/* <View style={styles.modalView}> */}
      <View style={styles.modalCard}>
        <TouchableOpacity style={styles.openButton} onPress={() => takePhoto()}>
          <View style={styles.modalBox}>
            <Icon name="camera" size={35} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.openButton} onPress={() => pickImage()}>
          <View style={styles.modalBox}>
            <Icon name="images" size={35} style={styles.icon} />
          </View>
        </TouchableOpacity>
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
    paddingVertical: 10,
    margin: 5,
    // elevation: 2,
    // borderColor: "#ccc",
    // borderWidth: 1,
    backgroundColor: "black",
    width: Dimensions.get("screen").width * 0.9,
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
  icon: {
    color: "white",
  },
});
