import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Layout } from '../../constants';

interface ProgressBarProps {
  progress: number; // 0-100
  height?: number;
  color?: string;
  backgroundColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = Layout.dimensions.progressBarHeight,
  color = Colors.primary,
  backgroundColor = 'rgba(255, 255, 255, 0.3)',
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      <View
        style={[
          styles.progress,
          {
            width: `${clampedProgress}%`,
            height,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progress: {
    borderRadius: 999,
  },
});
