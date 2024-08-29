import styles from "./PlayerVsDealer.module.scss";

const PlayerCard = ({ name, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p>3</p>
    </div>
  );
};

export default PlayerCard;
