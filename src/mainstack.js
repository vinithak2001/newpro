import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Domain from './screens/Domain';
import Form from './screens/formpage';
import herosection from './screens/HeroSection';

const Stack = createNativeStackNavigator();
const MainStack =({navigation})=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
           <Stack.Screen name='Hero' component={herosection} />
           <Stack.Screen name='Domain' component={Domain} />
           <Stack.Screen name='Formpage' component={Form} />
           
        </Stack.Navigator>
    )
}
export default MainStack;