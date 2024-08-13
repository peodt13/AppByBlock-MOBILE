import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold,} from '@expo-google-fonts/space-grotesk';
import { View, TouchableOpacity, Text} from 'react-native';

import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';
import SobreNos from './src/mocks/SobreNos';
import SobreN from './src/telas/Sobre_nos/sobnos';
import Cards from './src/telas/Itens/Itens'
import mock_itens from './src/mocks/mockItens'

import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';


function MenuKit(){
  return <Produto {...mock}/>
}

function Sobre(){
  return<SobreN {...SobreNos}/>
}

function MenuAudio(){
  const[audioStatus, setAudioStatus]= useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);


    useEffect(() => {
      (async () => {
        console.log('status', audioStatus);
        if (audioStatus) {
          setLoading(true);
          const { sound } = await Audio.Sound.createAsync(require('./assets/FREE Short 1 Minute Freestyle Type Beat - DRACO  Free Beats  Rap Instrumental Beats  Rap Beat.mp3'));
          setSound(sound);
          try {
            await sound.playAsync();
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        } else {
          if (sound) {
            try {
              await sound.stopAsync();
              await sound.unloadAsync();
            } catch (e) {
              console.log(e);
            }
          }
        }
      })();
    }, [audioStatus]);
    
    return <TouchableOpacity onPress={()=> {if(!loading){setAudioStatus(!audioStatus);}}}>
            <Text>🎶on/off</Text>
    </TouchableOpacity>

  } ;

    
  
  


function Card(){
  return <Cards {...mock_itens}/>
}

function AudioBT(){
  return <TouchableOpacity>
      <Text> 🎶 on/off</Text>
      </TouchableOpacity>
}


const Tab = createBottomTabNavigator();

function TabsMenu(){
        return <Tab.Navigator
                   screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName;

                      if(route.name === "Novidade"){
                        iconName = focused 
                        ? 'star' 
                        : 'star-outline';
                      }else if (route.name === 'Sobre nós'){
                        iconName = focused 
                        ? 'information'
                        : 'information-outline';
                      }else if (route.name === 'Produtos'){
                        iconName = focused 
                        ? 'basket'
                        : 'basket-outline';
                      }else if (route.name === 'Lista de Desejos'){
                        iconName = focused 
                        ? 'heart'
                        : 'heart-outline';
                      }
                    

                    return <Ionicons name= {iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarHideOnKeyboard: true,
                    headerShown: false,

                  })}>

                    <Tab.Screen name= "Sobre nós" component={Sobre}/>
                    <Tab.Screen name= "Novidade" component={MenuKit}/>
                    <Tab.Screen name= "Produtos" component={Card}/>
                    <Tab.Screen name= "Lista de Desejos" component={MenuKit}/>

                 
                </Tab.Navigator>
}










export default function App() {

//Carrega a fonte para o projeto
const [ fonteCarregada ] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return <NavigationContainer>
    <TabsMenu/>
    <MenuAudio/>
  </NavigationContainer>
}