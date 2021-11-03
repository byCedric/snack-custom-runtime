import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Caption, Paragraph } from 'react-native-paper';

import { iconStyle, layoutStyle, paragraphStyle } from '../providers/Theme';

export function ExampleScreen() {
  return (
    <View style={layoutStyle}>
      <Image source={require('../assets/nyan-cat.gif')} style={{ marginBottom: 32 }} />
      <Paragraph style={paragraphStyle}>
        These buttons can link to built-in screens.
      </Paragraph>
      <Caption>
        Now they are just stubs
      </Caption>
      <View style={{ marginTop: 32 }}>
        <Button>Voice AI</Button>
        <Button>Vision AI</Button>
        <Button>Dog or Muffin AI</Button>
      </View>
    </View>
  );
}
