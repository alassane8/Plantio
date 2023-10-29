import Link from "next/link";
import NavigationBar from "../component/navbar";

export default function about() {
  return (
    
  <div>
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">
        About Us
      </h1>
      
  <NavigationBar />
      <Link href="/login">
        <button className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
        Home Page
        </button>
      </Link>
    </div>
  </div>
  )
}