import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';
import Texto from '../../../componentes/Texto';



export default function topo({ logo, texto, socios }) {
  return <>
    <View style={styles.conteiner}>
      <View style={styles.logotipo}>
        <Image source={logo} style={styles.logo} resizeMode='contain'/>
      </View>
      <Texto style={styles.descricao}>{texto}</Texto>
      <Image source={socios} style={styles.imgSocios} resizeMode='contain'/>
    </View>
 </>
}


const styles = StyleSheet.create({
        descricao:{
            color: "white",
            fontSize: 22,
            
        },

        imgSocios:{
            width: 500,
            height: 500,
            marginTop: 50
        },

        conteiner:{
            alignContent:"center",
            alignItems:"center",
            backgroundColor:"black",
            width:'100%',
            height:'100%'
            

        },

        logo:{
            width: 250,
            height: 250,

        },

        logotipo:{
            backgroundColor:"black"
        }

});
