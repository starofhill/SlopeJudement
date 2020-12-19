import * as ImagePicker from "expo-image-picker";

interface pickImage {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setSendImage: React.Dispatch<React.SetStateAction<string>>;
}

const pickImage = async ({ setImage, setSendImage, navigation }: pickImage) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: false,
    aspect: [16, 9],
    base64: true,
  });

  if (!result.cancelled) {
    setImage(result.uri);
    setSendImage(result.base64!);
    navigation.navigate("SubPage", { img: result.uri });
  }
};

export default pickImage;
