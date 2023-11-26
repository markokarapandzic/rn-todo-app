import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Startup } from '../screens';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { useTheme, useThemeMode } from '@rneui/themed';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const {
    theme: { styles, colors },
  } = useTheme();
  const navigationRef = useNavigationContainerRef();
  const { mode } = useThemeMode();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[styles.fill, { backgroundColor: colors.background }]}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
