import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.conatainer}>
        <Text style={styles.heading}>{props.head}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
conatainer:{
    // backgroundColor:'#387eff',
    backgroundColor:'#52bf90',
    width:'100%',
    height:70,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:10,

},
heading:{
    color:'#fff'
}
});

export default Header