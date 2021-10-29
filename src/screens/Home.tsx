import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Paragraph, Button } from 'react-native-paper';

import { iconStyle, layoutStyle, paragraphStyle } from '../providers/Theme';
import { RootStackNavigation } from '../types/navigation';

export function HomeScreen() {
  const { navigate } = useNavigation<RootStackNavigation>();

  const onNavigateScanner = useCallback(() => navigate('Scanner'), [navigate]);
  const onNavigateExample = useCallback(() => navigate('Example'), [navigate]);

  return (
    <View style={layoutStyle}>
      <Text style={iconStyle}>👋</Text>
      <Paragraph style={paragraphStyle}>
        Welcome to this example app!
      </Paragraph>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={onNavigateExample}>Check Examples</Button>
        <Button onPress={onNavigateScanner}>Scan Snack QR</Button>
      </View>
    </View>
  );
}
