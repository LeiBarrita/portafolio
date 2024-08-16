import styles from "./tag.module.css";

const Tag = ({ type, onClick }: { type: string; onClick?: () => void }) => {
  return (
    <div className={styles.tag} onClick={onClick}>
      <h4>{type}</h4>
    </div>
  );
};

export default Tag;
