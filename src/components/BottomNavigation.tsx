import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ListTab from '../screens/TodoList';
import HomeTab from '../screens/Home';
import DescriptionTab from '../screens/Description';
import ToDoList from '../screens/TodoList';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTab}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={ToDoList}
                options={{
                    tabBarLabel: 'ToDoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name={'Description'} component={DescriptionTab} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="text"
                        color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;