import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Logging in...');
    try {
      axios.post('http://localhost:4000/api/auth/login', { email, password })
        .then((res) => {
          res.data && localStorage.setItem('email', res.data.user.email);
          res.data && localStorage.setItem('username', res.data.user.username);
          res.data && navigate('/');
          res.data && toast.success('Logged in successfully!');
        }).catch((err) => {
          toast.error('Something went wrong');
          console.log(err);
        })
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', { duration: 3000 });
      console.log(error);
    }
    // navigate("/");
  };

  return (
    <div className='justify-center text-center h-auto my-32'>
      <Toaster />
      <div className='flex p-8 flex-col bg-gray-50  rounded-lg mx-auto shadow-2xl lg:w-1/3 h-auto'>
        <h1 className='text-3xl font-bold py-5 text-blue-500'>User Login 🛅</h1>

        <input type="text" name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='my-3 lg:mx-3 py-3 rounded-md outline-none border-2 p-1' required />
        <input type="text" name='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' className='my-3 lg:mx-3 py-3 rounded-md outline-none border-2 p-1' required />
        <br />

        <button type="submit" onClick={handleSubmit} className='py-3 my-5 mx-3 bg-blue-500 text-white rounded-md '>Login</button>
      </div>
    </div>
  )
}

export default Login