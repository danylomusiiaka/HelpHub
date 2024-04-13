import Header from "../../components/Header";
import { Input } from "../../components/Input";
import styles from "./Post.module.css";
export function PostPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.createPostHeader}>Створення запиту</h1>

        <form className={styles.requestForm}>
          <Input label="Назва" />
          <Input label="Опис" />
          <Input label="Додаткова інформація" />
          <label htmlFor=""></label>
          <input type="file" />
          <div className={styles.userOptions}>
            <div>
              <input type="checkbox" name="" id="" />
              <label className={styles.checkBoxLabel}>Я надаю роботу</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label className={styles.checkBoxLabel}>Я потребую</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label className={styles.checkBoxLabel}>Я пропоную</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label className={styles.checkBoxLabel}>Я працюю від організації</label>
            </div>
          </div>
          <label htmlFor="">Для кого</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Вартість</label>
          <input type="checkbox" name="" id="" />
        </form>
      </div>
    </>
  );
}
