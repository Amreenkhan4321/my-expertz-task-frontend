import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PagesIndex from '../../../common/PagesIndex';
import Index from '../../../common/Index';
import { useParams } from 'react-router-dom';

const ResultStatus = ({ interviewId, studentId }) => {
  const navigate = PagesIndex.useNavigate();
  const { id } = useParams();
    const [data, setData] = useState([]);
  // studentId, interviewId
  const status = ["PASS", "Fail","On Hold","Didn’t Attempt"];

  const getStudentList = async () => {
    try {
      const res = await PagesIndex.DataService.get(
        PagesIndex.Api.GET_INTERVIEW_LIST
      );
      setData(res?.data?.data);
      console.log(res)
    } catch (error) {
      PagesIndex.toast.error(error.res?.data?.message || error.message);
    }
  };

  PagesIndex.useEffect(() => {
    getStudentList();
  }, []);

  const initialValues = {
    result:"",
    isDisable: false,
    
  };


  const handleSubmit = async (values, { setFieldValue }) => {
    setFieldValue("isDisable", true);
    console.log(values)
    try {
    
      const res = await PagesIndex.DataService.post(`${PagesIndex.Api.RESULT_STATUS}/${interviewId}/students/${studentId}`, values.result );
      // PagesIndex.toast.success(res?.data?.message);
      // navigate("/interview/list");
    } catch (error) {
        PagesIndex.toast.error(error.res?.data?.message || error.message);

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
            Update Result Status
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
                          Select Result
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                         
                          <Index.Select
                        fullWidth
                        name="result"
                        className="status-select"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {status?.map((option) => (
                          <Index.MenuItem key={option} value={option} >
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

export default ResultStatus;
