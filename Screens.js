import React from "react";
import {
    Text,
    ImageBackground,
    StyleSheet,
    View,
    TouchableOpacity,
    Button,
  } from 'react-native';
import bg from './assets/bg.jpg';
import CurvedButton from './components/curbutton';
import ClrlesBtn from './components/colorlessbutton';
import {LinearGradient} from 'react-native-linear-gradient';


const styles = StyleSheet.create({

    image: {
      flex: 1,
      justifyContent: 'center',
      height: null,
      width: null,
    },  

    but: {
      elevation: 2,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
  
      alignItems: 'center',
    },
  
    button: {
      alignItems: 'center',
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      fontWeight: "500",
      top: 15,
    },
  
    butt: {
      fontFamily: "Montserrat",
      color: '#3573CF',
      fontWeight: "500",
      fontSize: 18,
    },
  
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: "700",
      fontFamily: "Montserrat",
      marginTop: -10,
      paddingLeft: 15,
    },
  
    texts: {
      color: 'white',
      fontSize: 16,
      fontWeight: "400",
      paddingTop: 15,
      paddingLeft: 14,
      paddingBottom: 60,
      marginBottom: -15,
    },
  
    text: {
      color: '#97D5FE',
      fontSize: 76,
      fontWeight: "700",
  
      height: 300,
      lineHeight: 90,
      fontFamily: 'Futura',
      paddingLeft: 60,
      paddingTop: 90,
      paddingRight: 0,
    },
    containers: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  
     header: {
      flex: 2,
      justifyContent: 'center',

    },
    footer: {
      
      backgroundColor: '#3573CF',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    container: {
      flex: 1,
    },
    linearGradient: {
      width: '100%',
      height: '100%',
      opacity: 0.95,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image2:{
      width:'100%',
      height: '100%',

    },

   
  });

  const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
  );

  export const Home= ({navigation}) => {
      return(
        <ScreenContainer>
        <View style={styles.container}>
        <View style={styles.header}> 
          <ImageBackground source={bg} style={styles.image}>
            <Text style={styles.text}>MoXp</Text>
          
          <View style={styles.footer}>
           <Text style={styles.title}>Let Us Get Started!</Text>
           <Text style={styles.texts}> 
              Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their model
            </Text> 
           <View style={styles.but}>
           <Button title="Create An Account" style={styles.button} onPress={() => navigation.push("SignIn")} > 
     
  </Button>
  </View>
           <ClrlesBtn text="Login To Existing Account" onPress={() => navigation.push("SignIn")}/>
          
          </View>
          </ImageBackground>
         </View> 
    </View>
    

    </ScreenContainer>
      );
  };
  

  export const SignIn= ( ) => {

    return (
      <ScreenContainer>
      <View>
       <Text>Helline</Text> 
       
    </View>
     
     
      </ScreenContainer>

    );
  };
