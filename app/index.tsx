import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Button
        title="bla bla bla"
        onPress={() => {
          router.push("/login");
        }}
      />
    </View>
  );
}
