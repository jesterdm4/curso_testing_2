import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SumaryOrder from './SumaryOrder';

test("checking_if_texts_and_buttons/inputs_exist", () => {
  render(<SumaryOrder />);

    //check if form its in the component
    const form = screen.getByTestId('form-1');
    expect(form).toBeInTheDocument();

    const h11 = screen.getByText('Order sumary');
    expect(h11).toBeInTheDocument();

    const h21 = screen.getByText('Scoops $6.00');
    expect(h21).toBeInTheDocument();

    const row1 = screen.getByTestId('row-1');
    expect(row1).toBeInTheDocument();

    const radio1 = screen.getByTestId('radio-1');
    expect(radio1).toBeInTheDocument();    

    const p1 = screen.getByText('Vanilla');
    expect(p1).toBeInTheDocument();



    const h22 = screen.getByText('Toppings $4.50');
    expect(h22).toBeInTheDocument();

    const row2 = screen.getByTestId('row-2');
    expect(row2).toBeInTheDocument();

    const radio2 = screen.getByTestId('radio-2');
    expect(radio2).toBeInTheDocument();    

    const p2 = screen.getByText('M&Ms');
    expect(p2).toBeInTheDocument();

    const radio3 = screen.getByTestId('radio-3');
    expect(radio3).toBeInTheDocument();    

    const p3 = screen.getByText('Hot fudge');
    expect(p3).toBeInTheDocument();

    const radio4 = screen.getByTestId('radio-4');
    expect(radio4).toBeInTheDocument();    

    const p4 = screen.getByText('Gummy bears');
    expect(p4).toBeInTheDocument();



    const h23 = screen.getByText('Total:');
    expect(h23).toBeInTheDocument();



    const column1 = screen.getByTestId('column-1');
    expect(column1).toBeInTheDocument();

    const row3 = screen.getByTestId('row-3');
    expect(row3).toBeInTheDocument();

    const checkbox1 = screen.getByTestId('checkbox-1');
    expect(checkbox1).toBeInTheDocument();

    const p5 = screen.getByTestId('p-5');
    expect(p5).toBeInTheDocument();

    const a1 = screen.getByText('terms and conditions');
    expect(a1).toBeInTheDocument();

    const button1 = screen.getByTestId('button-1');
    expect(button1).toBeInTheDocument();
});

test('disable combo checkbox/button', async ()=> {

    const user = userEvent.setup();

    render(<SumaryOrder />);
    
    // check that the button starts disabled 
    const button1 = screen.getByTestId('button-1');
    expect(button1).not.toBeEnabled();
  
    //check taht the checkbox starts unchecked
    const checkbox1 = screen.getByTestId('checkbox-1');
    expect(checkbox1).not.toBeChecked();
  
    //click checkBox
    await user.click(checkbox1);
  
    //check taht the checkbox is checked
    expect(checkbox1).toBeChecked();
  
    //check that the button its unabled
    expect(button1).toBeDisabled();
  
    //click checkBox
    await user.click(checkbox1);
  
    //check taht the checkbox its not checked
    expect(checkbox1).not.toBeChecked();
  
    //check that the button its not unabled
    expect(button1).not.toBeEnabled();
});

test ("popover respond to hoover?", async ()=> {
  const user = userEvent.setup();

  render(<SumaryOrder />);
  
  //probar que el popup inicia invisible
  const nullPopover = screen.queryByText(/el helado es joda, no te hagas iluciones, equis de/i);
  expect(nullPopover).not.toBeInTheDocument();

  //texto aparece al hoovear
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  await user.hover(termsAndConditions);
  const popup = screen.getByText(/el helado es joda, no te hagas iluciones, equis de/i);
  expect(popup).toBeInTheDocument();

  //texto desaparece al dejar de hoovear
  const noPopUp = screen.getByText(/terms and conditions/i)
  await user.unhover(noPopUp);
  screen.queryByText(/el helado es joda, no te hagas iluciones, equis de/i);
  expect(nullPopover).not.toBeInTheDocument();
});