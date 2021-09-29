import Axios from 'axios';

import API_KEY from '../constants/api-key';
import { Weather } from '../types';

class WeatherApi {
  private readonly baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

  async getWeather(location = 'Dnipro'): Promise<Weather> {
    const result = await Axios.get(
      `${this.baseUrl}?q=${location}&APPID=${API_KEY}&units=metric`
    );
    this.validateRequest(result);

    return {
      location: result.data['name'],
      feelsLike: result.data.main['feels_like'],
      temp: result.data.main['temp'],
      temp_min: result.data.main['temp_min'],
      temp_max: result.data.main['temp_max'],
      description: result.data.weather[0]['description'],
      icon: result.data.weather[0]['icon'],
      wind: result.data.wind['speed'],
      country: result.data.sys['country'],
    };
  }

  validateRequest(result: { status: number }) {
    if (result.status < 200 && result.status > 299) {
      throw new Error(`Could not get data, status ${result.status}`);
    }
  }

  // async getIconWeather(icon: string) {
  //   const iconUrl = `http://openweathermap.org/img/wn/04d@2x.png`;
  //   return await Axios.get(iconUrl);
  // }
}

export default new WeatherApi();
