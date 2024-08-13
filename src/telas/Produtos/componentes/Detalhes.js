import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';
import Texto from '../../../componentes/Texto';
import Botao from './../../../componentes/botao'; 


export default function Detalhes({ nome, logo, detalhes, preco }) {
  return (
    <View style={styles.produto}>
      <View style={styles.logotipo}>
        <Image source={logo} style={styles.logo} resizeMode='contain'/>
        <Texto style={styles.nome}>{nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{detalhes}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
      <Botao onPress={() => {
        Alert.alert("Lista de Desejos!", "Em breve a funcionalidade da Lista de Desejos estará disponível!")
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  produto: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 25,
    paddingLeft: 10,
  },
  descricao: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  preco: {
    color: "#2A9F85",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8
  },
  logo: {
    width: 100,
    height: 100,
  },
  logotipo: {
    flexDirection: "row",
  }
});
