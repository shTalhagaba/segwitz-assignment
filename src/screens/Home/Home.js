import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Colors from '../../common/colors/Colors';
import Constants from '../../common/constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EmployeeList from '../../components/FlatlistComponents/EmployeeList';

export default function Home(props) {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  const handlePlus = () => {
    let arr = data;
    arr.push({
      id: Math.random(19) * 200,
      name: '',
      email: '',
      password: '',
      validName: false,
      validEmail: false,
      validPassword: false,
      passwordShow: false,
    });
    setData(arr);
    setReload(!reload)
  };

  const handleMinus = () => {
    const arr = data.filter((e, i) => data[0]?.id != e?.id);
    setData(arr);
  };

  const onChange = (names, e, id) => {
    let temp = [];
    data.forEach((ele, i) => {
      ele.id === id ? temp.push({...ele, [names]: e}) : temp.push(ele);
    });
    setData(temp);
  };

  const showHidePass = id => {
    let temp = [];
    data.forEach((ele, i) => {
      ele.id === id
        ? temp.push({...ele, passwordShow: !ele.passwordShow})
        : temp.push(ele);
    });
    setData(temp);
  };
  const onSubmit = id => {
    let temp = [];
    data.forEach((ele, i) => {
      ele.id === id
        ? temp.push({
            ...ele,
            validName: ele.name != '' ? true : false,
            validEmail: ele?.email != '' ? true : false,
            validPassword: ele.password != '' ? true : false,
          })
        : temp.push(ele);
    });
    setData(temp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <AntDesign
            name={Constants.left}
            size={22}
            color={Colors.purple}
            style={styles.backIcon}
          />
          <Text allowFontScaling={false} style={styles.routeTxt}>
            {Constants.Routes}
          </Text>
        </View>
        <Text allowFontScaling={false} style={styles.headerTitle}>
          {Constants.Assignment}
        </Text>
        <View style={styles.space} />
      </View>

      <View style={styles.counterContainer}>
        <AntDesign
          name={Constants.minuscircle}
          color={Colors.black}
          size={22}
          onPress={() => handleMinus()}
        />
        <AntDesign
          name={Constants.pluscircle}
          color={Colors.black}
          size={22}
          onPress={() => handlePlus()}
        />
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <EmployeeList
            item={item}
            index={index}
            onChange={(names, e) => onChange(names, e, item.id)}
            showHidePass={() => showHidePass(item.id)}
            onSubmit={e => onSubmit(item?.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSepertor}></View>}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
