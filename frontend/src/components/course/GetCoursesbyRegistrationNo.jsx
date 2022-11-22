import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow,
    Paper,
    Typography,
    TablePagination,

} from '@mui/material';

const GetCoursesbyRegistrationNo = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [regno, setRegno] = React.useState('')
    const [data, setData] = React.useState([])

    const getCourses = () => {
        fetch(`http://localhost:4000/api/student/getstudentcourse/?regno=${regno}`)
            .then(response => response.json())
            .then(data => setData(data[0].course))
    };


    return (
        <div className="" style={{ width: "80vw", marginLeft: "auto", marginRight: "auto", marginTop: "5rem" }}>
            
            <div className="border-4 border-gray-200 bg-blue-50  max-w-md" style={{ padding: "2rem", borderRadius: ".5rem", boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)" }}>
                <input type="text" placeholder="Registration Number" className="outline-none drop-shadow-lg border-4" style={{ padding: "6px", borderRadius: ".5rem" }} onChange={(e) => { setRegno(e.target.value) }} />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 border-2 drop-shadow-lg" style={{ marginLeft: "1rem", padding: "8px", color: "white", width: "8rem", borderRadius: ".5rem" }} onClick={getCourses}>Get</button>
            </div>
            <TableContainer component={Paper} className={`rounded-2xl mt-5 max-w-6xl shadow-md my-5`}>
                <Table className="min-w-min max-h-[35rem]" stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Course Code</TableCell>
                            <TableCell >Course Name</TableCell>
                            <TableCell >Course Credit</TableCell>
                            <TableCell >Course Basket</TableCell>
                            <TableCell >Course Type</TableCell>
                            <TableCell >Semester</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.coursename}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                
                                <TableCell className=''>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {row.coursecode}
                                    </Typography>
                                </TableCell>

                                <TableCell className=''>
                                    <Typography className='font-extrabold font-sans  text-gray-900 text-4xl'>
                                        {row.coursename}
                                    </Typography>
                                </TableCell>

                                <TableCell >
                                    <Typography className='text-gray-900 font-bold'>
                                        {row.coursecredit}
                                    </Typography>
                                </TableCell>

                                <TableCell >
                                    {row.coursebasket}
                                </TableCell>

                                <TableCell >
                                    {row.coursetype}
                                </TableCell>

                                <TableCell>
                                    {row.semester}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                {data.length <= 0 && <Typography variant="h4" component="h4" style={{padding:"10rem" ,textAlign: "center", marginBottom: "1rem" }}>No Courses Found.. ☹️<br /> <span style={{fontSize:"1rem"}}>Please type your registration number to search.</span> </Typography>}
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
                    component="div"
                    className="border-t-2 border-gray-300"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </TableContainer>
        </div >
    )
}

export default GetCoursesbyRegistrationNo