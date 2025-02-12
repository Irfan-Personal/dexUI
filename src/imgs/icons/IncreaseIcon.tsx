import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const IncreaseIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.5 3L6.75 7.75L4.25 5.25L0.5 9" stroke="#459A33" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 3H11.5V6" stroke="#459A33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
