import {View, Text, Image} from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

import icons from '@/constants/icons';

const TabIcon = ({ focused, icon, title }: {focused: boolean; icon: any; title: string; }) => (
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} tintColor={focused ? '#0061ff' : '#666876'} resizeMode='contain' className="size-8" />
        <Text className={`${focused ? 'text-primary-100 font-NimbusSanL-Bold' : 'text-black-200 font-NimbusSanL'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false, 
                tabBarStyle: {
                    backgroundColor: 'black',
                    position: 'absolute',
                    borderTopColor: 'white',
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inici',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon  icon={icons.homeIconFocused} focused={focused} title="Inici" />
                    )
                }}
            />

            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Calendari',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon  icon={icons.calendarIconFocused} focused={focused} title="Calendari" />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon  icon={icons.profileIconFocused} focused={focused} title="Perfil" />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;