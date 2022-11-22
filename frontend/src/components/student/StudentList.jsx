import React from 'react'
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { IconButton } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const deleteStudent = (id) => {
    toast.loading('Deleting...');

    axios.delete(`http://localhost:4000/api/student/${id}`)
      .then((res) => {
        toast.success('Deleted Successfully');
        window.location.reload();
      }).catch((err) => {
        toast.error('Something went wrong');
      })
    navigate(0);
  }  // delete student function

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/student/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      setLoading(false);
      toast.success('Student List Loaded Successfully!');
    } catch (error) {
      setError(error.message);
      setLoading(false);
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12 py-8 px-8 grid grid-cols-3 justify-center items-center h-auto">
      <Toaster />
      {

        loading && loading ? <div className="text-2xl text-black"> Loading...</div> :
          error && error ? <div className="text-2xl text-black">{error} </div> :
            <>
              {
                data && data.map((student, index) => {
                  return (
                    <div className="shadow-lg rounded-md border-4 mx-4 my-4  bg-gray-50 text-blue-500 overflow-hidden" key={index}>
                      <div className="text-right mx-4 my-2">

                        <IconButton variant="text" onClick={() => { deleteStudent(student.id) }} className=" hover:bg-red-700 text-red-400 hover:text-white text-2xl font-bold py-2 px-4 rounded-full">
                          <i className="fa fa-trash" />
                          {/* {console.log(student._id)} */}
                        </IconButton>

                        <Link to={`updatestudent/${student.id}`}>
                          <IconButton variant="text" className=" hover:bg-green-700 text-green-600 text-2xl hover:text-white font-bold py-2 px-4 rounded-full">
                            <i className="fa fa-edit" />
                          </IconButton>
                        </Link>
                      </div>

                      <div className="sm:grid sm:grid-cols-1 sm:items-center px-6 my-8 py-2">
                        <p
                          className="block mx-auto text-4xl sm:flex-shrink-0 h-16 w-16 bg-gray-300 rounded-full sm:mx-3 sm:h-10 sm:w-10">
                          🧑🏻‍🎓
                        </p>
                        <div className="text-center flex  sm:text-left sm:ml-3">

                          <div className='my-4'>
                            <p className="text-xl py-2 leading-tight">{student.name}</p>
                            <p className="text-sm py-1 leading-tight text-gray-600">
                              {student.email}
                            </p>
                            <p className="text-sm py-1 leading-tight text-gray-600">
                              {student.phone}
                            </p>
                          </div>

                          <div className="sm:text-left pt-10 px-6">
                            <p className="text-sm  py-1 leading-tight text-gray-600">
                              {student.regno}
                            </p>
                            <p className="text-sm py-1 leading-tight text-gray-600">
                              {student.currentsem} <sup>th</sup> sem
                            </p>
                            {/* <span className=" text-gray-300 font-normal mx-4 bg-blue-gray-600  rounded-full">
                              {Date(student.createdAt).substring(0, 15)}
                              {Moment(student.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                            </span> */}
                          </div>

                        </div>

                      </div>

                    </div>
                  )
                })
              }
            </>

      }
    </div>
  )
}

export default StudentList