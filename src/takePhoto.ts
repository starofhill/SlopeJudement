import * as ImagePicker from "expo-image-picker";

interface takePhoto {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setSendImage: React.Dispatch<React.SetStateAction<string>>;
  navigation: Record<string, unknown>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const takePhoto = async ({
  setImage,
  setSendImage,
  navigation,
  setLoading,
}: takePhoto) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  setLoading(true);

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
    navigation.navigate("SubPage", { img: result.uri });
  }
  setLoading(false);
};

export default takePhoto;
