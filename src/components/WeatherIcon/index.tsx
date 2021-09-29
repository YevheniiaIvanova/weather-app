type ImageProps = {
  icon: string;
};

const WeatherIcon: React.FC<ImageProps> = ({ icon }) => {
  return (
    <div className={'icon'}>
      <img
        data-testid="weather-image"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherIcon;
