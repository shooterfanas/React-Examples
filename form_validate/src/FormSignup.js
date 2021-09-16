import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Yeni Bir Hesap Oluştur</h1>
        <div className="form-inputs">
          <label className="form-label">Kullanıcı Adı</label>
          <input
            type="text"
            className="form-input"
            name="username"
            placeholder="Kullanıcı Adınızı Girin..."
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">E-Mail</label>
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="E-Mail Girin..."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Şifre</label>
          <input
            type="password"
            className="form-input"
            name="password"
            placeholder="Şifrenizi Girin..."
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Şifrenizi Doğrulayın</label>
          <input
            type="password"
            className="form-input"
            name="password2"
            placeholder="Şifrenizi Tekrar Girin..."
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Kayıt Ol
        </button>
        <span className="form-input-login">
          Hesabınız mı Var? <a href="#"> Giriş Yapın.</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
