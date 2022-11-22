import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {
    Button
} from '@material-tailwind/react';
const Home = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username')
    const path = window.location.pathname;
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
            {/* Hero Section */}
            <div className='flex flex-col p-9 bg-gray-100 rounded-md lg:flex-row items-center justify-between'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='font-medium text-2xl text-gray-500'>Hello {username && username.toUpperCase()},</h1>
                    <h1 className='text-3xl lg:text-5xl font-bold my-2 text-blue-500'>
                        Welcome to CMS
                    </h1>
                    <p className='text-lg lg:text-2xl text-gray-600 mt-4'>
                        This is a simple student course management system built with React, Node.js, Express, and Mysql, Sequlize.
                    </p>
                    <div className='flex flex-col lg:flex-row mt-8'>
                        <Button onClick={handleLogout} variant="filled" size="md" className=" px-10 py-1 flex-col hidden rounded-md lg:inline-block">
                            <span>Logout</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3m18-6a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    {/* <img src='' alt='SideImage' className='w-full lg:w-1/2' /> */}

                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mt-16'>
                <div className=' flex items-center max-w-xs  transition duration-150 ease-out hover:ease-in max-h-max'>
                    <div className='flex py-2 rounded-xl shadow-xl hover:shadow-2xl flex-col cursor-pointer items-center justify-center w-full bg-blue-600'>
                        <span className="text-4xl rounded-2xl border-4 px-4 my-2 py-4">🧑🏻‍🎓</span>
                        <Link to='/student/addstudent'> <h1 className='text-3xl text-white my-4 mx-4 px-8 py-2 hover:bg-blue-500  rounded-md'>Add Student</h1> </Link>
                    </div>
                </div>
                <div className=' flex  items-center max-w-xs  transition duration-150 ease-out hover:ease-in max-h-max'>
                    <div className='flex py-2 rounded-xl shadow-xl hover:shadow-2xl flex-col cursor-pointer items-center justify-center w-full bg-blue-600'>
                        <span className="text-4xl rounded-2xl border-4 px-4 my-2 py-4"> 👨🏻‍👩🏻‍👧🏻‍👦🏻 </span>
                        <Link to='/student'> <h1 className='text-3xl text-white my-4 mx-4 px-8 py-2 hover:bg-blue-500 rounded-md'>
                            All Students
                        </h1>
                        </Link>
                    </div>
                </div>
                <div className=' flex items-center max-w-xs  transition duration-150 ease-out hover:ease-in max-h-max'>
                    <div className='flex py-2 rounded-xl shadow-xl hover:shadow-2xl flex-col cursor-pointer items-center justify-center w-full bg-blue-600'>
                        <span className="text-4xl rounded-2xl border-4 px-4 my-2 py-4">📑</span>
                        <Link to='/course/addcourse'> <h1 className='text-3xl text-white my-4 mx-4 px-8 py-2 hover:bg-blue-500  rounded-md'>Add Course</h1></Link>
                    </div>
                </div>
                <div className=' flex items-center max-w-xs  transition duration-150 ease-out hover:ease-in max-h-max'>
                    <div className='flex py-2 rounded-xl shadow-xl hover:shadow-2xl flex-col cursor-pointer items-center justify-center w-full bg-blue-600'>
                        <span className="text-4xl rounded-2xl border-4 px-4 my-2 py-4">📖</span>
                        <Link to='/course'> <h1 className='text-3xl text-white my-4 mx-4 px-8 py-2 hover:bg-blue-500  rounded-md'>All Courses</h1>  </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home