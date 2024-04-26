import { useState } from "react";
import Index from "../../../common/Index";
import PagesIndex from "../../../common/PagesIndex";
import { Link } from "react-router-dom";

const StudentList = () => {
  const navigate = PagesIndex.useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
          Student List
        </Index.Typography>
        <Index.Box className="userlist-btn-flex">
          <Index.Box></Index.Box>

          <Index.Box className="flex-all user-list-inner-flex">
            <Index.Box className="add-btn-main-primary">
              <Index.Button
                className="add-btn-primary"
                onClick={() => navigate("/dashboard/student/add")}
              >
                Add Student
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <p className='p-text'>Click on the student name to change the status.</p>

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
                            Student Name
                          </Index.TableCell>

                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            College
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            DSA Final Score
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            WebD Final Score
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            React Final Score
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            Status
                          </Index.TableCell>
                        </Index.TableRow>
                      </Index.TableHead>
                      <Index.TableBody className="table-body">
                        {data?.length ? (
                          data
                            ?.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
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
                                  <Link
                                    className="text-decoration text-color"
                                    to={`/dashboard/resultstatus/${row?._id}`}
                                  >
                                    {" "}
                                    {row?.name}
                                  </Link>
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.college}
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.scores?.dsaScore}
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.scores?.webDScore}
                                </Index.TableCell>

                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.scores?.reactScore}
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.status}
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

export default StudentList;
