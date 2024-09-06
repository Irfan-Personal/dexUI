import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const PieChartIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_581_45332)">
        <path d="M17.6766 13.2417C17.1465 14.4955 16.3173 15.6002 15.2615 16.4595C14.2058 17.3187 12.9556 17.9063 11.6203 18.1707C10.2851 18.4352 8.90532 18.3685 7.60176 17.9766C6.2982 17.5846 5.11049 16.8793 4.14249 15.9223C3.17448 14.9653 2.45565 13.7857 2.04883 12.4867C1.64202 11.1877 1.55961 9.8088 1.8088 8.47059C2.058 7.13238 2.63122 5.87559 3.47834 4.81009C4.32547 3.74459 5.42071 2.90283 6.66831 2.3584" stroke="#3D3D3D" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3333 9.99984C18.3333 8.90549 18.1178 7.82185 17.699 6.81081C17.2802 5.79976 16.6664 4.8811 15.8926 4.10728C15.1187 3.33346 14.2001 2.71963 13.189 2.30084C12.178 1.88205 11.0943 1.6665 10 1.6665V9.99984H18.3333Z" stroke="#3D3D3D" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_581_45332">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
