import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { PropsWithChildren } from 'react';

import { ExampleScreen } from '../screens/Example';
import { HomeScreen } from '../screens/Home';
import { ScannerScreen } from '../screens/Scanner';
import { SnackScreen } from '../screens/Snack';
import { RootStackParamList } from '../types/navigation';

type Props = PropsWithChildren<{}>;

const RootStack = createStackNavigator<RootStackParamList>();

export function NavigationProvider({ children }: Props) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Example" component={ExampleScreen} />
        <RootStack.Screen name="Scanner" component={ScannerScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Snack" component={SnackScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
      {children}
    </NavigationContainer>
  );
}
