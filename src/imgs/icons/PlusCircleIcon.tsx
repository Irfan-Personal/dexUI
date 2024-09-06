import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const PlusCircleIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5845CC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V16" stroke="#5845CC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12H16" stroke="#5845CC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
