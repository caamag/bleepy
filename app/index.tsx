import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Button
        title="Ir para login"
        onPress={() => {
          router.push("/login");
        }}
      />

      <Text>Tela inicial</Text>
    </View>
  );
}
