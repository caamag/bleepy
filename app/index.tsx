import { useAuth } from "@/src/context/auth";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Index = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user]);

  if (!loading) {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(60,60,60)",
  },
});
