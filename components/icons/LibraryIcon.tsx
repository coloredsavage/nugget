import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

interface LibraryIconProps {
  size?: number;
  color?: string;
}

export const LibraryIcon: React.FC<LibraryIconProps> = ({ size = 43, color = '#535256' }) => {
  return (
    <Svg width={size} height={size * (26 / 43)} viewBox="0 0 43 26" fill="none">
      <G clipPath="url(#clip0_347_84)">
        <Path
          d="M17.5248 2.3501C16.8575 2.3501 16.3165 2.99928 16.3165 3.8001C16.3165 4.60091 16.8575 5.2501 17.5248 5.2501H24.7748C25.4422 5.2501 25.9832 4.60091 25.9832 3.8001C25.9832 2.99928 25.4422 2.3501 24.7748 2.3501H17.5248Z"
          fill={color}
        />
        <Path
          d="M13.8998 8.1501C13.8998 7.34928 14.4408 6.7001 15.1082 6.7001H27.1915C27.8588 6.7001 28.3998 7.34928 28.3998 8.1501C28.3998 8.95091 27.8588 9.6001 27.1915 9.6001H15.1082C14.4408 9.6001 13.8998 8.95091 13.8998 8.1501Z"
          fill={color}
        />
        <Path
          d="M11.4832 13.9501C11.4832 12.3485 12.5651 11.0501 13.8998 11.0501H28.3998C29.7345 11.0501 30.8165 12.3485 30.8165 13.9501V19.7501C30.8165 21.3517 29.7345 22.6501 28.3998 22.6501H13.8998C12.5651 22.6501 11.4832 21.3517 11.4832 19.7501V13.9501Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_347_84">
          <Rect width="28.15" height="25.0222" fill="white" transform="translate(7.42505)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
