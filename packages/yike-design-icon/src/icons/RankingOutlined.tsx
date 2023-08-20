/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const RankingOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'ranking-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M640 102.4v819.2H384V102.4h256zm-76.8 76.8H460.8v665.6h102.4V179.2zM307.2 512v409.6h-256V512h256zm-76.8 76.8H128v256h102.4v-256zm742.4-256v588.8h-256V332.8h256zM896 409.6H793.6v435.2H896V409.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default RankingOutlined;
