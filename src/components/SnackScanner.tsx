import React, { useCallback } from 'react';
import * as BarCodeScanner from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Paragraph, Button, Caption } from 'react-native-paper';

import { layoutStyle, paragraphStyle, captionStyle, linkStyle } from '../providers/Theme';

type Props = {
  onSnackUrl: (snackUrl: string) => void;
};

export function SnackScanner({ onSnackUrl }: Props) {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const onSnackOpen = useCallback(() => Linking.openURL('https://snack.expo.dev'), []);
  const onCameraBarCode = useCallback(({ data: url }: BarCodeScanner.BarCodeScannerResult) => {
    // Validation can be better, including a message like "Seems like you scanned a beer bottle".
    // But, this is just to make sure we don't load anything random
    if (url.includes('exp.host')) {
      onSnackUrl(url);
    }
  }, [onSnackUrl]);

  if (!permission?.granted) {
    return (
      <View style={[layoutStyle, { marginHorizontal: 32 }]}>
        <Paragraph style={paragraphStyle}>We need permission to use your camera</Paragraph>
        <Caption style={captionStyle}>
          Only then we would be able to scan the QR code you get on{' '}
          <Text style={linkStyle} onPress={onSnackOpen}>snack.expo.dev</Text>
        </Caption>
        <Button onPress={requestPermission}>Grant permission</Button>
      </View>
    );
  }
  
  return (
    <View style={layoutStyle}>
      <Camera
        style={{ width: 100, height: 100 }}
        onBarCodeScanned={onCameraBarCode}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      />
    </View>
  );
}
