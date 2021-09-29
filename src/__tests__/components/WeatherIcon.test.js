import { render, screen } from '@testing-library/react';
import WeatherIcon from '../../components/WeatherIcon';

test('uses correct src', () => {
  render(<WeatherIcon icon="icon-name" />);
  expect(screen.getByTestId('weather-image')).toHaveAttribute(
    'src',
    'http://openweathermap.org/img/wn/icon-name@2x.png'
  );
});
