import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../utils/colors";

export default function Form(props) {
    const { setName, setApellidos, setDia, setMes, setAnio } = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput placeholder="Nombre"
                    keyboardType="text" style={styles.input}
                    onChange={e => setName(e.nativeEvent.text)}>
                </TextInput>
                <TextInput placeholder="Apellidos"
                    keyboardType="text" style={[styles.input, styles.inputAp]}
                    onChange={e => setApellidos(e.nativeEvent.text)}>
                </TextInput>
            </View>
            <Text></Text>
            <View style={styles.viewInput}>
                <TextInput placeholder="Día"
                    keyboardType="numeric" style={[styles.input, styles.inputBirth]}
                    onChange={e => setDia(e.nativeEvent.text)}>
                </TextInput>
                <TextInput placeholder="Mes"
                    keyboardType="numeric" style={[styles.input, styles.inputBirth]}
                    onChange={e => setMes(e.nativeEvent.text)}>
                </TextInput>
                <TextInput placeholder="Año"
                    keyboardType="numeric" style={[styles.input, styles.inputBirth]}
                    onChange={e => setAnio(e.nativeEvent.text)}>
                </TextInput>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        height: 180,
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        justifyContent: "center",
    },

    viewInput: {
        flexDirection: "row",
    },

    input: {
        height: 50,
        width: "50%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: -5,
        color: "000",
        paddingHorizontal: 20,

    },

    inputAp: {
        width: "50%",
        marginLeft: 5,

    },

    inputBirth: {
        width: "33%",
        marginLeft: 5,

    }

});