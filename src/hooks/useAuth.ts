import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { loginUser, registerUser } from "../service/auth";

export const useAuthenticate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (email: string, pass: string, name: string) => {
    setLoading(true);

    try {
      await registerUser(email, pass, name);
      router.push("/");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro inesperado",
        text2: "Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string, pass: string) => {
    setLoading(true);
    try {
      await loginUser(email, pass);
      router.push("/");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro inesperado",
        text2: "Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleRegister,
    handleLogin,
  };
};
