
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Index from '../../../common/Index';
import PagesIndex from '../../../common/PagesIndex';

const AllocateStudent = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = PagesIndex.useNavigate();
    // studentId, interviewId
    const initialValues = {
        studentId:"",
      isDisable: false,
      
    };
  
    const getStudentList = async () => {
        try {
          const res = await PagesIndex.DataService.get(
            PagesIndex.Api.GET_STUDENT_LIST
          );
          setData(res?.data?.findStudents);
        } catch (error) {
          PagesIndex.toast.error(error.res?.data?.message || error.message);
        }
      };
    
      PagesIndex.useEffect(() => {
        getStudentList();
      }, []);

    const handleSubmit = async (values, { setFieldValue }) => {
      setFieldValue("isDisable", true);
      console.log(values)
      try {
        let data = {
            studentId: values.studentId,
            interviewId:id
        };
        const res = await PagesIndex.DataService.post(PagesIndex.Api.ALLOCATE_STUDENT,data)
        PagesIndex.toast.success(res?.data?.message);
        navigate("/dashboard/interview/list");
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
            Allocate Student to Interview
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
                          Select Student
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                         
                          <Index.Select
                        fullWidth
                        name="studentId"
                        className="status-select"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {data?.map((option) => (
                          <Index.MenuItem key={option._id} value={option._id} >
                            {option?.name}
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

export default AllocateStudent;
