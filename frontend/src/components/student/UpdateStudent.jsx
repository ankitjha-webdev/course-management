// import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    Button
} from "@material-tailwind/react";
import { useState } from "react";

import axios from 'axios'

const UpdateStudent = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: null,
        regno: null,
        currentsem: null,
    })

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/student/${id}`, data);

            navigate('/student')

        } catch (err) {
            console.log(err);
            setError(true);
        }

    };

    return (
        <div className='bg-gray-50 justify-center text-center rounded-md mx-auto shadow-2xl lg:w-1/3 h-auto'>
            <h1 className='text-3xl font-bold mt-32 py-5 text-blue-500'>Update Student</h1>
            <input type="text" name='name' onChange={handleChange} placeholder='Name' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' required />
            <input type="email" name='email' onChange={handleChange} placeholder='Email' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' />
            <input type="number" name='regno' onChange={handleChange} placeholder='Registration Number' className='my-3 outline-none border-2 p-1 lg:mx-3 rounded-md' />
            <input type="number" name='phone' onChange={handleChange} placeholder='Phone' className='my-3  lg:mx-3 outline-none border-2 p-1 rounded-md' />

            <select name="currentsem" onChange={handleChange} className='my-3 lg:mx-3 font-normal border-2 p-1 rounded-md outline-none'>
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
            {error && <span className='text-red-500'>Something went wrong!</span>}
            <Button type="submit" onClick={handleClick} className=' px-16 py-3 bg-blue-500 rounded-md my-5'>Update</Button>
        </div>
    )
}

export default UpdateStudent