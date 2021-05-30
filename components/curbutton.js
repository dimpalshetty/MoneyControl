import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default function CurvedButton ({text}) {
return(
  
  <TouchableOpacity styles={styles.button} >
     <View style={styles.but}> 
          <Text style={styles.butt}> {text} </Text> 
        </View>
  </TouchableOpacity>
  
   
);
}

const styles = StyleSheet.create({
  but: {
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 11,
    paddingVertical: 15,
    paddingHorizontal: 20,

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
    fontFamily: 'Montserrat',
    color: '#3573CF',
    fontWeight: "500",
    fontSize: 18,
  }
});