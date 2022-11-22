import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import {
  Button
} from "@material-tailwind/react";
import upload from '../../upload.png'
import FormData from 'form-data';


const AddCourse = () => {
  const [coursename, setCoursename] = useState('');
  const [coursecode, setCoursecode] = useState('');
  const [coursecredit, setCoursecredit] = useState('');
  const [semester, setCoursesemester] = useState('');
  const [coursetype, setCoursetype] = useState('');
  const [coursebasket, setCoursebasket] = useState('');
  const [file, setFile] = useState(null);

  // const notify = () => toast.success('Student Added Successfully!');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Submit");

    const payload = {
      coursename: coursename,
      coursecode: coursecode,
      coursecredit: coursecredit,
      coursetype: coursetype,
      coursebasket: coursebasket,
      semester: semester,
    }

    // axios.post('http://localhost:4000/api/student/course', payload)
    //   .then(response => {
    //     console.log(response);
    //     toast.success('Course Added Successfully!');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     toast.error(`Error: ${error}`);
    //   });

    axios.post('http://localhost:4000/api/student/course', payload)
      .then(function (response) {
        console.log(response);
        toast.success('Course Added Successfully!');
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Error: ${error}`);
      });
  }

  const handleExcel = (evt) => {
    evt.preventDefault();
    let formData = new FormData();

    formData.append('file', file);

    axios.post('http://localhost:4000/api/student/upload', formData)
      .then((response) => {
        console.log(response);
        toast.success('Excel Added Successfully!');
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Error: ${error}`);
      });

    console.log("Submit");
  }

  // const fileName = excel.toString().replace(/^.*\\/, "");

  return (
    <div className='flex mt-16 w-auto'>
      <div className='mx-auto bg-gray-50 justify-center text-center rounded-md  shadow-2xl lg:w-1/3 h-auto'>
        <Toaster />
        <h1 className='text-3xl font-bold py-5 text-blue-500'>Add Course</h1>
        <input type="text" name='name' onChange={(e) => { setCoursename(e.target.value) }} placeholder=' Name' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' required />
        <input type="text" name='code' onChange={(e) => { setCoursecode(e.target.value) }} placeholder='Code' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' />
        {/* <input type="text" name='id' onChange={(e) => { setStudentId(e.target.value) }} placeholder='student id' className='my-3  lg:mx-3 rounded-md outline-none border-2 p-1' /> */}

        <select name="semester" onChange={(e) => { setCoursesemester(e.target.value) }} className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' id="">
          <option defaultValue>Choose the Semester</option>
          <option value="1">1st semester</option>
          <option value="2">2nd semester</option>
          <option value="3">3rd semester</option>
          <option value="4">4th semester</option>
          <option value="5">5th semester</option>
          <option value="6">6th semester</option>
          <option value="7">7th semester</option>
          <option value="8">8th semester</option>
        </select>

        <select name="semester" onChange={(e) => { setCoursetype(e.target.value) }} className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' id="">
          <option defaultValue>Choose Course Type</option>
          <option value="PP+PR">PP + PR</option>
          <option value="TW">TW</option>
          <option value="PP">PP</option>
          <option value="TUT">TUT</option>
          <option value="TW">TW</option>
          <option value="PR">PR</option>
          <option value="PP+TUT">PP + TUT</option>
          <option value="PP+TUT+PR">PP + TUT + PR</option>
          <option value="TUT">TUT</option>
          <option value="PP+PR+TUT"> PP + PR + TUT</option>
          <option value="PP+PR+TUT"> PP + PR + TUT</option>
          <option value="PR+TUT"> PR + TUT</option>
        </select>

        <select name="semester" onChange={(e) => { setCoursecredit(e.target.value) }} className='my-3 lg:mx-3 border-2 p-1  rounded-md outline-none' id="">
          <option defaultValue>Choose Course Credit</option>
          <option value="2">2 Credit</option>
          <option value="3">3 Credit</option>
          <option value="4">4 Credit</option>
          <option value="5">5 Credit</option>
          <option value="6">6 Credit</option>
          <option value="7">7 Credit</option>
          <option value="8">8 Credit</option>
        </select>

        <select name="semester" onChange={(e) => { setCoursebasket(e.target.value) }} className='my-3 lg:mx-3 font-normal border-2 p-1 rounded-md outline-none' id="">
          <option defaultValue>Choose Course Basket</option>
          <option value="1">Basket 1</option>
          <option value="2">Basket 2</option>
          <option value="3">Basket 3</option>
          <option value="4">Basket 4</option>
          <option value="5">Basket 5</option>
        </select>
        <br />

        <Button type="submit" onClick={handleSubmit} className=' px-16 py-3 bg-blue-500 rounded-md my-5'>Save</Button>
      </div>

      {/* Excel Upload */}
      <div className=" h-full justify-center bg-gray-50 w-auto p-8 text-center mx-auto  shadow-2xl  rounded-md">
        <h1 className='text-3xl font-bold py-5 text-blue-500'>Upload Excel File</h1>
        <form >
          <div className="mx-auto justify-center text-center rounded-md box-border">
            <label htmlFor='excel' className='w-auto px-10 cursor-pointer'>
              <img src={upload} alt="upload file" className='w-24 mx-auto drop-shadow-2xl  hover:bg-blue-100 rounded-full' />
              <small className='text-center ml-8 font-medium text-gray-400'>Choose the excel</small>
            </label>
            <input type="file" name='file' onChange={(e) => { setFile(e.target.files[0]) }} id='excel' className='p-2 hidden' style={{ visibility: "none" }} />
          </div>
          <Button type='submit' onClick={(evt) => { handleExcel(evt) }} className='p-2 mt-8 text-white font-semibold px-5 rounded-md bg-blue-500 hover:bg-blue-600'>Upload Excel</Button>
        </form>
      </div>


    </div>
  )
}

export default AddCourse