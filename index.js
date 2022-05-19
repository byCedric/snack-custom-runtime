import 'expo-dev-client';

import { registerRootComponent } from 'expo';
import { registerSnackAssetSourceTransformer } from 'snack-runtime';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// We need this to resolve Snack assets from a different cdn
registerSnackAssetSourceTransformer();
