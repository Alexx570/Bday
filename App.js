import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';
import { Button } from "native-base";
import Form from "./src/components/Forms";
import Results from "./src/components/Results";
import firebase from "./src/utils/firebase";
import colors from "./src/utils/colors";
import moment from "moment";


export default function App() {
  const [name, setName] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dia, setDia] = useState(null);
  const [mes, setMes] = useState(null);
  const [anio, setAnio] = useState(null);

  const onSubmit = () => {
    if (name.length, apellidos.length, dia.length, mes.length, anio.length > 0) {
      const today = moment().format("YYYY");
      const birth = today - anio;
      firebase.database().ref("general").push({ name, apellidos, birth })
    }

  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>The Fabulous Bithday Application</Text>
        <Form
          setName={setName}
          setApellidos={setApellidos}
          setDia={setDia}
          setMes={setMes}
          setAnio={setAnio}
        />
      
      
      </SafeAreaView>
      <Results
        name={name}
        apellidos={apellidos}
        dia={dia}
        mes={mes}
        anio={anio}
      />
      <Button style={styles.buttonSend} onPress={onSubmit}>
        <Text style={{ color: "#fff" }}>R E G I S T R A R</Text>
      </Button>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16202B"
  },

  safeArea: {
    height: 290,
    alignItems: "center",
  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    zIndex: -1,
  },

  titleApp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    alignContent: "center",
  },
  buttonSend: {
    marginTop: 50,
    marginLeft: 50,
    width: 200,
    height: 50,
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_COLOR_DARK,
  }
});