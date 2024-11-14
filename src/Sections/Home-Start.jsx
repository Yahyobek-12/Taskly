import { Link } from "react-router-dom"
import dataTeam from '../assets/images/data-team.webp'

const HomeStart = () => {
  return (
    <div className="w-full md:h-[800px] lg:h-[780px] flex items-center justify-center px-4">
        <div>
            <div className="mt-6">
                <h1 className="md:text-6xl text-4xl font-bold text-center animate__animated animate__slideInDown">Si<span className="text-red-500">m</span>plify <span className="text-blue-500">T</span>asks, Sh<span className="text-yellow-400">a</span>re Ea<span className="text-green-700">s</span>ily</h1>
                <p className="text-center mt-4 text-xl font-medium animate__animated animate__slideInUp">Effortlessly manage your tasks, share images, and collaborate <br /> with others on Taskly.</p>
                <div className="text-center mt-6 animate__animated animate__backInLeft">
                    <Link to='/' className="py-2 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700">Get Started</Link>
                    <Link to='/' className="py-2 md:px-8 px-4 rounded-md md:ml-4 ml-2 text-blue-500 font-medium hover:bg-blue-100">Watch Demo</Link>
                </div>
            </div>
            <div id="home-start-img" className="animate__animated animate__fadeIn md:mt-6 mt-12">
                <img src={dataTeam} alt="data-team" className="w-[800px]" />
            </div>
        </div>
    </div>
  )
}

export default HomeStart