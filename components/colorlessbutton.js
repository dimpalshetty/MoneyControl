import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default function ClrlesBtn ({text}) {
return(
  <TouchableOpacity style={styles.button} >
          <Text style={styles.button}> Login To Existing Account </Text>
        </TouchableOpacity>

        );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: null,
    width: null,
  },
  but: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 11,
    paddingVertical: 15,
    paddingHorizontal: 40,

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
    paddingBottom: 40,
  },

  text: {
    color: '#97D5FE',
    fontSize: 76,
    fontWeight: "700",
    height: 300,
    lineHeight: 90,
    fontFamily: 'Futura',
    paddingLeft: 70,
    paddingTop: 90,
    paddingRight: 0,
  },

  header: {
    flex: 2,
    justifyContent: 'center',
  },
  footer: {
    flex: 1.4,
    backgroundColor: '#3573CF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
});