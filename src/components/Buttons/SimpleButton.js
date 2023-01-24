import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../common/colors/Colors';

export default function SimpleButton(props) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.onPress}>
      <Text style={styles.btnTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.red,
    borderRadius: 10,
    marginTop: 10,
  },
  btnTitle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 12,
  },
});
