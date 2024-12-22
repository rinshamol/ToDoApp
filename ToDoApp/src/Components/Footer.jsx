import style from "./Footer.module.css";
export default function Footer({ completed, total }) {
  return (
    <div className={style.main}>
      <span className={style.item}>Completed tasks:{completed}</span>
      <span className={style.item}>Total tasks:{total}</span>
    </div>
  );
}
