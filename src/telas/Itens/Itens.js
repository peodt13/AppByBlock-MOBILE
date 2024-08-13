import React from "react";

import Card from "./componentes/itenCont";
import Texto from "../../componentes/Texto";
import { FlatList, View,Image,Text } from 'react-native';


export default function Index({card1}) { 
    
    return  <FlatList 
                data={card1.lista}
                renderItem={Card}
                KeyExtractor={card1.lista.titulo}
                ListHeaderComponent={() => {
                    return<>
                    <Texto {...card1} />
                    
                    </>
                }}

            
            
            />
}