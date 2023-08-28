import { PropsWithChildren } from 'react';
import { type SnackConfig, SnackRuntimeProvider, defaultSnackModules } from 'snack-runtime';

const config: SnackConfig = {
  modules: {
    ...defaultSnackModules,
    // Modules bundled with this app, and available to all Snacks
    'react-native-blurhash': require('react-native-blurhash'),
    'react-native-paper': require('react-native-paper'),
  },
};

type Props = PropsWithChildren<{}>;

export function SnackProvider({ children }: Props) {
  return (
    <SnackRuntimeProvider config={config}>
      {children}
    </SnackRuntimeProvider>
  );
}
