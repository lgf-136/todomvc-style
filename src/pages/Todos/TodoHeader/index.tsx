import styles from './index.module.css';

export default () => {
  return (
    <div className={styles.todoHeader}>
      <input type="checkbox" className={styles.todoHeaderInput} />
      <input type="text" className={styles.todoHeaderInput} />
      <button className={styles.todoHeaderButton}>Search</button>
    </div>
  );
};
