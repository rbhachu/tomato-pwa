import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.text(/tomato/i);
  //expect(h1Element).toBeInTheDocument();
  expect(h1Element.find('h1').text()).toEqual('h1');
});
