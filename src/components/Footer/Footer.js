import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.Credits}>
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
    </div>
  );
};
