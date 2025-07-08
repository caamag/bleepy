import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Login = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Página de login</Text>
      <Button
        title="Tela inicial321"
        onPress={() => {
          router.push("/");
        }}
      />
    </View>
  );
};

export default Login;
