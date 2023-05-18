import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({children, onPress, classes}) => {
  return (
    <TouchableOpacity onPress={onPress} className={classes}>
    {children}
    </TouchableOpacity>
  );
}

export default Button