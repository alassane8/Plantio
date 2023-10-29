import Link from "next/link";
import NavigationBar from "../component/navbar";
import Header from '../component/header';
import Footer from '../component/footer';

export default function login() {

  return (
    <div>
        <div className="bg-blue-900 h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">Login</h1>
            <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-blue-300 font-bold">Enter Username :</p>
            </div> 
            <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-blue-300 font-bold">Enter Password :</p>
            </div> 
            <Link href="/createAccount">
              <button className="hover:bg-blue-600 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                Create Account...
              </button>
            </Link>
        </div>
    </div>
  )
}