import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { Button, Caption, Paragraph } from 'react-native-paper';
import { createRuntimeUrl } from 'snack-runtime';

import { layoutStyle, paragraphStyle } from '../providers/Theme';
import { RootStackNavigation } from '../types/navigation';

export function ExampleScreen() {
  const { navigate } = useNavigation<RootStackNavigation>();

  const onDefaultSnack = useCallback(() => navigate('Snack', { snackUrl: createRuntimeUrl({ sdkVersion: '50.0.0', snack: '@bycedric/snack-example-default' }) }), [navigate]);
  const onBlurhashSnack = useCallback(() => navigate('Snack', { snackUrl: createRuntimeUrl({ sdkVersion: '50.0.0', snack: '@bycedric/snack-example-blurhash' }) }), [navigate]);

  return (
    <View style={layoutStyle}>
      <Image source={require('../assets/nyan-cat.gif')} style={{ marginBottom: 32 }} />
      <Paragraph style={paragraphStyle}>
        These buttons can link to built-in screens, or snacks
      </Paragraph>
      <Caption>
        The buttons below opens a snack without the website!
      </Caption>
      <View style={{ marginTop: 32 }}>
        <Button onPress={onDefaultSnack}>Open default snack</Button>
        <Button onPress={onBlurhashSnack}>Open Blurhash snack</Button>
      </View>
    </View>
  );
}
