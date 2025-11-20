import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

interface HomeIconProps {
  size?: number;
  color?: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ size = 35, color = '#FFF8F2' }) => {
  const scale = size / 35;

  return (
    <Svg width={size} height={size * (26 / 35)} viewBox="0 0 35 26" fill="none">
      <G clipPath="url(#clip0_347_79)">
        <Path
          d="M18.9191 1.86208C18.4114 1.3544 17.5883 1.3544 17.0806 1.86208L7.98061 10.9621C7.47293 11.4698 7.47293 12.2929 7.98061 12.8006C8.4883 13.3082 9.31141 13.3082 9.81909 12.8006L10.1999 12.4198V20.9813C10.1999 21.6993 10.7819 22.2813 11.4999 22.2813H14.0999C14.8178 22.2813 15.3999 21.6993 15.3999 20.9813V18.3813C15.3999 17.6634 15.9819 17.0813 16.6999 17.0813H19.2999C20.0178 17.0813 20.5999 17.6634 20.5999 18.3813V20.9813C20.5999 21.6993 21.1819 22.2813 21.8999 22.2813H24.4999C25.2178 22.2813 25.7999 21.6993 25.7999 20.9813V12.4198L26.1806 12.8006C26.6883 13.3082 27.5114 13.3082 28.0191 12.8006C28.5268 12.2929 28.5268 11.4698 28.0191 10.9621L18.9191 1.86208Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_347_79">
          <Rect width="28.15" height="25.0222" fill="white" transform="translate(3.375)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
