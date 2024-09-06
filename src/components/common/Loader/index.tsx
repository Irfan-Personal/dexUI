import { LoaderIcon } from 'imgs/icons';

import { LoaderComponentStyle } from './index.style';

export const LoaderComponent: React.FC = () => {
  return (
    <LoaderComponentStyle className="loader-component">
      <LoaderIcon />
    </LoaderComponentStyle>
  );
};
