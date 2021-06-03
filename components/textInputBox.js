import React from 'react';
import {
    Text,
    ImageBackground,
    StyleSheet,
    View,
    TouchableOpacity,
    Button,
    TextInput,
  } from 'react-native';

 const TextInputBox = ({text}) => {
      return(
          <TouchableOpacity>
              <View style={styles.input}>
                  <TextInput style={styles.texti} placeholder={text} />
              </View>
          </TouchableOpacity>
      )
  }

  const styles = StyleSheet.create(
      {
          input: {
              backgroundColor: 'white',
              alignSelf: 'stretch',
              borderBottomColor: '#A49D9D',
              borderBottomWidth:1,
              width: 296,
          },
          texti:{
              color: '#A49D9D',
              paddingBottom: 10,
              fontFamily: "Montserrat",
              fontSize: 16,
              opacity: 0.4,
             
               
          },
      }
  )

  export default TextInputBox