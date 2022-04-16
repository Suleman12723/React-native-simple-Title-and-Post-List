import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


function ListView(props) {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={styles.text}>{props.data.post}</Text>
            <View style={styles.lastview}><Image style={{width:20, height:20,borderRadius:20}} source={{uri:'data:image/png;base64,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'}}/><Text style={styles.date}>{props.data.date}</Text></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    minWidth:'100%',
    alignItems:'center',
    // borderColor:'#fff',
    // borderWidth:1
    marginBottom:20,
    
    fontFamily: 'Nunito',
    
},
box:{
    width:'90%',
    // backgroundColor:'#261D32',
    backgroundColor:'#fff',
    // height:110,
    justifyContent:'center',
    borderRadius:10,
    padding:20,
    borderLeftWidth:5,
    // borderLeftColor:'#45b097',
    borderLeftColor:'#52bf90',
    elevation:10,
    
},
title:{
    color:'#000',
    lineHeight:30,
    fontSize:20,
    fontWeight:'bold'
},
text:{
    // color:'#fff',
    color:'#000',
    lineHeight:30,
    fontSize:15,

},
lastview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
},
date:{
    // color:'#fff',
    color:'#262f66',
    lineHeight:30,
    // alignSelf:'flex-end',
    fontSize:15,
    paddingTop:10,
    // borderBottomColor:'#5B04BC',
    // borderBottomWidth:1,
   
}

});


export default ListView
