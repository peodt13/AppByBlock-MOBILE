import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export default function Botao({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>Adicionar na Lista de Desejos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "black",
    paddingVertical: 16,
    borderRadius: 6,
  },
  botaoTexto: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  }
});