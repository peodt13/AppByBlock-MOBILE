import React from "react";
import {View,ScrollView,StyleSheet} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Texto from '../../../componentes/Texto';


// import logoLogo from "./../../../../assets/gravatas.jpg"
// import Texto from "../../../componentes/Texto";
// import Add from "./../../../componentes/Botao";


export default function Detalhes({item:{img,titulo,sobre}}) { 
    return <>
        <ScrollView >
            <View style={styles.card}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Texto style={styles.titulo}>{titulo}</Texto>
                        <Texto style={styles.sobre}>{sobre}</Texto>
                    </Card.Content>
                    <Card.Cover source={img} style={styles.cover}/>
                    
                </Card>  
            </View>
            
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    titulo:{
       fontSize: 50,
        
        
    },

    sobre:{
        fontSize: 25,
    },

        cover:{
            height: 500,
        },
        card:{
            border: 10,
            borderBlockColor: 'black',
        }

});

    