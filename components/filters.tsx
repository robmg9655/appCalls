import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";


const Filter = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3 mb-2">
            {categories.map((item, index) => (
                <TouchableOpacity onPress={() => handleCategoryPress(item.category)} className={`flex flex-col items-start mx-4 mr-4 px-4 py-2 rounded-full ${selectedCategory == item.category ? 'bg-primary-100' : 'bg-black-100 border-2 border-accent-100'}`} key={index}>
                    <Text className="text-lg text-accent-100">{item.title}</Text>
                </TouchableOpacity>
            ))} 
        </ScrollView>
    );
}

export default Filter;