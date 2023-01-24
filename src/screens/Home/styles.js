import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundColor,
    marginTop: 30
  },
  headerContainer: {
    height: 50,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerRow: {
    flexDirection: 'row',
  },
  backIcon: {
    marginTop: 12,
    marginLeft: 5,
  },
  routeTxt: {
    marginTop: 13,
    fontWeight: 'bold',
    color: Colors.purple,
  },
  headerTitle: {
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: 'bold',
  },
  space: {
    marginLeft: '15%',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 10,
  },
  itemSepertor: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.black,
    marginVertical: 10,
  },
});
