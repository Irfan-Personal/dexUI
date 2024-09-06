import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const FailureIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="40" cy="40" r="37" stroke="#FF4557" strokeOpacity="0.6" strokeWidth="2" />
      <path d="M52 28L28 52" stroke="#FF4557" strokeOpacity="0.6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 28L52 52" stroke="#FF4557" strokeOpacity="0.6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
