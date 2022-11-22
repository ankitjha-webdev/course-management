import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    const getUserName = localStorage.getItem("username");
    
    const navigate = useNavigate();

    // Handle Logout
    const handleLogout = () => {
        localStorage.clear();
        !getUserName && navigate("/login");
        window.location.reload();
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 text-gray-600 font-bold mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            <Button variant="text" className="text-sm text-inherit">
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Button>

            <Menu
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
            >
                <MenuHandler>
                    <Button variant="text" className="cursor-pointer text-inherit text-sm font-normal">
                        Student
                    </Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        <Button variant="text" className="text-sm text-inherit font-normal">
                            <Link to="/student/addstudent" className="flex items-center">
                                Add Student
                            </Link>
                        </Button>
                    </MenuItem>
                    {/* <MenuItem>
                        <Button variant="text" className="text-sm text-inherit font-normal">
                            <Link to="/student/addstudent" className="flex items-center">
                                Update Student
                            </Link>
                        </Button>
                    </MenuItem> */}
                    <MenuItem>
                        <Button variant="text" className="text-sm text-inherit font-normal">
                            <Link to="/student" className="flex items-center">
                                View Student
                            </Link>
                        </Button>
                    </MenuItem>
                </MenuList>
            </Menu>

            <Menu
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
            >
                <MenuHandler>
                    <Button variant="text" className="cursor-pointer text-inherit text-sm font-normal">
                        Course
                    </Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        <Button variant="text" className="cursor-pointer text-inherit text-sm  font-normal">
                            <Link to="/course/addcourse" className="flex items-center">
                                Add Course
                            </Link>
                        </Button>
                    </MenuItem>
                    {/* <MenuItem>
                    <Button variant="text" className="cursor-pointer text-inherit text-sm font-normal">
                        <Link to="/course/addcourse" className="flex items-center">
                            Update Course
                        </Link>
                    </Button>
                    </MenuItem> */}
                    <MenuItem>
                        <Button variant="text" className="cursor-pointer text-inherit text-sm font-normal">
                            <Link to="/course/" className="flex items-center">
                                View Course
                            </Link>
                        </Button>
                    </MenuItem>
                </MenuList>
            </Menu>

            <Button variant="text" className="text-sm text-inherit font-normal">
                <Link to="/about" className="flex items-center">
                    About
                </Link>
            </Button>

            <Button variant="text" className="text-sm text-inherit font-normal">
                <Link to="/contact" className="flex items-center">
                    Contact
                </Link>
            </Button>
        </ul>
    );

    return (
        <Navbar className="mx-auto border-b-4 rounded-md max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="p"
                    variant="small"
                    className="mr-4 text-xl cursor-pointer py-1.5 font-normal"
                >
                    <Link to="/" className="text-gray-500 font-medium"> <span className="text-blue-600  font-bold text-2xl">C</span>ourse <span className="text-blue-600 font-bold text-2xl ">M</span>anagement</Link>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                {
                    getUserName ? (
                        <Button onClick={handleLogout} variant="filled" size="md" className=" px-10 py-1 hidden rounded-md lg:inline-block">
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

                    ) : (
                        <Button variant="filled" size="md" className="hidden  rounded-md lg:inline-block">
                            <Link to={"/login"} className="flex items-center">
                                <span>Login</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3m18-6a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </Link>
                        </Button>
                    )

                }

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Login</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}