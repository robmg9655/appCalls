import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
    const {loading, isLoggedIn } = useGlobalContext();

    if(loading) {
        return (
            <SafeAreaView className="bg-black h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-100" size="large" />
            </SafeAreaView>
        )
    }
    if(!isLoggedIn) return <Redirect href="/sign-in" />

    return <Slot />;
}