import { useAuthenticate } from "@/src/hooks/useAuth";
import { isEmailValid } from "@/src/utils/isValidEmail";
import { useState } from "react";
import * as _ from "react-native";
import Toast from "react-native-toast-message";

interface ModalProps {
  onClose: () => void;
}

const RegisterModal = ({ onClose }: ModalProps) => {
  const { handleRegister } = useAuthenticate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = async () => {
    if (name === "" || email === "" || pass === "") {
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

    await handleRegister(email, pass, name);
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
        <_.Text style={styles.formTitle}>Faça o seu cadastro</_.Text>

        <_.Text style={styles.label}>Nome:</_.Text>
        <_.TextInput
          placeholder="Nome:"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

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

        <_.TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <_.Text style={{ color: "white", textAlign: "center" }}>
            Cadastrar
          </_.Text>
        </_.TouchableOpacity>
      </_.View>
    </_.Modal>
  );
};

const styles = _.StyleSheet.create({
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
});

export default RegisterModal;
