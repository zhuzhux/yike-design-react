/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ClothesOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'clothes-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M384.64 76.8a128 128 0 1 0 254.72 0H972.8v384H819.2v486.4H204.8V460.8H51.2v-384h333.44zm321.92 76.77-.97 3.08a204.88 204.88 0 0 1-387.18 0l-1-3.08-189.41.03V384h153.6v486.4h460.8V384H896V153.6l-189.44-.03z" />
          </svg>
        ),
      }}
    />
  );
});

export default ClothesOutlined;
