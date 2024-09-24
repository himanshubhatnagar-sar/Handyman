import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/User/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GinieLocations from './src/User/component/Ginie/GinieLocations';
import PickupLocation from './src/User/component/Ginie/PickupLocation';
import Profile from './src/User/component/Profile/Profile';
import Signin from './src/Signin/Signin';
import Dashboard from './src/admin/Screens/Dashboard';
import AdminHome from './src/admin/Screens/AdminHome';
import Booking from './src/admin/Screens/Booking';
import Details from './src/admin/Component/Booking/Details';
import BookingService from './src/admin/Component/ServiceDetail/BookingService';
import AllService from './src/admin/Component/Service/AllService';
import ProviderList from './src/admin/Component/Provider/ProviderList';
import UpdateProvider from './src/admin/Component/Provider/UpdateProvider';
import Earning from './src/admin/Screens/Earning';
import JobReqList from './src/admin/Screens/JobReqList';
import JobDetail from './src/admin/Component/JobRequest/JobDetail';
import Users from './src/admin/Screens/Users';
import EditUser from './src/admin/Component/Users/EditUser';
import { LogBox } from 'react-native';
import CategoryList from './src/admin/Component/Category/CategoryList';
import AddCategory from './src/admin/Component/Category/AddCategory';
import UpdateCategory from './src/admin/Component/Category/UpdateCategory';
import AddService from './src/admin/Component/Service/AddService';
import AddProvider from './src/admin/Component/Provider/AddProvider';
import PendingProvider from './src/admin/Component/Provider/PendingProvider';
import ProviderType from './src/admin/Component/Provider/ProviderType';
import AddProviderType from './src/admin/Component/Provider/AddProviderType';
// import './gesture-handler';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="BookingDetails" component={Details} />
        <Stack.Screen name="BookingService" component={BookingService} />
        <Stack.Screen name="AllService" component={AllService} />
        <Stack.Screen name="ProviderList" component={ProviderList} />
        <Stack.Screen name="UpdateProvider" component={UpdateProvider} />
        <Stack.Screen name="Earning" component={Earning} />
        <Stack.Screen name="JobReqList" component={JobReqList} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="UpdateCategory" component={UpdateCategory} />
        <Stack.Screen name="AddService" component={AddService} />
        <Stack.Screen name="AddProvider" component={AddProvider} />
        <Stack.Screen name="PendingProvider" component={PendingProvider} />
        <Stack.Screen name="ProviderType" component={ProviderType} />
        <Stack.Screen name="AddProviderType" component={AddProviderType} />
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="GinieLocations" component={GinieLocations} />
        <Stack.Screen name="PickupLocation" component={PickupLocation} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})