import { MouseEventHandler } from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const LinkIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.99935 4.66699H11.9993C12.4371 4.66699 12.8705 4.75321 13.275 4.92073C13.6794 5.08824 14.0468 5.33377 14.3564 5.6433C14.6659 5.95283 14.9114 6.3203 15.0789 6.72471C15.2465 7.12913 15.3327 7.56259 15.3327 8.00033C15.3327 8.43806 15.2465 8.87152 15.0789 9.27594C14.9114 9.68036 14.6659 10.0478 14.3564 10.3573C14.0468 10.6669 13.6794 10.9124 13.275 11.0799C12.8705 11.2474 12.4371 11.3337 11.9993 11.3337H9.99935M5.99935 11.3337H3.99935C3.56161 11.3337 3.12816 11.2474 2.72374 11.0799C2.31932 10.9124 1.95186 10.6669 1.64233 10.3573C1.01721 9.73223 0.666016 8.88438 0.666016 8.00033C0.666016 7.11627 1.01721 6.26842 1.64233 5.6433C2.26745 5.01818 3.11529 4.66699 3.99935 4.66699H5.99935" stroke="#6953F4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33398 8H10.6673" stroke="#6953F4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg >
  );
};
