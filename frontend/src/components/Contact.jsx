import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.loading('Sending...');
    // console.log(name, email, message);
    const contact = {
      name,
      email,
      message,
    };

    axios.post("http://localhost:4000/api/contact", contact)
    .then((res) => {
      toast.success('Message Sent Successfully!');
      console.log(res);
    }).catch((err) => {
      toast.error('Something went wrong');
      console.log(err);
    })

    console.log("Submitted");
    
  };

  return (
    <div>
      <Toaster />
      <div className='bg-gray-50 justify-center text-center rounded-lg mx-auto shadow-2xl lg:w-1/3 h-auto'>
        <h1 className='text-3xl font-bold mt-32 py-5 text-blue-500'>Contact Me 📶</h1>
        <input type="text" name='name' onChange={(e) => { setName(e.target.value) }} placeholder='Name' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' required />
        <input type="text" name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='my-3 lg:mx-3  rounded-md outline-none border-2 p-1' />
        <textarea name="message" onChange={(e) => { setMessage(e.target.value) }} placeholder='Registration Number' className='my-3 outline-none border-2 p-1 lg:mx-3 rounded-md'  id="message" cols="52" rows="3"></textarea>
        <br />
        <button type="submit" onClick={handleSubmit} className=' px-16 py-3 bg-blue-500 text-white rounded-md my-5'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact