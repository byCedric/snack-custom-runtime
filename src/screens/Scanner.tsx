import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as BarCodeScanner from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useCallback } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button, Caption, Paragraph } from 'react-native-paper';

import { captionStyle, iconStyle, layoutStyle, linkStyle, paragraphStyle } from '../providers/Theme';
import { RootStackNavigation } from '../types/navigation';

export function ScannerScreen() {
  // React Navigation renders all screens in advance, 
  // we only want to render the camera when it needs to be rendered.
  const isFocused = useIsFocused();
  const { navigate } = useNavigation<RootStackNavigation>();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const onSnackOpen = useCallback(() => Linking.openURL('https://snack.expo.dev'), []);
  const onCameraBarCode = useCallback(({ data: snackUrl }: BarCodeScanner.BarCodeScannerResult) => {
    // Validation can be better, including a message like "Seems like you scanned a beer bottle".
    // But, this is just to make sure we don't load anything random
    if (snackUrl.includes('exp.host')) {
      navigate('Snack', { snackUrl });
    }
  }, [navigate]);

  if (!permission?.granted) {
    return (
      <View style={[layoutStyle, { paddingHorizontal: 32 }]}>
        <Text style={iconStyle}>📷</Text>
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
    <View style={[layoutStyle, { justifyContent: 'flex-end' }]}>
      {isFocused && (
        <Camera
          style={StyleSheet.absoluteFill}
          onBarCodeScanned={onCameraBarCode}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
        />
      )}

      <Paragraph style={[paragraphStyle, { fontSize: 14, marginVertical: 64, color: '#ffffff' }]}>
        Go to <Text style={[linkStyle, { color: '#9c90e8' }]} onPress={onSnackOpen}>snack.expo.dev</Text> and scan the "My Device" QR code!
      </Paragraph>
    </View>
  );
}
