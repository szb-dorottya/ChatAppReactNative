import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullScreenViewer from 'components/common/FullScreenViewer';
import React from 'react';
import {Platform} from 'react-native';
import ChatRoomScreen from 'screens/chat/ChatRoomScreen';
import UsersScreen from 'screens/chat/UsersScreen';
import HomeScreen from 'screens/home/HomeScreen';
import ProfileScreen from 'screens/profile/ProfileScreen';
import SplashScreen from 'screens/splash/SplashScreen';
import Theme from 'theme/Theme';
import {Translations} from 'translations/Translations';
import {
  CreateNativeStackNavigatorType,
  MainNavigationParamList,
} from 'types/NavigationTypes';

/**
 * @type {CreateNativeStackNavigatorType<MainNavigationParamList>}
 */
const Stack = createNativeStackNavigator();

const MainStackNavigation = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="Auth"
      component={AuthNavigation}
      options={{headerShown: false}}
    /> */}
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={() => ({headerShown: false})}
    />
    <Stack.Screen
      name="Home"
      initialParams={{title: 'Home'}}
      component={HomeScreen}
      options={() => ({title: Translations.strings.homeScreenTitle()})}
    />
    <Stack.Screen
      name="ChatScreen"
      component={ChatRoomScreen}
      options={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Theme.colors.primary : undefined,
        },
        headerBackTitleVisible: false,
        headerTintColor:
          Platform.OS === 'android' ? Theme.colors.white : Theme.colors.black,
      }}
    />
    <Stack.Screen
      options={{
        presentation: 'fullScreenModal',
        headerShown: false,
      }}
      component={FullScreenViewer}
      name="FullScreen"
    />
    <Stack.Screen
      name="UsersScreen"
      component={UsersScreen}
      options={{
        headerBackTitleVisible: false,
        title: Translations.strings.users(),
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerBackTitleVisible: false,
        title: Translations.strings.profile(),
      }}
    />
  </Stack.Navigator>
);

export default MainStackNavigation;
