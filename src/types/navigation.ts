import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Example: undefined;
  Home: undefined;
  Snack?: { snackUrl?: string };
  Scanner: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

export type SnackRoute = RouteProp<RootStackParamList, 'Snack'>;
