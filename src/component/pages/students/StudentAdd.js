import Index from "../../../common/Index";
import PagesIndex from "../../../common/PagesIndex";

const StudentAdd = () => {
  const navigate = PagesIndex.useNavigate();
  const status = ["placed", "not_placed"];

  const initialValues = {
    name: "",
    college: "",
    dsaScore: "",
    webDScore: "",
    reactScore: "",
    isDisable: false,
    status:"",
    batch:""
  };

  const handleSubmit = async (values, { setFieldValue }) => {
    setFieldValue("isDisable", true);
    try {
      let data = {
        name: values.name,
        college: values.college,
        dsaScore: values.dsaScore,
        webDScore: values.webDScore,
        reactScore: values.reactScore,
        status:values.status,
        batch:values.batch
      };
      const res = await PagesIndex.DataService.post(PagesIndex.Api.ADD_STUDENT,data)
      PagesIndex.toast.success(res?.data?.message);
      navigate("/dashboard/studentlist");
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
            Add Student
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
                          Name
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            required
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="name"
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          College
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="college"
                            required
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                        Batch
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="batch"
                            required
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          DSA Final Score
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            type="number"
                            className="form-control"
                            placeholder=""
                            name="dsaScore"
                            required
                            onChange={handleChange}
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          WebD Final Score
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            type="number"
                            className="form-control"
                            placeholder=""
                            name="webDScore"
                            required
                            onChange={handleChange}
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          React Final Score
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            type="number"
                            className="form-control"
                            placeholder=""
                            name="reactScore"
                            required
                            onChange={handleChange}
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
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Status
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                         
                          <Index.Select
                        fullWidth
                        name="status"
                        className="status-select"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {status?.map((option) => (
                          <Index.MenuItem value={option} name={option}>
                            {option}
                          </Index.MenuItem>
                        ))}
                      </Index.Select>
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
                     onClick={() => navigate("/dashboard/studentlist")}
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

export default StudentAdd;
