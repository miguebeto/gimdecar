import { useForm } from "../../../content/hooks/useForm";
import styles from "./form.module.css";
import FormService from "../../../../services/form.service";

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

  const dataForm = {
    name: name,
    email: email,
    address: address,
    city: city,
    product: product,
    cel: cel
  }

  const saveForm = (ev:any) => {
    ev.preventDefault();
    FormService(dataForm)
  }

  return (
    <form className={styles.form}>
      <div className={styles.form_container}>
        <div className={styles.content_form}>
          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Ciudad"
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
              value={email}
              onChange={onInputChange}
              name="email"
            />
          </div>
          <div>
            <button className={styles.button_cotizar} onClick={saveForm} type="submit">Cotizar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
