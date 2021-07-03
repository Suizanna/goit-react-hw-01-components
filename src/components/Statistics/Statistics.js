import React from 'react';
import PropTypes from 'prop-types';
import RGB from './getRandomColor';
import styles from './statistical.module.css';


//Компонент должен создавать DOM элемент следующей структуры.Шаблон, который хочу рендерит
//Компонент должен принимать два пропа title и stats, заголовок и объект статистики.

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id} style={{ backgroundColor: `${RGB()}` }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

