import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, G, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend, FeMorphology } from 'react-native-svg';
import { Colors, Layout } from '../../constants';

interface AddIconProps {
  size?: number;
}

export const AddIcon: React.FC<AddIconProps> = ({ size = 29.5 }) => {
  // For React Native, we'll use View shadow props instead of SVG filters
  return (
    <View style={[styles.container, Layout.shadows.addButton]}>
      <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
        <Rect width={size} height={size} rx={size / 2} fill={Colors.primary} />
        {/* Horizontal line */}
        <Rect x="9.5" y="14.2" width="11" height="1.6" rx="0.8" fill={Colors.textLight} />
        {/* Vertical line */}
        <Rect x="14.2" y="9.5" width="1.6" height="11" rx="0.8" fill={Colors.textLight} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
  },
});
