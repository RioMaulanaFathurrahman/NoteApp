// screens/EditNote.js
import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../components/CustomButton'

const EditNote = ({ setCurrentPage }) => (
  <View>
    <Text>Ubah Note</Text>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Back to Home"
      width="100%"
      onPress={() => setCurrentPage('Home')}
    />
  </View>
)

export default EditNote
