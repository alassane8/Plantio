import Link from "next/link";
import NavigationBar from "../component/navbar";

export default function createAccount() {
  return (
    <div>
        <div className = "bg-blue-900 h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold text-gray-100 mb-4">Create Account</h1>
            <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-blue-300 font-bold">Enter Password :</p>
            </div> <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-blue-300 font-bold">Enter Username :</p>
            </div> 
            <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-blue-300 font-bold">Enter email :</p>
            </div>
            <Link href="/home">
                <button className="hover:bg-blue-600 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                    Create Account
                </button>
            </Link>
            <div class="w-64 h-64 mx-auto">
                <img src="your-image.jpg" alt="Your Image" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}