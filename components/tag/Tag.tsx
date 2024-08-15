import styles from "./tag.module.css";

const Tag = ({ type }: { type: string }) => {
  return (
    <div className={styles.tag}>
      <h4>{type}</h4>
    </div>
  );
};

export default Tag;
