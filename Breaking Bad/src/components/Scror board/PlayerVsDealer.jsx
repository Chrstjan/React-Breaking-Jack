import PlayerCard from './PlayerCard';
import styles from './PlayerVsDealer.module.css';
import img1 from '../../assets/game.jpg'

const PlayerVsDealer = () => {
  const players = [
    { name: 'Player', className: styles.playerCard },
    { name: 'Dealer', className: styles.dealerCard }
  ];

  return (
    <main className={styles.gameContainer}>
       <img src={img1} alt=""/>
      <h1 className={styles.gameTitle}>Player vs Dealer</h1>
      <section className={styles.cardsContainer}>
        {players.map((player, index) => (
          <PlayerCard key={index} name={player.name} className={player.className} />
        ))}
      </section>
    </main>
  );
};

export default PlayerVsDealer;