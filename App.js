import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../screens/Home';
import AddNote from '../screens/AddNote';
import EditNote from '../screens/EditNote';


const noteList = [
  { id: '1', title: 'Note 1', desc: 'This is the description for note 1' },
  { id: '2', title: 'Note 2', desc: 'This is the description for note 2' },
  // Add more notes as needed
]

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <View style={styles.container}>
      {currentPage === 'Home' && (
        <Home noteList={noteList} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'add' && <AddNote setCurrentPage={setCurrentPage} />}
      {currentPage === 'edit' && <EditNote setCurrentPage={setCurrentPage} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})
