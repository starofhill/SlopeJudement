import * as ImagePicker from "expo-image-picker";

interface takePhoto {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setSendImage: React.Dispatch<React.SetStateAction<string>>;
}

const takePhoto = async ({ setImage, setSendImage }: takePhoto) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    alert("Sorry, we need camera roll permissions to make this work!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: false,
    base64: true,
  });

  if (!result.cancelled) {
    setImage(result.uri);
    setSendImage(result.base64!);
  }
};

export default takePhoto;
