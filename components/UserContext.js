import { View, Text } from 'react-native'
import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from "@env";
export const User = createContext()
import {useDispatch} from 'react-redux'
import { getCart } from '../redux/reducers/cartReducers';


export const getUser = async () => {
      try {
          const response = await axios.get(
            `${BASE_URL}/user/profile` 
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
  const [products, setProducts] = useState([])
  const dispatch = useDispatch(); 
    useEffect(() => {
        
        getUser().then(function (user) {
          setUser(user)
             dispatch(getCart());
        }).catch((err) => {
          console.log(err);
        })
         dispatch(getCart());
    }, [loggedin])
  
 
  useEffect(() => {
    const getProducts = async() => {
     try {  
       const response = await axios.get(
         `${BASE_URL}/products/get-products`
       );
       setProducts(response.data)
     } catch (error) {
      console.log(error);
     }  
   }
    getProducts()
  }, [])


  return (   
    <User.Provider value={{user, setUser, loggedin, setLoggedin, products}}>  
   {children}
    </User.Provider>
  ) 
}

export default UserContext