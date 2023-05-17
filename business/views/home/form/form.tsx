import { useForm } from "../../../content/hooks/useForm";
import styles from "./form.module.css";
import FormService from "../../../../services/form.service";
import { useEffect } from "react";

const Form = (props: any) => {
  const {
    city,
    address,
    name,
    product,
    cel,
    email,
    email_user,
    dpto,
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
    email_user: ""
  });

  const dataForm = {
    name: name,
    email: "info@gimdecar.edu.co",
    address: address,
    city: city,
    product: product,
    cel: cel,
    dpto: dpto,
    email_user: email_user
  }

  const saveForm = (ev: any) => {
    ev.preventDefault();
    FormService(dataForm)
  }

  const dptoSelect = props.dpto.map((item: any, index: any) => (
    <option key={index} value={item}>{item}</option>
  ));
  const citySelect = props.city.map((item: any, index: any) => (
    <option key={index} value={item}>{item}</option>
  ));

  useEffect(() => {
    props.setSelectDpto(dataForm.dpto);
  }, [dataForm.dpto]);

  return (
    <form id="form-seccion" className={styles.form}>
      <div className={styles.form_container}>
        <div className={styles.content_form}>
          { props.lang === 'es' ?
              <div>
                <div className={styles.inputs}>
                  <select name="dpto" onChange={onInputChange} required>
                    <option value="">{props.translate('form.dpto')}</option>
                    {dptoSelect}
                  </select>
                </div>
                <div className={styles.inputs}>
                  <select name="city" onChange={onInputChange} required>
                    <option value="">{props.translate('form.city')}</option>
                    {citySelect}
                  </select>
                </div>
              </div>
              :
              <div className={styles.inputs}>
                <input
                    required
                    type="text"
                    placeholder={props.translate('form.city')}
                    value={city}
                    onChange={onInputChange}
                    name="city"
                />
              </div>
          }

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder={props.translate('form.address')}
              value={address}
              onChange={onInputChange}
              name="address"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder={props.translate('form.name')}
              value={name}
              onChange={onInputChange}
              name="name"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder={props.translate('form.phone')}
              value={cel}
              onChange={onInputChange}
              name="cel"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder={props.translate('form.email')}
              value={email_user}
              onChange={onInputChange}
              name="email_user"
            />
          </div>
          <div>
            <button className={styles.button_cotizar} onClick={saveForm} type="submit"><i className='bx bx-mail-send' ></i>&nbsp;{props.translate('form.button')}</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
