import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";
import React from "react";
import images from "@/constants/images";
import Filter from "@/components/filters"; // Assuming Filter component is imported

const data = [
    { id: 1, title: "La Grand Maison", location: "Llinars, Catalunya", time: "2h", image: images.trimming },
    { id: 2, title: "La Grand Maison", location: "Llinars, Catalunya", time: "4h", image: images.chainsaw },
    { id: 3, title: "Recollida Fornells", location: "Llinars, Catalunya", time: "1h", image: images.truck },
    { id: 4, title: "La Grand Maison", location: "Llinars, Catalunya", time: "30m", image: images.truck },
    { id: 5, title: "La Grand Maison", location: "Llinars, Catalunya", time: "2d", image: images.truck },
    { id: 6, title: "La Grand Maison", location: "Llinars, Catalunya", time: "3,5h", image: images.trimming },
    { id: 7, title: "La Grand Maison", location: "Llinars, Catalunya", time: "2d", image: images.truck },
    { id: 8, title: "La Grand Maison", location: "Llinars, Catalunya", time: "3,5h", image: images.trimming },
];

interface CardProps {
    title: string;
    location: string;
    time: string;
    image: any;
    onPress?: () => void;
}

const Card = ({ title, location, time, image, onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-52 h-64 bg-black-100 p-3 rounded-lg shadow-md border-2 border-accent-100 mx-2 my-2">
            <Image source={image} className="w-full h-36 rounded-lg" resizeMode="contain" />
            <View className="mt-2">
                <Text className="text-lg font-NimbusSanL-Bold text-black" numberOfLines={1}>{title}</Text>
                <Text className="text-sm font-NimbusSanL-Bold text-black-300">{location}</Text>
                <Text className="text-primary-100 font-NimbusSanL-Bold mt-1">TEMPS: {time}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Grid = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, backgroundColor: 'black', paddingVertical: 10 }}>
                <Filter />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                contentContainerStyle={{ padding: 10, paddingTop: 90, paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <Card title={item.title} location={item.location} time={item.time} image={item.image} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default Grid;