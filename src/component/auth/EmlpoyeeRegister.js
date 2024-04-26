import React, { useState } from "react";
import Index from "../../common/Index";
import PagesIndex from "../../common/PagesIndex";



const EmployeeRegister = () => {
  const navigate = PagesIndex.useNavigate();
  // All State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Methods
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    confirmPassword: "",
    isDisable: false,
  };

  const handleFormSubmit = async (values, { setFieldValue }) => {
    setFieldValue("isDisable", true);
    console.log(values);
    try {
      let data = {
        name: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.mobileNumber,
      };
      const res = await PagesIndex.DataService.post(
        PagesIndex.Api.EMP_REGISTER,
        data
      );
      console.log(res, "res");
      if (res.data.status === 201 || 200) {
        PagesIndex.toast.success(res?.data?.message);
       
        navigate("/");
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
      <Index.Box className="register-main-box">
        <Index.Box className="admin-login-inner set-login-box">
          <Index.Typography component="h2" variant="h2" className="login-text">
            Sign Up
          </Index.Typography>
          <Index.Typography
            component="p"
            variant="p"
            className="admin-sign-para common-para"
          >
            Please enter your details here!
          </Index.Typography>
          <PagesIndex.Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={PagesIndex.SignUpValidation}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <PagesIndex.Form onSubmit={handleSubmit}>
                <Index.Grid
                  className="admin-login-inner set-login-box"
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Index.Grid item xs={6}>
                    <Index.Box className="input-box">
                      <Index.FormHelperText className="form-lable">
                        Name
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="form-control"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors?.name && touched.name && (
                          <p className="error-text">{errors?.name}</p>
                        )}
                      </Index.Box>
                    </Index.Box>
                  </Index.Grid>
                  <Index.Grid item xs={6}>
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors?.email && touched.email && (
                          <p className="error-text">{errors?.email}</p>
                        )}
                      </Index.Box>
                    </Index.Box>
                  </Index.Grid>
                  <Index.Grid item xs={6}>
                    <Index.Box className="input-box">
                      <Index.FormHelperText className="form-lable">
                        Mobile Number
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="form-control"
                          name="mobileNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors?.mobileNumber && touched.mobileNumber && (
                          <p className="error-text">{errors?.mobileNumber}</p>
                        )}
                      </Index.Box>
                    </Index.Box>
                  </Index.Grid>
                  <Index.Grid item xs={6}>
                    <Index.Box className="input-box">
                      <Index.FormHelperText className="form-lable">
                        Password
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.OutlinedInput
                          className="form-control-eye"
                          id="outlined-adornment-password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                  </Index.Grid>
                  <Index.Grid item xs={6}>
                    <Index.Box className="input-box">
                      <Index.FormHelperText className="form-lable">
                        Confirm Password
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.OutlinedInput
                          className="form-control-eye"
                          id="outlined-adornment-password"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type={showConfirmPassword ? "text" : "password"}
                          endAdornment={
                            <Index.InputAdornment position="end">
                              <Index.IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {!showConfirmPassword ? (
                                  <Index.VisibilityOff />
                                ) : (
                                  <Index.Visibility />
                                )}
                              </Index.IconButton>
                            </Index.InputAdornment>
                          }
                        />
                        {errors?.confirmPassword && touched.confirmPassword && (
                          <p className="error-text">
                            {errors?.confirmPassword}
                          </p>
                        )}
                      </Index.Box>
                    </Index.Box>
                  </Index.Grid>
                </Index.Grid>

                <Index.Box className="btn-main-primary login-btn-main">
                  <Index.Button
                    disabled={values.isDisable}
                    className="btn-primary login-btn"
                    type="submit"
                  >
                    Register
                  </Index.Button>
                </Index.Box>
              </PagesIndex.Form>
            )}
          </PagesIndex.Formik>

          <Index.Typography className="admin-sign-para common-para">
            Already Registered!
            <PagesIndex.Link
              to="/"
              className="text-decoration-none admin-sign-para common-para"
            >
              Log in
            </PagesIndex.Link>
          </Index.Typography>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default EmployeeRegister;
