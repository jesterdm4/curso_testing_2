import { render, screen, fireEvent } from '@testing-library/react';
import SumaryOrder from './SumaryOrder';

test("checking-form-exists", () => {
  render(<SumaryOrder />);

  //check if the text of the button say change to blue
  const colorButton =  screen.getByText('change to mid night blue')

  //check if the background color to be red
  expect(colorButton).toHaveStyle({'background-color': 'mediumVioletRed'});

  //clic button
  fireEvent.click(colorButton);

  //expect the background color turn blue
  expect(colorButton).toHaveStyle({'background-color': 'midNightBlue'});

  //expect the button text to be 'change to red'
  expect(colorButton).toHaveTextContent('change to medium violet red')
});