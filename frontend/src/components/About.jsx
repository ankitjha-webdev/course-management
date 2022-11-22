import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="max-w-7xl mx-auto justify-center my-16">
      <div className="card px-20 rounded-lg bg-gray-50 w-auto shadow-2xl hover:shadow-xl ">
        <h1 className="  my-5 pt-10 font-extrabold text-6xl text-blue-500 -skew-x-3 -skew-y-2 drop-shadow-2xl"> About Me</h1>
        <div className="flex pb-10 flex-col lg:flex-row justify-between items-center mt-16">
          <p className="font-medium text-gray-500"> <img src="https://ankitkumar.tech/static/media/profilepic.10d64d2bd46a177bb208.jpg" className='w-16 h-16 mb-3 drop-shadow-xl rounded-full' alt='' />  My name is <span className="font-bold"> <small className="font-extrabold text-xl text-blue-500">H</small> arendra <small className="font-extrabold text-xl text-blue-500">K</small> umar</span>. I am currently in 7 <sup>th</sup> semester. Looking for an opportunity to excel in software carrier. My aim is to build a successful career in the industry which will provide me with ample opportunities and knowledge, along with a professional environment and experience of working in various positions in my field. I wish to work in an organization where the opportunity for growth & learning are embraced. My strong belief is in hard work. It helps me in overcoming the hurdles. The key skill areas that I have gained during my training are project management skills like planning, organizing and coordination skills</p>
        </div>
        <div className="">
          <h3 className="text-blue-500 text-2xl text-bold ">Links to connect:</h3>
          <ul className="flex flex-col lg:flex-row justify-between items-center mt-4 py-8">
            <li className='font-bold text-md text-gray-700'>Portfolio: <Link href="https://harendrakumar.tech/" className="text-blue-300 hover:text-blue-500" target="_blank">My Portfolio </Link> </li>
            <li className='font-bold text-md text-gray-700'>Github: <Link to="https://github.com/Harendra84" className="text-blue-300 hover:text-blue-500" target="_blank">Connect with Github</Link> </li>
            <li className='font-bold text-md text-gray-700'>Linkedin: <Link to="https://www.linkedin.com/in/harendrakumarcse/" target="_blank" className='text-blue-300 hover:text-blue-500' rel="noopener noreferrer">Connect with Linkedin</Link> </li>
            <li className='font-bold text-md text-gray-700'>Instagram: <Link to="https://www.instagram.com/arendrakumarcse" target="_blank" className='text-blue-300 hover:text-blue-500'>Connect with Instagram</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About