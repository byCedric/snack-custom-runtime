import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Paragraph } from 'react-native-paper';
import { SnackRuntime } from 'snack-runtime';

import { iconStyle, paragraphStyle } from '../providers/Theme';
import { RootStackNavigation, SnackRoute } from '../types/navigation';

export function SnackScreen() {
  // React Navigation renders all screens in advance,
  // we only want to render the Snack when it needs to be rendered.
  const isFocused = useIsFocused();
  const { goBack } = useNavigation<RootStackNavigation>();
  const { params = {} } = useRoute<SnackRoute>();

  return (
    <View style={{ flex: 1 }}>
      {(isFocused && params.snackUrl) && <SnackRuntime snackUrl={params.snackUrl} />}
      {(isFocused && !params.snackUrl) && (
        <>
          <Text style={iconStyle}>🔗</Text>
          <Paragraph style={paragraphStyle}>
            Snack URL is required to show a Snack
          </Paragraph>
          <Button onPress={goBack}>Go back</Button>
        </>
      )}
    </View>
  );
}
