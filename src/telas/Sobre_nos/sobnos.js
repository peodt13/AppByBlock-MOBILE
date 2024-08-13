import React from 'react';
import { StyleSheet,FlatList, View,Image,Text } from 'react-native';
import Topo from '././Componentes/textoSob'

// criar compobnente sobre (tirei foto no celular) importar nesse arquivo o componente


export default function Sobre({topo}){

    return<>
    <FlatList ListHeaderComponent={() => {
     return<>
     <Topo {...topo}/>


    </>
    }}
    />
   </>
       
    
    
    }
     
