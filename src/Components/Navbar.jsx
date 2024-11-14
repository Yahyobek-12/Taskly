import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks } from "../Constants/Helper";
import { IoMenu } from "react-icons/io5";
import { CiSquareRemove } from "react-icons/ci";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const clickToggle = () => {
        setToggleNav(!toggleNav);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`w-full h-[65px] flex items-center md:justify-around justify-between px-6 fixed top-0 left-0 bg-white z-10 ${shadow ? 'shadow-md' : ''}`}>
                <Link to='/' className="text-3xl font-bold font-mono">Taskly</Link>
                <ul id="web-ul" className="hidden md:block">
                    {NavbarLinks.map((navbarlink, idx) => (
                        <NavLink to={navbarlink.link} key={idx} className='px-4 py-2 hover:bg-gray-100 ml-2 rounded-md'>{navbarlink.label}</NavLink>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <Link to='' className="py-2 px-3">Login</Link>
                    <Link to='' className="py-2 px-3 bg-black rounded-md ml-4 text-white hover:opacity-75">Get Taskly</Link>                
                </div>
                {toggleNav ? <CiSquareRemove onClick={clickToggle} className="text-3xl cursor-pointer block md:hidden" /> : <IoMenu onClick={clickToggle} className="text-3xl cursor-pointer block md:hidden" />}
            </div>

            <div className={`${toggleNav ? 'block' : 'hidden'} md:hidden`}>
                <div id="menu-ul" className="fixed top-[65px] left-0 w-full h-[400px] py-4 px-7 border-t-2 border-gray-100 bg-white z-10 shadow-xl">
                    <ul>
                        {NavbarLinks.map((navbarlink, idx) => (
                            <Link to={navbarlink.link} key={idx} className="block mt-6">{navbarlink.label}</Link>
                        ))}
                    </ul>
                    <hr className="mt-6" />
                    <div className="mt-6">
                        <Link to='' className="w-full h-[40px] flex items-center justify-center rounded-md border-2 border-gray-100 hover:bg-gray-100 mb-4">Login</Link>
                        <Link to='' className="w-full h-[40px] bg-black flex items-center justify-center rounded-md text-white hover:opacity-80">Get Taskly</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
