import React from "react";
import ScreenHome from "./screenHome";
import ScreenPlay from "./screenPlay";
import Tutorial from "./tutorial";
import Setting from "./setting";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

export default RootComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenHome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="ScreenHome" component={ScreenHome}></Stack.Screen>
                <Stack.Screen name="ScreenPlay" component={ScreenPlay}></Stack.Screen>
                <Stack.Screen name="Tutorial" component={Tutorial}></Stack.Screen>
                <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
            </Stack.Navigator>
         </NavigationContainer>
    )
}