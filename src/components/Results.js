import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Results(props) {
    const { setName, setApellidos, setDia, setMes, setAnio } = props;
    return (
        <View style={styles.content}>
            <View style={styles.boxContent}>
                <DataResult title={"Nombre: "} value={`${setName}.`} />
                <DataResult title={"Apellidos: "} value={`${setApellidos}.`} />
                <DataResult title={"Día: "} value={`${setDia}.`} />
                <DataResult title={"Mes: "} value={`${setMes}.`} />
                <DataResult title={"Año"} value={`${setAnio}.`} />
            </View>
        </View>
    )
}

function DataResult(props) {
    const { value } = props
    return (
        <View style={styles.value}>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        marginHorizontal: 40,
    },
    boxContent: {
        padding: 30,
    },

    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
})
