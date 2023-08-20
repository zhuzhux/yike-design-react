/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const WalletFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'wallet-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M947.2 76.8v281.6h-384a25.6 25.6 0 0 0-25.42 22.6l-.18 3v256a25.6 25.6 0 0 0 25.6 25.6h384v281.6H76.8V76.8h870.4zm0 348.16v174.08H604.16V424.96H947.2zM704 473.6a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default WalletFilled;
