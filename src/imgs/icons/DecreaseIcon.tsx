import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const DecreaseIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.5 9L6.75 4.25L4.25 6.75L0.5 3" stroke="#FF4557" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 9H11.5V6" stroke="#FF4557" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
