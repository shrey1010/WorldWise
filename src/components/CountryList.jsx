import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";


function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on cities on the map." />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.some((el) => el.country === city.country)) {
      acc.push({ country: city.country, emoji: city.emoji });
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
