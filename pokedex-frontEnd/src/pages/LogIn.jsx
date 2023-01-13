import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { loginValidationschema} from "../validationSchemas/login.js";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
    error:{
color:"red",
fontSize:12,
marginBottom:20,
marginTop:-10,
marginLeft:5


    },
  form: {
    margin: 12,
  },
});

const FormikInputValues = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
      error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

/*const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,6}$/i.test(values.email)) {
    errors.email = "Por Favor ingresa un Email valido";
  }

  console.log(errors);

  return errors;
};*/

export default function LogInPage() {
  return (
    <Formik
      validationSchema={loginValidationschema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValues name="email" placeholder="E-mail" />
            <FormikInputValues
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}
