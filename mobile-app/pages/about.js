import Link from "next/link";
import Image from 'next/image';
import profilePic from 'images/pdp.png';
import Header from '../component/header';
import UserInput from '../component/userInput';
import NavigationBar from "../component/navbar";

export default function about() {
  return (
  <div className ="bg-gray-600 absolute inset-0 h-screen flex flex-col">
    <Link href="/home">
      <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
        home
      </button>
    </Link>
    <div className="bg-gray-600 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-100 mb-4">
        About Us
      </h1>
      <NavigationBar />
    </div>
  </div>
  )
}