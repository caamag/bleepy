import { useState } from "react";
import * as _ from "react-native";
import { styles } from "./style";

//components
import LoginModal from "@/src/components/login";
import RegisterModal from "@/src/components/register";

const Login = () => {
  const [modalOpen, setModalOpen] = useState<"login" | "register" | undefined>(
    undefined
  );

  const onClose = () => {
    setModalOpen(undefined);
  };

  return (
    <_.ImageBackground
      source={require("../../assets/background-login.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      {modalOpen && modalOpen === "login" && <LoginModal onClose={onClose} />}
      {modalOpen && modalOpen === "register" && (
        <RegisterModal onClose={onClose} />
      )}

      <_.View style={styles.container}>
        <_.Text style={styles.title}>BEM-VINDO DE VOLTA!</_.Text>
        <_.Text style={styles.description}>
          É um prazer tê-lo aqui novamente. Faça seu login ou cadastre-se.
        </_.Text>
      </_.View>

      <_.View style={styles.buttonsContainer}>
        <_.TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalOpen("login");
          }}
        >
          <_.Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Entrar
          </_.Text>
        </_.TouchableOpacity>
        <_.TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            setModalOpen("register");
          }}
        >
          <_.Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Registrar
          </_.Text>
        </_.TouchableOpacity>
      </_.View>
    </_.ImageBackground>
  );
};

export default Login;
