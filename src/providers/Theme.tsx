import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider } from 'react-native-paper';

type Props = PropsWithChildren<{}>;

export function ThemeProvider({ children}: Props) {
  return (
    <Provider theme={DefaultTheme}>
      {children}
    </Provider>
  );
}

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 64,
    margin: 16,
  },
  paragraphStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionStyle: {
    fontSize: 16,
    lineHeight: 24,
  },
  emStyle: {
    textDecorationLine: 'underline',
  },
  linkStyle: {
    color: '#4630eb',
  },
});

export const layoutStyle = styles.layoutStyle;
export const iconStyle = styles.iconStyle;
export const paragraphStyle = styles.paragraphStyle;
export const captionStyle = styles.captionStyle;
export const linkStyle = styles.linkStyle;
