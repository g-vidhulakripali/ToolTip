import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToolTip from './ToolTip';

describe('<ToolTip />', () => {
  test('it should mount', () => {
    render(<ToolTip />);
    
    const toolTip = screen.getByTestId('ToolTip');

    expect(toolTip).toBeInTheDocument();
  });
});