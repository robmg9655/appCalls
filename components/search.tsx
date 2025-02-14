import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import {useDebouncedCallback} from "use-debounce";

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    const debounceSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), 500);

    const handleSearch = (text: string) => {
        setSearch(text);
        debounceSearch(text);
    }

    return (
        <View className="flex flex-row items-center justify-between rounded-3xl border-2 border-accent-100 bg-black-100 mt-5 py-1 px-3">
            <View className="flex-1 flex flex-row items-center justify-start z-50">
                <Image source={icons.searchIcon} className='size-4' style={{ tintColor: 'white' }} />
                <TextInput 
                    value={search}
                    onChangeText={handleSearch}
                    placeholder="Buscar feines..."
                    className="text-sm font-NimbusSanL text-accent-100 ml-2 flex-1"
                />
            </View>
            <TouchableOpacity>
                <Image source={icons.filterIcon} className='size-5' style={{ tintColor: 'white' }}/>
            </TouchableOpacity>
        </View>
    );
}

export default Search;