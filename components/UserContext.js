import { View, Text } from 'react-native'
import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const User = createContext()


export const getUser = async () => {
      try {
          const response = await axios.get(
            "http://192.168.153.179:8080/user/profile"
          );
          if (response.data) {
              return response.data
          }
      } catch (error) {
        console.log('err',error.response.data)
      }
}
  

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
  const [loggedin, setLoggedin] = useState(false)
  const [products, setProducts] =  useState([])
    useEffect(() => {
        
        getUser().then(function (user) {
            setUser(user)
        })
    }, [loggedin])
  
 
  useEffect(() => {
    const getProducts = async() => {
     try {
       const response = await axios.get(
         "http://192.168.153.179:8080/products/get-products"
       );
       setProducts(response.data)
     } catch (error) {
      console.log(error);
     }
   }
    getProducts()
  }, [])
  console.log(products)
  
  return (
    <User.Provider value={{user, setUser, loggedin, setLoggedin, products}}>
   {children}
    </User.Provider>
  )
}

export default UserContext