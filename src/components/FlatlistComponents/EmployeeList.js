import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../common/colors/Colors';
import Constants from '../../common/constants/Constants';
import SimpleButton from '../Buttons/SimpleButton';

export default function EmployeeList(props) {
  const {item, index} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {Constants.EmployeeForm} {index + 1}
      </Text>
      <TextInput
        value={item?.name}
        placeholder={Constants.Name}
        onChangeText={e => props.onChange('name', e, item.id)}
        style={styles.textInput}
      />
      {item?.validName.length > 3?
      <Text
        allowFontScaling={false}
        style={{color: Colors.red}}>
        {Constants.InvalidName}
      </Text>:null}
      <TextInput
        value={item?.email}
        placeholder={Constants.Email}
        onChangeText={e => props.onChange('email', e, item.id)}
        style={styles.textInput}
      />
      <Text
        allowFontScaling={false}
        style={{color: item?.validEmail ? Colors.green : Colors.red}}>
        {Constants.InvalidEmail}
      </Text>

      <View style={styles.passContainer}>
        <TextInput
          value={item?.password}
          placeholder={Constants.Password}
          secureTextEntry={item?.passwordShow}
          onChangeText={e => props.onChange('password', e, item.id)}
          style={styles.passInput}
        />
        <Entypo
          name={item?.passwordShow ? Constants.eyeLine : Constants.eye}
          size={24}
          color={Colors.black}
          style={styles.eye}
          onPress={props.showHidePass}
        />
      </View>
      <Text
        allowFontScaling={false}
        style={[styles.error, {color: item?.validPassword ? Colors.green : Colors.red}]}>
        {Constants.InvalidPassword}
      </Text>

      <SimpleButton title={Constants.Submit} onPress={() => props.onSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  heading: {color: 'black', fontWeight: 'bold'},
  textInput: {
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 45,
    borderRadius: 5,
    marginTop: 7,
    paddingLeft: 10,
  },
  passContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 45,
    borderRadius: 5,
    marginTop: 7,
  },
  passInput: {paddingLeft: 10, width: '90%'},
  error: {fontSize: 12, marginTop: 3, marginLeft: 2},
  eye: {marginRight: 10, marginTop: 8},
});
