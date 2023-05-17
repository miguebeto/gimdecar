import styles from './standard.module.css'
const Standard = ({translate}:any) => {
  return (
    <div className={styles.learn_title}>
      <h2>{translate("section1.title")}</h2>
      <p>{translate("section1.description2")}</p>
      <img src="/images/idiomas/images/icontec.png" alt="icontec" title='icontec' />
      <p>{translate("section1.description1")}</p>
    </div>
  );
};

export default Standard;
