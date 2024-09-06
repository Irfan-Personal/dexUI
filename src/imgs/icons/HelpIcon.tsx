import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const HelpIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5_93111)">
        <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.05859 6.00038C6.21533 5.55482 6.5247 5.17912 6.9319 4.9398C7.3391 4.70049 7.81786 4.61301 8.28338 4.69285C8.7489 4.7727 9.17114 5.01473 9.47531 5.37606C9.77949 5.7374 9.94596 6.19473 9.94526 6.66705C9.94526 8.00038 7.94526 8.66705 7.94526 8.66705" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11.334H8.00708" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_5_93111">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg >
  );
};
