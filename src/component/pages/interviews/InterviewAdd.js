import Index from "../../../common/Index";
import PagesIndex from "../../../common/PagesIndex";

const InterviewAdd = () => {
  const navigate = PagesIndex.useNavigate();
  const status = ["placed", "not_placed"];

  const initialValues = {
    name: "",
    college: "",
    dsaScore: "",
    webDScore: "",
    reactScore: "",
    isDisable: false,
    status:""
  };

  const handleSubmit = async (values, { setFieldValue }) => {
    setFieldValue("isDisable", true);
    try {
      let data = {
        company : values.company,
        date : values.date
      };
      const res = await PagesIndex.DataService.post(PagesIndex.Api.ADD_INTERVIEW,data)
      PagesIndex.toast.success(res?.data?.message);
      navigate("/dashboard/interview/list");
    } catch (error) {
        PagesIndex.toast.error(error.response.data.message || error.message);

    }finally {
        setTimeout(() => {
          setFieldValue("isDisable", false);
        }, 1000);
      }
  };

  return (
   <>
    <Index.Box className="dashboard-content">
      <Index.Box className="Add-main-box">
        <Index.Box className="add-header-title-main">
          <Index.Typography
            className="add-header-title"
            component="h2"
            variant="h2"
          >
            Add Interview
          </Index.Typography>
        </Index.Box>
        <PagesIndex.Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleBlur,
            handleChange,
            errors,
            setFieldValue,
            touched,
            handleSubmit,
          }) => (
            <PagesIndex.Form onSubmit={handleSubmit}>
              <Index.Box className="add-user-data-main">
                <Index.Box sx={{ width: 1 }} className="grid-main">
                  <Index.Box
                    display="grid"
                    className="display-row-add-user"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                  >
                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 4",
                        lg: "span 4",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Company
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            required
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="company"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Index.Box>
                      </Index.Box>
                    </Index.Box>
                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 4",
                        lg: "span 4",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="margin input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Date
                        </Index.FormHelperText>
                        <Index.Box className="margin input-box add-user-input form-group" >
                        <Index.LocalizationProvider
                        className="margin form-control"
                        dateAdapter={Index.AdapterDayjs}
                        locale="en"
                        dayjs={PagesIndex.dayjs}
                      >
                        <Index.DemoContainer components={["DatePicker"]}>
                          <Index.DatePicker
                         
                            className="margin input-box add-user-input form-control"
                            name="date"
                            onChange={(value) => {
                              setFieldValue(
                                "date",
                                PagesIndex.moment(value.$d).format("YYYY-MM-DD")
                              );
                            }}
                            value={PagesIndex.dayjs(values?.date)}
                            format="YYYY-MM-DD"
                            renderInput={(startProps) => (
                              <Index.TextField
                                className="margin form-control"
                                {...startProps.inputProps}
                                fullWidth
                                id="date"
                                label="Date"
                              />
                            )}
                          />
                        </Index.DemoContainer>
                      </Index.LocalizationProvider>
                        </Index.Box>
                      </Index.Box>
                    </Index.Box>

                   
                     
                  </Index.Box>
                </Index.Box>
                <Index.Box className="user-btn-flex">
                  <Index.Box className="add-btn-main">
                    <Index.Button
                      disabled={values.isDisable}
                      className="add-btn"
                      type="submit"
                    >
                      Save
                    </Index.Button>
                  </Index.Box>
                  <Index.Box className="back-btn-main">
                    <Index.Button
                     onClick={() => navigate("/dashboard/interview/list")}
                      className="back-btn"
                      
                    >
                      Back
                    </Index.Button>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </PagesIndex.Form>
          )}
        </PagesIndex.Formik>
      </Index.Box>
    </Index.Box></>
  );
};

export default InterviewAdd;
