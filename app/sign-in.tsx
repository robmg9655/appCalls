import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
    const handleLogin = () => {};

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.container} className="w-full h-4/6" resizeMode="contain" />

                <View className="px-10">
                    <Text className="text-2xl text-center uppercase font-NimbusSanL text-black-200">Benvingut</Text>
                    <Text className="text-3xl font-NimbusSanL text-primary-100 text-center mt-2">Registra't a l'aplicació</Text>
                    <Text className="text-lg font-NimbusSanL text-black-200 text-center mt-12">Inicia sessió amb google</Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <View className="flex flex.row items-center justify-center">
                            <Image
                                source={icons.googleIcon}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-NimbusSanL text-black-300 ml-2">Continuar amb Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;