import {resources} from "../../../assets/resources.ts";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function Header() {
    const {loginWithRedirect, user, isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            console.log(JSON.stringify(user))
        }
    }, [isAuthenticated, user])


    return (
        <header className=" relative flex justify-center">
            <nav className="flex absolute items-center justify-between pt-6 container mx-auto ">
                <img src={resources.logo} alt="logo" className="w-20 h-20"/>

                <div className="text-lg text-gray-100 hidden lg:flex">
                    <a href="#" className="block mt-4 lg:inline-block  lg:mt-0 mr-10">
                        Home
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                        Pricing
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                        Portfolio
                    </a>
                    <a href="#" className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10">
                        Company
                    </a>
                    <a href="#" className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0">
                        Contact
                    </a>
                </div>

                <div className="flex items-center">
                    {isAuthenticated ? < div className="mr-5 lg:mr-0">
                            <button onClick={() => navigate("/app/home")}
                                    className="py-2  sec-bg-dark  px-6 rounded-md text-white hover:text-gray-700 text-lg">Dashboard
                            </button>
                        </div> :
                        <div className="mr-5 lg:mr-0">
                            <button onClick={() => loginWithRedirect()}
                                    className="py-2 px-6 rounded-md text-white hover:text-gray-700 text-lg">Sign in
                            </button>
                            <button className="py-2 px-6 sec-bg-dark text-white  rounded-md  text-lg">Sign up</button>
                        </div>
                    }

                </div>
            </nav>
        </header>

    )
}