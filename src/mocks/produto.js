import Logo from '../../assets/logoTNF.png';
import Modelo1 from '../../assets/puffer1.png';
import Modelo2 from '../../assets/puffer2.png';
import Modelo3 from '../../assets/puffer3.png';
import {Text, StyleSheet} from "react-native";

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Jaqueta puffer TNF",
        logo: Logo,
        detalhes: "Produto novo na etiqueta. ",
        preco: "R$ 1200,00",
    },

    itens: {
        titulo: "Itens",
        lista: [
            {
                
                imagem: Modelo1,
            },
            {
                
                imagem: Modelo2,
            },
            {
                
                imagem: Modelo3,
            }
        ]

        

    }
}



export default produto;