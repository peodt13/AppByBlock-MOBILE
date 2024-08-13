import React from 'react';
import { FlatList, View,Image,Text } from 'react-native';


import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'

export default function Produto({topo, detalhes,itens}){

    // const renderItem = ({item:{nome,imagem}})=> <View Key={nome}>
    //                             <Image source={imagem}/>
    //                             <Text>{nome}</Text>

    //                         </View>

    return  <FlatList 
                data={itens.lista}
                renderItem={Item}
                KeyExtractor={itens.lista.nome}
                ListHeaderComponent={() => {
                    return<>
                    <Topo {...topo} />
                    <Detalhes {...detalhes} />
                    </>
                }}

            
            
            />


           
          
          
      
}