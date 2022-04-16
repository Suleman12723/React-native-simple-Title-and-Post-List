
import React ,{useState} from 'react';
import { StyleSheet, Text, View,Button , FlatList} from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import InputView from './components/InputView';
import ListView from './components/ListView';



export default function App() {
  const [postObj, setPostObj] = useState({title:'',post:'',date:''});
  const [postList, setPostList] = useState([]);
  const [inputState, setInputState]= useState(false);
  const [head, setHead] = useState('POSTS');

  const showInput = ()=>{
    setInputState(true);
    setHead('New POST');
  };

  const goBack = ()=>{
    setInputState(false);
    setHead('POSTS');

  };


  const addPost = (obj)=>{
    setPostObj(obj);
    setPostList([...postList,obj]);
    setPostObj({title:'',post:'',date:''});
    setInputState(false);
  };



  return (
    <View style={styles.container}>
      <Header head={head}/>
      <View style={styles.listContainer}>
      {/* <View style={styles.btn}><Button title='Add New Post' onPress={()=>{setInputState(true); setHead('NEW POST')}}/></View> */}
      <InputView  state={inputState} goback={goBack} postit={addPost} />
      <FlatList data={postList} keyExtractor={(item,index)=>item.title+index} renderItem={(post)=><ListView data={post.item} />}/>
    </View>
    <Footer show={showInput}/>
  </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
     

    // #261D32
  },
  listContainer:{
    flex: 1,
    // backgroundColor: '#121212',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30
  },
  btn:{

  }

});
