import { useState } from "react";
import Index from "../../../common/Index";
import PagesIndex from "../../../common/PagesIndex";
import { Link } from "react-router-dom";

const InterviewList = () => {
  const navigate = PagesIndex.useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Index.Box className="dashboard-content">
      <Index.Box className="list-flex">
        <Index.Typography
          className="page-title user-list-page-title"
          component="h2"
          variant="h2"
        >
          Interview List
        </Index.Typography>
        <Index.Box className="userlist-btn-flex">
          <Index.Box></Index.Box>

          <Index.Box className="flex-all user-list-inner-flex">
            <Index.Box className="add-btn-main-primary">
              <Index.Button
                className="add-btn-primary"
                onClick={() => navigate("/dashboard/interview/add")}
              >
                Add Interview
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <p className='p-text'>Click on the company name to allocate the student for interview.</p>
      <Index.Box className="admin-dashboard-list-row">
        <Index.Box sx={{ width: 1 }} className="grid-main">
          <Index.Box
            display="grid"
            className="display-row"
            gridTemplateColumns="repeat(12, 1fr)"
            gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}
          >
            <Index.Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 12",
                lg: "span 12",
              }}
              className="grid-column"
            >
              <Index.Box className="admin-dash-box">
                <Index.Box className="userlist-table-main page-table-main gamewisebet-table">
                  <Index.TableContainer
                    component={Index.Paper}
                    className="table-container"
                  >
                    <Index.Table
                      sx={{ minWidth: 400 }}
                      aria-label="simple table"
                      className="table"
                    >
                      <Index.TableHead className="table-head">
                        <Index.TableRow className="table-row">
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            Company Name
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            Date
                          </Index.TableCell>
                         
                        </Index.TableRow>
                      </Index.TableHead>
                      <Index.TableBody className="table-body">
                        {data?.length ? (
                          data?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          ).map((row) => (
                            <Index.TableRow
                              key={row?._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="justify"
                              >
                                <Link className="text-decoration text-color" to={`/dashboard/allocate/${row?._id}`}>{row?.company}</Link>
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="justify"
                              >
                                {row?.date?.split('T')[0]}
                              </Index.TableCell>
                             
                            </Index.TableRow>
                          ))
                        ) : (
                          <Index.TableRow
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                            >
                              No Record Found
                            </Index.TableCell>
                          </Index.TableRow>
                        )}
                      </Index.TableBody>
                    </Index.Table>
                    <hr />
                  </Index.TableContainer>
                  <Index.Box>
                  <Index.TablePagination
                      component="div"
                      count={data?.length}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Index.Box>
                </Index.Box>
              </Index.Box>{" "}
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default InterviewList;
