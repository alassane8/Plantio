import Link from "next/link";
import NavigationBar from "../component/navbar";
import Header from '../component/header';
import Footer from '../component/footer';

export default function login() {
  return (
    <div>
        <NavigationBar />
        <div className="bg-gray-100 h-screen flex flex-col items-center">
            <Header />
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to the Home Page</h1>
            <div className="border border-gray-300 p-4 rounded-lg">
                <p className="text-gray-600">More content goes here...</p>
            </div>      
        <Footer />
        </div>
    </div>
  )
}