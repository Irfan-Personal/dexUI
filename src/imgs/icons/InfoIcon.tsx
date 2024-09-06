interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void;
}

export const InfoIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1371_17065)">
        <g clipPath="url(#clip1_1371_17065)">
          <path d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z" stroke="#A8A5BE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 13.3333V10" stroke="#A8A5BE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 6.66602H10.0083" stroke="#A8A5BE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1371_17065">
          <rect width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1_1371_17065">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
