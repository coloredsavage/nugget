import React from 'react';
import Svg, { Circle } from 'react-native-svg';

interface ThreeDotsIconProps {
  size?: number;
  color?: string;
}

export const ThreeDotsIcon: React.FC<ThreeDotsIconProps> = ({ size = 24, color = '#FFFFFF' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="5" r="2" fill={color} />
      <Circle cx="12" cy="12" r="2" fill={color} />
      <Circle cx="12" cy="19" r="2" fill={color} />
    </Svg>
  );
};
