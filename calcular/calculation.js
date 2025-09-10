import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
    const [km, setKm] = useState('');
    const [metros, setMetros] = useState(null);

    const handleConvert = () => {
        // Verifica se o campo de entrada não está vazio
        if (km === '') {
            Alert.alert('Erro', 'Por favor, digite o valor em quilometros.');
            return;
        }

        const valorEmkm = parseFloat(km);

        if (isNaN(valorEmkm)) {
            Alert.alert('Erro', 'por favor, digite um numero.');
            return;
        }

        const resultadoEmMetros = valorEmkm * 1000;
        setMetros(resultadoEmMetros);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quilômetros para Metros</Text>
        </View>
    );
}
