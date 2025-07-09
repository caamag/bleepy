import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    width: 300,
  },

  buttonsContainer: {
    height: 140,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: "50%",
    height: "100%",
    padding: 20,
  },
});
