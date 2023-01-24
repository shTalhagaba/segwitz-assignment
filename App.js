import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Constants from './src/common/constants/Constants';
import EmployeeList from './src/components/FlatlistComponents/EmployeeList';


export default function ResetPasswordModal(props) {
  const [data, setData] = useState([])

  const handlePlus = () => {
    let arr=data
    arr.push({
      id: Math.random(19) * 200,
      name: '',
      email: '',
      password: '',
      validName: false,
      validEmail: false,
      validPassword: false,
      passwordShow: false
    })
    setData(arr)
  }

  const handleMinus =()=>{
    const arr = data.filter((e,i) => data[0]?.id != e?.id)
    setData(arr)
  }

  const onChange=(names,e,id)=>{
    let temp =[]
    data.forEach((ele,i)=>{
      ele.id === id ?temp.push({...ele,[names]:e}): temp.push(ele)
    })
    setData(temp)
  }

  const showHidePass =(id)=>{
    let temp =[]
    data.forEach((ele,i)=>{
      ele.id === id ? temp.push({...ele,passwordShow:!ele.passwordShow}) : temp.push(ele)
    })
    setData(temp)
  }
  const onSubmit =(id)=>{
    let temp =[]
    data.forEach((ele,i)=>{

      ele.id === id ? temp.push({...ele,validName:ele.name != "" ? true : false,validEmail:ele?.email != "" ? true : false ,validPassword : ele.password != "" ? true :false}) : temp.push(ele)
    })
    setData(temp)
  }
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f2' }}>
      <View style={{ height: 50, backgroundColor: 'white', justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name='left' size={22} color={'purple'} style={{ marginTop: 12, marginLeft: 5 }} />
          <Text allowFontScaling={false} style={{ marginTop: 13, fontWeight: 'bold', color: 'purple' }}>Routes</Text>
        </View>
        <Text allowFontScaling={false} style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold' }}>Assignment</Text>
        <View style={{ marginLeft: '15%' }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, padding: 10 }}>
        <AntDesign name='minuscircle' color={'black'} size={22} onPress={()=>handleMinus()} />
        <AntDesign name='pluscircle' color={'black'} size={22} onPress={() => handlePlus()} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
      <EmployeeList
      item={item}
      index={index}
      onChange={(names,e)=>onChange(names,e,item.id)}
      onSubmit={(e)=>onSubmit(item?.id)} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginVertical: 10 }}></View>}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});

