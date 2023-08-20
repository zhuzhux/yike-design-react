/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ReloadOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'reload-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 76.8c240.36 0 435.2 194.84 435.2 435.2a433.35 433.35 0 0 1-104.4 282.78l-94.18-193.1 100.56 32.07A357.17 357.17 0 0 0 870.4 512c0-197.94-160.46-358.4-358.4-358.4S153.6 314.06 153.6 512 314.06 870.4 512 870.4c91.4 0 174.8-34.2 238.1-90.52l34.74 71.2A433.38 433.38 0 0 1 512 947.2C271.64 947.2 76.8 752.36 76.8 512S271.64 76.8 512 76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default ReloadOutlined;
