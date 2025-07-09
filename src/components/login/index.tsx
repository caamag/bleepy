import * as _ from "react-native";
import { StyleSheet } from "react-native";

interface ModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: ModalProps) => {
  return (
    <_.Modal animationType="slide" transparent>
      <_.View style={styles.container}>
        <_.TouchableOpacity onPress={onClose}>
          <_.Text
            style={{ color: "white", letterSpacing: 2, fontWeight: "bold" }}
          >
            {"<"} voltar
          </_.Text>
        </_.TouchableOpacity>
      </_.View>

      <_.View style={styles.formContainer}></_.View>
    </_.Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    height: 100,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  formContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default LoginModal;
