import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export default function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setData(res), setIsLoading(false))
  } , [])  


  return (
    
    isLoading ? 
       <View style={styles.container}>
         <ActivityIndicator size="large" animating />
       </View>
     : 
    <View style={styles.container}>
       <FlatList
        data={data}
        renderItem={({ item }) => 
          <TouchableOpacity onPress={()=>alert(item.body)}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>}
        keyExtractor={(item, index) => index}
      />
    </View>
    
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  }


});
