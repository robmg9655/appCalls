import { View, Text} from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Text className='font-bold my-10 font-NimbusSanL text-3xl'>Calls Forestal!!!!!!!</Text>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">Property</Link>
      </View>
  );
}