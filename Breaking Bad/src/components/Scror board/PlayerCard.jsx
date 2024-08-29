import styles from './PlayerVsDealer.module.css';

const PlayerCard = ({ name, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h2 className={styles.cardTitle}>{name}</h2>
    </div>
  );
};

export default PlayerCard;