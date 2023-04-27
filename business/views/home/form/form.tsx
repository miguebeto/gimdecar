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
  });

  const dataForm = {
    name: name,
    email: email,
    address: address,
    city: city,
    product: product,
    cel: cel,
    dpto: dpto
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

          {/*<div className={styles.inputs}>*/}
          {/*  <input*/}
          {/*    required*/}
          {/*    type="text"*/}
          {/*    placeholder="Producto"*/}
          {/*    value={product}*/}
          {/*    onChange={onInputChange}*/}
          {/*    name="product"*/}
          {/*  />*/}
          {/*</div>*/}

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
              value={email}
              onChange={onInputChange}
              name="email"
            />
          </div>
          <div>
            <button className={styles.button_cotizar} onClick={saveForm} type="submit">{props.translate('form.button')}</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
