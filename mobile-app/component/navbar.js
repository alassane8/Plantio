import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="bg-pink-400 p-4">
        <div className="border border-blue-300 p-4 rounded-lg">
            <div className="space-x-4">
                <aside class="w-64 bg-gray-800 text-white p-4">
                    <h2 class="text-2xl font-semibold">Sidebar</h2>
                    <ul class="mt-4 space-y-2">
                    <li><a href="/about" class="hover:text-blue-400">About us</a></li>
                    <li><a href="/contacts"class="hover:text-blue-400">Contatcts</a></li>
                    <li><a href="/home" class="hover:text-blue-400">Home</a></li>
                    <li><a href="/login" class="hover:text-blue-400">Login</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    </nav>
  )
}