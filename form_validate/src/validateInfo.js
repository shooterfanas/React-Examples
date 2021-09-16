export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Kullanıcı Adı Boş Bırakılamaz";
  }

  if (!values.email) {
    errors.email = "E-Mail Boş Bırakılamaz";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Girilen Değer Mail Adresi Olmalı";
  }

  if (!values.password) {
    errors.password = "Şifre Alanı Boş Bırakılamaz";
  } else if (values.password.length < 8) {
    errors.password = "Şifreniz 8 Karakterden Uzun Olmalıdır";
  }

  if (!values.password2) {
    errors.password2 = "Şifre Alanı Boş Bırakılamaz";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Girilen Şifreler Uyuşmuyor";
  }

  return errors;
}
