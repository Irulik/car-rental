import React from 'react';
import { HeartIconWrapper } from './HeartIcon.styled';

interface Props {
  id: string;
}

export const HeartIcon = ({ id }: Props) => {
  switch (id) {
    case 'svg':
      return (
        <HeartIconWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
            <g id="surface1">
              <path fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M 15.626953 2.453125 C 15.240234 2.078125 14.800781 1.765625 14.291016 1.5625 C 13.798828 1.359375 13.253906 1.25 12.708984 1.25 C 12.164062 1.25 11.636719 1.359375 11.126953 1.5625 C 10.634766 1.765625 10.177734 2.078125 9.791016 2.453125 L 9 3.25 L 8.208984 2.453125 C 7.435547 1.6875 6.380859 1.25 5.291016 1.25 C 4.201172 1.25 3.146484 1.6875 2.373047 2.453125 C 1.599609 3.234375 1.160156 4.28125 1.160156 5.375 C 1.160156 6.46875 1.599609 7.515625 2.373047 8.296875 L 3.164062 9.09375 L 9 14.921875 L 14.835938 9.09375 L 15.626953 8.296875 C 16.013672 7.90625 16.3125 7.453125 16.523438 6.953125 C 16.734375 6.453125 16.839844 5.921875 16.839844 5.375 C 16.839844 4.828125 16.734375 4.296875 16.523438 3.796875 C 16.3125 3.296875 16.013672 2.84375 15.626953 2.453125 Z M 15.626953 2.453125 " transform="matrix(0.75,0,0,0.75,0,0)" />
            </g>
          </svg>
        </HeartIconWrapper>
      );

    default:
      return <svg></svg>;
  }
};