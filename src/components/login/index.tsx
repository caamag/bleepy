import { isEmailValid } from "@/src/utils/isValidEmail";
import { useState } from "react";
import * as _ from "react-native";
import { StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import Toast from "react-native-toast-message";

interface ModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: ModalProps) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const handleLogin = () => {
    if (email === "" || pass === "") {
      Toast.show({
        type: "error",
        text1: "Campos faltantes",
        text2: "Favor preencher todos os campos.",
      });
      return;
    }

    if (!isEmailValid(email)) {
      Toast.show({
        type: "error",
        text1: "E-mail inválido",
        text2: "Favor inserir uma e-mail válido.",
      });
    }

    console.log("Login efetuado");
  };

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

      <_.View style={styles.formContainer}>
        <_.Text style={styles.formTitle}>Ben-vindo de volta</_.Text>

        <_.Text style={styles.label}>E-mail:</_.Text>
        <_.TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail:"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <_.Text style={styles.label}>Senha:</_.Text>
        <_.TextInput
          placeholder="Senha:"
          style={styles.input}
          onChangeText={setPass}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <_.View style={styles.boxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />

          <_.Text style={{ marginLeft: 5 }}>Lembrar senha</_.Text>
        </_.View>

        <_.TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <_.Text style={{ color: "white", textAlign: "center" }}>
            Entrar
          </_.Text>
        </_.TouchableOpacity>
      </_.View>
    </_.Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    height: 200,
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

  formTitle: {
    fontSize: 25,
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  label: {
    margin: 5,
  },

  input: {
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "rgb(230,230,230)",
  },

  submitButton: {
    backgroundColor: "rgb(40,40,40)",
    padding: 10,
    borderRadius: 5,
  },

  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default LoginModal;
