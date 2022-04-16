import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput ,Button, Modal} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



const InputView = (props) => {

    const [title, setTitle]  =useState('');
    const [post, setPost] = useState('');


    const date = ()=>{
        var options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
        var today = new Date();
        var todayDate = today.toLocaleDateString("en-US");
        return todayDate;
    };

    const titleHandler = (enteredTitle)=>{
        setTitle(enteredTitle);
    };

    const postHandler = (enteredPost)=>{
        setPost(enteredPost);
    };

    const addPost = ()=>{
        props.postit({title:title, post:post ,date:date() });
        setTitle('');
        setPost('');
    };
    const reset= ()=>{
        setTitle('');
        setPost('');
    };


  return (
    <Modal visible={props.state} style={styles.modal} animationType='slide'> 
        <View style={styles.gobackbtn}><Pressable onPress={props.goback}><Text style={styles.btnText}>Go Back</Text></Pressable></View>
        <View style={styles.secondContainer}>
        <View style={styles.titleview}>
        <Text style={styles.text}>Title:</Text>
        <TextInput maxLength={20} style={styles.Input} placeholder='title...' onChangeText={titleHandler} value={title}/>
        </View>
        <View style={styles.postview}>
        <Text style={styles.text}>Post:</Text>
        <TextInput style={styles.Input} placeholder='Post...' onChangeText={postHandler} value={post}/>
        </View>

        <View style={styles.btnview}>
        <View style={styles.btn}><Pressable onPress={reset}><Text style={styles.btnText}>Reset</Text></Pressable></View>
        <View style={styles.btn}><Pressable onPress={addPost}><Text style={styles.btnText}>Save</Text></Pressable></View>
        </View>
        </View>
    </Modal>
 

  )
}

const styles = StyleSheet.create({
   modal:{
    
   },
    titleview:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:70,
        borderRadius:5,
        // borderWidth:1,
        padding:10,
        marginBottom:10
        
        
    },
    postview:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:70,
        borderRadius:5,
        // borderWidth:1,
        padding:10,
        marginBottom:10
       
    },
    btnview:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    },
    btn:{
        backgroundColor:'#51427d',
        width:80,
        height:35,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    

    },
    gobackbtn:{
        backgroundColor:'#51427d',
        width:80,
        height:35,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        

    },
    secondContainer:{
        padding:30,
        marginTop:50
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    Input:{
        flex:1,
        padding:10,
        // borderWidth:1,
        borderRadius:5,
        marginLeft:5,
        fontSize:16,
        borderBottomColor:'#51427d',
        borderBottomWidth:1
        
    },
    btnText:{
        color:'#fff'
    }
});

export default InputView