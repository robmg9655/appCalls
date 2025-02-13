import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

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
        </View>
      </View>
    </SafeAreaView>
  );
}
