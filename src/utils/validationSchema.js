import * as yup from "yup"

export const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    password: yup.string().required("Password is required.") .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        val => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
    gender: yup.string().oneOf(["male", "female", "other"]).required("Must select one gender."),
    check: yup.string().required("Must select one of the above: Primary, Secondary"),
    picture: yup.mixed().required("Profile Picture is required."),
    passwordConfirm: yup.string()
    .test("password-match", "Passwords must match.", function(value) {
        return this.parent.password === value
    })
     .required('Password confirmation is required')
})