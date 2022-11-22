import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CourseList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/students/allcourses");
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
    <div className="max-w-4xl justify-center text-center mx-auto mt-20">
      <Toaster />
      {
        loading ? <div className="text-2xl text-black"> Loading...</div> :
          error ? <div className="text-2xl text-black">{error} </div> :
            <>
              <div className="" >
                <table className="table-auto border-collapse border border-slate-500 border-spacing-2 border-slate-500 ">
                  <thead>
                    <tr>
                      <th className="border border-slate-600">Sr. No.</th>
                      <th className="border border-slate-600">Name</th>
                      <th className="border border-slate-600">Reg. No.</th>
                      <th className="border border-slate-600">Semester</th>
                      <th className="border border-slate-600">Course</th>
                    </tr>
                  </thead>
                  {
                    data.map((course, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td className="border border-slate-700">{index + 1}</td>
                            <td className="border border-slate-700">{course.name}</td>
                            <td className="border border-slate-700">{course.regno}</td>
                            <td className="border border-slate-700">{course.semester}</td>
                            <td className="border border-slate-700">{course.course.map((c, index) => (
                              <span className="py-8 my-8 mx-12  px-12" key={index}> {c.coursename}</span>
                            ))}</td>
                          </tr>
                        </tbody>
                      )
                    })
                  }
                </table>
              </div>

            </>
      }
    </div>
  )
}

export default CourseList