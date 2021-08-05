import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './Drawer';

import Login from '../Screens/Login/Login';
import { userSelector } from '../Redux/UserRedux';



// uygulamanın root navigation dosyası
const MainNavigation = props => {

    const loggedInUser = useSelector(userSelector)
    const isLoggedIn=loggedInUser!==null
    
        return (
            <NavigationContainer>
                {
                    isLoggedIn ?
                        <MyDrawer />
                                          

                        :
                        <Login />
                }
                </NavigationContainer>

    )
}

export default MainNavigation;