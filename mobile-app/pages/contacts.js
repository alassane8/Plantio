
import Link from "next/link";
export default function contacts() {
  return (
    <div>
      <div className="bg-gray-100 h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <Link href="/home">
          <button className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
          Home Page
          </button>
        </Link>
        <script src="script.js"></script>
    </div>
    </div>
  )
}