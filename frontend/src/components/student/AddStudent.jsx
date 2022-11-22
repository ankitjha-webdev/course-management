import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
    Button
} from "@material-tailwind/react";
const notify = () => toast.success('Student Added Successfully!');
const AddStudent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [registration, setRegistration] = useState('')
    const [semester, setSemester] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (evt) => {
        console.log("Submit");
        const payload = {
            name: name,
            regno: registration,
            email: email,
            phone: phone,
            currentsem: semester,
        }
        axios.post('http://localhost:4000/api/student', payload)
            .then(function (response) {
                console.log(response);
                notify();
            })
            .catch(function (error) {
                console.log(error);
                toast.error(`Error: ${error}`);
            });

        navigate('/student');
    }

    return (
        <div className='bg-gray-50 justify-center text-center rounded-md mx-auto shadow-2xl lg:w-1/3 h-auto'>
            <Toaster />
            <h1 className='text-3xl font-bold mt-32 py-5 text-blue-500'>Add Student</h1>
            <input type="text" name='name' onChange={(e) => { setName(e.target.value) }} placeholder='Name' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' required />
            <input type="text" name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' />
            <input type="text" name='regno' onChange={(e) => { setRegistration(e.target.value) }} placeholder='Registration Number' className='my-3 outline-none border-2 p-1 lg:mx-3 rounded-md' />
            <input type="text" name='phone' onChange={(e) => { setPhone(e.target.value) }} placeholder='Phone' className='my-3  lg:mx-3 outline-none border-2 p-1 rounded-md' />
            <select name="semester" onChange={(e) => { setSemester(e.target.value) }} className='my-3 lg:mx-3 font-normal border-2 p-1 rounded-md outline-none' id="">
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
            <br />
            <Button type="submit" onClick={handleSubmit} className=' px-16 py-3 bg-blue-500 rounded-md my-5'>Save</Button>
        </div>
    )
}

export default AddStudent