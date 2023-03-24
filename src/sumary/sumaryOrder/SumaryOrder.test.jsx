import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SumaryOrder from './SumaryOrder';

test('SumaryOrder component', async () => {
  render(<SumaryOrder />);
  
  // Verificar que los elementos se renderizan correctamente
  expect(screen.getByText('Order sumary')).toBeInTheDocument();
  expect(screen.getByText('Scoops')).toBeInTheDocument();
  expect(screen.getByText('Toppings')).toBeInTheDocument();
  expect(screen.getByText('Total: 0')).toBeInTheDocument();
  expect(screen.getByTestId('p-5')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'terms and conditions' })).toHaveAttribute('href', 'www.facebook.com');
  expect(screen.getByRole('button', { name: 'Confirm order' })).toBeInTheDocument();
  
  // Verificar que el botón está deshabilitado al principio
  expect(screen.getByRole('button', { name: 'Confirm order' })).toBeDisabled();
  
  // Verificar que el botón se habilita al hacer clic en el checkbox
  fireEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: 'Confirm order' })).not.toBeDisabled();

  // Verificar que los componentes OrderEntry se renderizan correctamente
  expect(screen.getByText('Chocolate $6')).toBeInTheDocument();
  expect(screen.getByText('Vanilla $3')).toBeInTheDocument();
  expect(screen.getByText('Mint drop $5')).toBeInTheDocument();
  expect(screen.getByText('Gummy bears $0.5')).toBeInTheDocument();
  expect(screen.getByText('Cherries $1')).toBeInTheDocument();
  expect(screen.getByText('M&Ms $2')).toBeInTheDocument();
  expect(screen.getByText('Hot fudge $1')).toBeInTheDocument();


  //Hay errores de aqui para abajo-----------------------------------------------------------
  // Verificar que el total se actualiza al hacer clic en los componentes OrderEntry
  userEvent.click(screen.getByText('Chocolate $6'));
  expect(screen.getByText('Total: 6')).toBeInTheDocument();

  userEvent.click(screen.getByText('Gummy bears $0.5'));
  expect(screen.getByText('Total: 6.5')).toBeInTheDocument();
});