import { useForm } from "../../../content/hooks/useForm";
import styles from "./form.module.css";

const Form = () => {
  const {
    city,
    address,
    name,
    product,
    cel,
    email,
    formState,
    onInputChange,
    onResetForm,
  }: any = useForm({
    city: "",
    address: "",
    name: "",
    product: "",
    cel: "",
    email: "",
  });

  return (
    <form>
      <div className={styles.form}>
        <div className={styles.content_form}>
          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Ciudad"
              className={styles.formControl}
              value={city}
              onChange={onInputChange}
              name="city"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Dirección"
              className={styles.formControl}
              value={address}
              onChange={onInputChange}
              name="address"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Nombre"
              className={styles.formControl}
              value={name}
              onChange={onInputChange}
              name="name"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Producto"
              className={styles.formControl}
              value={product}
              onChange={onInputChange}
              name="product"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Tel/Cel"
              className={styles.formControl}
              value={cel}
              onChange={onInputChange}
              name="cel"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Email"
              className={styles.formControl}
              value={email}
              onChange={onInputChange}
              name="email"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
