import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert} from 'react-native';
import React from 'react';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
}


const SettingItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => (
    <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
        <View className='flex flex-row items-center gap-3'>
            <Image source={icon} className='size-6' resizeMode='contain'/>
            <Text className={`text-lg font-NimbusSanL-Bold text-accent-100 ${textStyle}`}>{title}</Text>
        </View>

        {showArrow && <Image source={icons.arrowRightIcon} className='size-5' />}
    </TouchableOpacity>
)

const Profile = () => {
    const { user, refetch } = useGlobalContext();

    const handleLogout = async () => {
        const result = await logout();

        if(result) {
            Alert.alert('Success', 'Logout Successfully');
            refetch();
        } else {
            Alert.alert('Error', 'Logout Failed');
        }
    };

    return (
        <SafeAreaView className='bg-black h-full'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-32 px-7'
            >
                <View className='flex flex-row items-center justify-between mt-5'>
                    <Text className='text-xl font-NimbusSanL-Bold text-accent-100'>Profile</Text>
                    <Image source={icons.notificationIconLine} className='size-5' />
                </View>

                <View className='flex-row justify-center flex mt-5'>
                    <View className='flex flex-col items-center relative mt-5'>
                        <Image source={{ uri: user ?.avatar}} className='size-44 relative rounded-full border-2 border-accent-100' />

                        <TouchableOpacity className='absolute bottom-11 right-2 bg-black-300 rounded-full p-3 border-2 border-accent-100'>
                            <Image source={icons.editPhotoIcon} className='size-6' />
                        </TouchableOpacity>

                        <Text className='text-2xl font-NimbusSanL-Bold text-accent-100 mt-3'>{user ?.name}</Text>
                    </View>
                </View>

                <View>
                    <View className='flex flex-col mt-10 border-t pt-5  border-black-100'>
                        <SettingItem icon={icons.profileIcon} title="Perfil" onPress={() => {}} />
                        <SettingItem icon={icons.profileIcon} title="Configuració" onPress={() => {}} />
                    </View>
                    <View className='flex flex-col mt-5 border-t pt-5 border-black-100'>
                        <SettingItem icon={icons.logoutIcon} title="Desconectar" textStyle='text-danger' showArrow={false} onPress={handleLogout} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;