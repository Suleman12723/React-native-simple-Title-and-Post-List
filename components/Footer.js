import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.conatainer}>
        <Pressable onPress={props.show} style={styles.btn}><View >
            <Text style={styles.btnText}>+</Text>
        </View>
        </Pressable>
    </View>
    
    )
}

const styles = StyleSheet.create({
conatainer:{
// backgroundColor:'#387eff',
backgroundColor:'#52bf90',
// backgroundColor:'#fff',
borderTopWidth:1,
borderTopColor:'#f0f6f7',
width:'100%',
height:40,
alignItems:'center',
position:'relative',



},
btn:{
    position:'absolute',
    top:-20,
    backgroundColor:'#262f66',
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    
},
btnText:{
    flex:1,
    fontSize:40,
    position:'relative',
    top:-4,
    // color:'#8352ff'
    color:'#fff'
},


});

export default Footer