import React from "react";
import {
    Text,
    ImageBackground,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
import bg from './assets/bg.jpg';
import CurvedButton from './components/curbutton';
import  TextInputBox from './components/textInputBox';
import ClrlesBtn from './components/colorlessbutton';
import neww from './assets/neww.jpg';
import google from './assets/google.png';
import arrowbtn from './assets/arrowbtn.png';
import facebook from './assets/facebook.png';
import styles from './styles';




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
 
 
   
    <ImageBackground source={neww} style={styles.images}>
    
     <View style={styles.box}><Text style={styles.Signtext}>Welcome {'\n'} Back! </Text>
      </View> 
      <View style={styles.inputBoxa}>
       <TextInputBox text='Email Or Username'/>
     </View>
      <View style={styles.inputBoxb}>
       <TextInputBox text='Password'/>
      </View> 
      <View style={styles.signin}>
        <Text style={styles.signintext}>Sign in</Text>
        </View>
    <View>
    <TouchableOpacity style={styles.arrow}>
         <Image source={arrowbtn}></Image>
         </TouchableOpacity>

      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.forgotpassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      
      <TouchableOpacity>
      
      <View style={styles.google}>
      
 
         <Image source={google}></Image>
        

      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      
      <View style={styles.facebook}>
      
 
         <Image source={facebook}></Image>
        

      </View>
      </TouchableOpacity>
        
      <View style={styles.donthaveacc}>
        <Text style={styles.grey}> Don't Have An Account Yet?
        
        <TouchableOpacity>
          <Text  style={styles.donthave}>Create A Account</Text>
        </TouchableOpacity>
        
        </Text>

        </View>

    
      
    </ImageBackground>
     

    
     
      </ScreenContainer>

    );
  };
