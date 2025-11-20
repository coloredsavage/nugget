import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowIconProps {
  size?: number;
  color?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ size = 6, color = '#A9A9A9' }) => {
  return (
    <Svg width={size} height={size * (10 / 6)} viewBox="0 0 6 10" fill="none">
      <Path
        d="M0.722168 0.722168L4.78467 4.78467L0.722167 8.84717"
        stroke={color}
        strokeWidth="1.44444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
