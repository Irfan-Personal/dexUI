import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const LoaderIcon: React.FC<IProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_548_46878)">
        <g clipPath="url(#clip1_548_46878)">
          <path d="M10 1.66699V5.00033" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 15V18.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.10742 4.1084L6.46576 6.46673" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5332 13.5332L15.8915 15.8915" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.66602 10H4.99935" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 10H18.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.10742 15.8915L6.46576 13.5332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5332 6.46673L15.8915 4.1084" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_548_46878">
          <rect width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_548_46878">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
