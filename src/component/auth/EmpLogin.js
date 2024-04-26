import React, { useState } from "react";
import PagesIndex from "../../common/PagesIndex";
import Index from "../../common/Index";

const EmpLogin = () => {
  const navigate = PagesIndex.useNavigate();

  // All State
  const [showPassword, setShowPassword] = useState(false);

  // Methods
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValues = {
    email: "",
    password: "",
    isDisable: false,
  };

  const handleFormSubmit = async (values, { setFieldValue }) => {
    setFieldValue("isDisable", true);
    console.log(values);
    try {
      let data = {
        email: values.email,
        password: values.password,
      };
      const res = await PagesIndex.DataService.post(
        PagesIndex.Api.EMP_LOGIN,
        data
      );
      console.log(res, "res");
      if (res.data.status === 201 || 200) {
        PagesIndex.toast.success(res?.data?.message);
        console.log(res, "res?.payload?");
        const token = res?.data?.token;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (error) {
      PagesIndex.toast.error(error.response.data.message || error.message);
    } finally {
      setTimeout(() => {
        setFieldValue("isDisable", false);
      }, 1000);
    }
  };

  return (
    <Index.Box className="main-box">
      <Index.Box className="main-box-login">
        <Index.Box className="admin-login-inner set-login-box">
          <Index.Typography component="h2" variant="h2" className="login-text">
            Log In
          </Index.Typography>
          <Index.Typography
            component="p"
            variant="p"
            className="admin-sign-para common-para"
          >
            Please enter your credentials to log in!
          </Index.Typography>

          <PagesIndex.Formik
            initialValues={initialValues}
            validationSchema={PagesIndex.LoginValidation}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <PagesIndex.Form onSubmit={handleSubmit}>
                <Index.Box className="input-box">
                  <Index.FormHelperText className="form-lable">
                    Email
                  </Index.FormHelperText>
                  <Index.Box className="form-group">
                    <Index.TextField
                      fullWidth
                      id="fullWidth"
                      className="form-control"
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors?.email && touched.email && (
                      <p className="error-text">{errors?.email}</p>
                    )}
                  </Index.Box>
                </Index.Box>

                <Index.Box className="input-box">
                  <Index.FormHelperText className="form-lable">
                    Password
                  </Index.FormHelperText>
                  <Index.Box className="form-group">
                    <Index.OutlinedInput
                      className="form-control-eye"
                      id="outlined-adornment-password"
                      name="password"
                      onBlur={handleBlur}
                      value={values.password.trim()}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <Index.InputAdornment position="end">
                          <Index.IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {!showPassword ? (
                              <Index.VisibilityOff />
                            ) : (
                              <Index.Visibility />
                            )}
                          </Index.IconButton>
                        </Index.InputAdornment>
                      }
                    />

                    {errors?.password && touched.password && (
                      <p className="error-text">{errors?.password}</p>
                    )}
                  </Index.Box>
                </Index.Box>

                <Index.Box className="btn-main-primary login-btn-main">
                  <Index.Button
                    disabled={values.isDisable}
                    className="btn-primary login-btn"
                    type="submit"
                  >
                    Log In
                  </Index.Button>
                </Index.Box>
              </PagesIndex.Form>
            )}
          </PagesIndex.Formik>

          <Index.Typography className="admin-sign-para common-para">
            Don't have an account?{" "}
            <PagesIndex.Link
              to="/register"
              className="text-decoration-none admin-sign-para common-para"
            >
              Sign Up
            </PagesIndex.Link>
          </Index.Typography>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default EmpLogin;
