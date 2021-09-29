import { useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/WeatherCard';

const WeatherPage: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  return (
    <div className="page">
      <Header />
      <div className="container">
        <SearchBar setLocation={setLocation} />
        <WeatherCard cityName={location} />
      </div>
      <Footer />
    </div>
  );
};

export default WeatherPage;
