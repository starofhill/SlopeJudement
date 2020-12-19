import * as ImagePicker from "expo-image-picker";

interface pickImage {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setSendImage: React.Dispatch<React.SetStateAction<string>>;
}

const pickImage = async ({ setImage, setSendImage }: pickImage) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: false,
    aspect: [16, 9],
    base64: true,
  });

  if (!result.cancelled) {
    setImage(result.uri);
    setSendImage(result.base64!);
  }
};

export default pickImage;
