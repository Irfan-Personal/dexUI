interface IProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void;
}

export const LightIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 23.154L1.698 21.456L2.544 22.302L0.846 24H0V23.154ZM0 0.84L1.698 2.538L2.544 1.692L0.846 0H0V0.846V0.84ZM23.154 24L21.456 22.302L22.302 21.456L24 23.154V24H23.154ZM24 0.846L22.302 2.544L21.456 1.698L23.154 0H24V0.846ZM12 11.16L13.698 9.462L14.544 10.308L12.846 12L14.544 13.698L13.698 14.544L12 12.846L10.302 14.544L9.456 13.698L11.154 12L9.456 10.302L10.302 9.456L12 11.154V11.16Z" fill="#C2C2EF" />
    </svg>
  );
};
