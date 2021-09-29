import { useCallback, useEffect, useState } from 'react';

import WeatherApi from '../../services/weather-api';
import { Weather } from '../../types';
import getCurrentDate from '../../utils/getCurrentDate';
import WeatherIcon from '../WeatherIcon';
import styles from './weather-card.module.scss';

type WeatherCardProps = {
  cityName: string;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    WeatherApi.getWeather('Dnipro').then((data) => {
      setWeatherData(data);
    });
  }, []);

  useEffect(() => {
    if (cityName) {
      WeatherApi.getWeather(cityName).then((data) => {
        setWeatherData(data);
      });
    }
  }, [cityName]);

  const currentDate = useCallback(() => {
    return getCurrentDate();
  }, []);

  if (weatherData === null) {
    return null;
  }

  const {
    location,
    description,
    wind,
    feelsLike,
    temp,
    temp_max,
    temp_min,
    country,
    icon,
  } = weatherData;

  return (
    <div className={styles['weather-card']}>
      <h2 className={styles.location}>
        {location} {country}
      </h2>
      <h3 className={styles.date}>{currentDate}</h3>
      <div className={styles.temperature}>{temp} &#8451;</div>
      <WeatherIcon icon={icon} />
      <div className={'description'}>{description}</div>
      <div className="">
        Max: {temp_max} &#8451; / Min: {temp_min} &#8451;
      </div>
      <div>Feels like {feelsLike} &#8451;</div>
      <div className="">Wind: {wind} m/s</div>
    </div>
  );
};

export default WeatherCard;
