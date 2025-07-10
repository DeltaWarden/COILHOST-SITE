import styles from "./MainPage.module.css";
import { useEffect, useState } from "react";
import bgImage from "../../../assets/background.jpeg";
import {
  FaUsers, FaProjectDiagram, FaClock, FaShieldAlt, FaRocket,
  FaHeadset, FaCogs, FaTachometerAlt
} from "react-icons/fa";

interface Tariff {
  id: number;
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  description: string;
  price: number;
  region: string;
}
const MainPage = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/servers/tariffs/")
      .then((res) => res.json())
      .then((data: Tariff[]) => setTariffs(data))
      .catch((err) => console.error("Ошибка при загрузке тарифов:", err));
  }, []);
  return (
    <div className={styles.mainPage}>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.heroContent}>
          <h1>
            <span>COILHOST</span> - Лучший хостинг для твоего проекта!
          </h1>
          <p>
            Топовый выбор для хостинга игровых серверов, мощное железо и лучшая защита от DDoS.
          </p>
          <a href="#catalog" className={styles.heroButton}>
            Перейти к тарифам
          </a>
        </div>
      </section>
      <section className={styles.stats}>
        <div className={styles.stat}>
          <FaUsers className={styles.icon} />
          <h3>500+</h3>
          <p>Клиентов</p>
        </div>
        <div className={styles.stat}>
          <FaProjectDiagram className={styles.icon} />
          <h3>1200+</h3>
          <p>Проектов</p>
        </div>
        <div className={styles.stat}>
          <FaClock className={styles.icon} />
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </section>
      <section className={styles.whyUs}>
        <h2>Почему выбирают нас?</h2>
        <div className={styles.reasons}>
          <div className={styles.reason}>
            <FaShieldAlt className={styles.reasonIcon} />
            <h4>Надёжность</h4>
            <p>Гарантированная стабильность и защита от DDoS.</p>
          </div>
          <div className={styles.reason}>
            <FaRocket className={styles.reasonIcon} />
            <h4>Скорость</h4>
            <p>Молниеносный запуск и минимальные задержки.</p>
          </div>
          <div className={styles.reason}>
            <FaHeadset className={styles.reasonIcon} />
            <h4>Поддержка 24/7</h4>
            <p>Отвечаем быстро и помогаем решать любые вопросы.</p>
          </div>
          <div className={styles.reason}>
            <FaCogs className={styles.reasonIcon} />
            <h4>Гибкая настройка</h4>
            <p>Полный контроль и кастомизация под ваши нужды.</p>
          </div>
          <div className={styles.reason}>
            <FaTachometerAlt className={styles.reasonIcon} />
            <h4>Высокая производительность</h4>
            <p>Мощные сервера на NVMe SSD и последних CPU.</p>
          </div>
          <div className={styles.reason}>
            <FaUsers className={styles.reasonIcon} />
            <h4>Сообщество</h4>
            <p>Тысячи довольных клиентов и отзывов.</p>
          </div>
        </div>
      </section>
      <section className={styles.catalog}>
        <h2>Наши тарифы</h2>
        <div className={styles.serverGrid}>
          {tariffs.map((tariff) => (
            <div key={tariff.id} className={styles.serverCard}>
              <h3>{tariff.name}</h3>
              <p><b>CPU:</b> {tariff.cpu}</p>
              <p><b>RAM:</b> {tariff.ram}</p>
              <p><b>Storage:</b> {tariff.storage}</p>
              <p>{tariff.description}</p>
              <span className={styles.price}>{tariff.price}₽ / мес</span>
              <p><b>Регион:</b> {tariff.region}</p>
              <a href="#order" className={styles.orderButton}>Заказать</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
