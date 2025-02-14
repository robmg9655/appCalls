import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import Cards from "@/components/cards";
import Filter from "@/components/filters";

export default function Index() {
    return (
        <SafeAreaView className="bg-black h-full">
            <View className="px-5">
                <View className="flex flex-row items-center justify-between mt-5">
                    <View className="flex flex-row items-center">
                        <Image source={images.avatar} className="size-12 rounded-full"/>
                        <View className="flex flex-col items-start ml-2 justify-center">
                            <Text className="text-xs font-NimbusSanL text-accent-200">Good Morning</Text>
                            <Text className="text-base font-NimbusSanL-bold text-accent-100">Pepito</Text>
                        </View>
                    </View>
                    <Image source={icons.notificationIconLine} className="size-6"/>
                </View>
                <Search />
                <View className="my-5">
                    <View className="flex flex-row items-center justify-between">
                        <Text className="text-xl font-NimbusSanL-Bold text-accent-100">Feines d'avui</Text>
                        <TouchableOpacity>
                          <Text className="text-base font-NimbusSanL-Bold text-primary-100">Totes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Cards />
        </SafeAreaView>
    );
}
