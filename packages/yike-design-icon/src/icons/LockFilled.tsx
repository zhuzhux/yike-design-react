/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const LockFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'lock-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 25.6c169.65 0 307.2 137.55 307.2 307.2V384h128v614.4H76.8V384h128v-51.2c0-169.65 137.55-307.2 307.2-307.2zm38.4 537.6h-76.8V768h76.8V563.2zM512 102.4a230.4 230.4 0 0 0-230.4 230.4V384h460.8v-51.2a230.4 230.4 0 0 0-223.62-230.3l-6.78-.1z" />
          </svg>
        ),
      }}
    />
  );
});

export default LockFilled;
