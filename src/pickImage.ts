import * as ImagePicker from "expo-image-picker";

interface pickImage {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setSendImage: React.Dispatch<React.SetStateAction<string>>;
  navigation: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const pickImage = async ({
  setImage,
  setSendImage,
  navigation,
  setLoading,
}: pickImage) => {
  setLoading(true);

  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: false,
    aspect: [16, 9],
    base64: true,
  });

  if (!result.cancelled) {
    setImage(result.uri);
    setSendImage(result.base64!);
    navigation.navigate("SubPage", { img: result.uri, sendImg: result.base64 });

  }

  setLoading(false);
};

export default pickImage;
