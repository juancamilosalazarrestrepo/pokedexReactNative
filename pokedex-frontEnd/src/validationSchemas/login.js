import * as yup from "yup";

export const loginValidationschema = yup.object().shape({
  email: yup.string().email("Escribe un mail valido").required("Email is Required"),
  password:yup.string().min(5,"Too Short!").max(1000,"too Long!").required("password is Required")
});
