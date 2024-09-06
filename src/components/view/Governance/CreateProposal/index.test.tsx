import React from 'react';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { CreateProposalView, ICreateProposalViewProps } from './index';
import { lightTheme } from 'styles/theme';

function renderComponent(props: ICreateProposalViewProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <CreateProposalView {...props} />
    </ThemeProvider>
  );
}

describe('CreateProposalView', () => {
  const mockProps: ICreateProposalViewProps = {
    pools: [],
    onSubmit: jest.fn(),
    onCloseProposalSubmitted: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });
});
