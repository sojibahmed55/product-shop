// "use client"
// import Link from "next/link"
// import { useSession, signOut } from "next-auth/react"

// export default function Navbar() {
//   const { data: session } = useSession()

//   return (
//     <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
//       <div className="max-w-[1700px] mx-auto flex justify-between items-center px-8 py-4">
//         {/* Logo */}
//         <Link href="/">
//           <div className="flex items-center gap-3 cursor-pointer">
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]"
//             >
//               <circle cx="12" cy="12" r="10" fill="currentColor" />
//               <text
//                 x="12"
//                 y="16"
//                 textAnchor="middle"
//                 fontSize="10"
//                 fill="#fff"
//                 className="font-bold"
//               >
//                 MPS
//               </text>
//             </svg>
//             <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
//               My Product Shop
//             </h1>
//           </div>
//         </Link>

//         {/* Menu */}
//         <ul className="flex gap-10 text-lg font-semibold items-center">
//           <li>
//             <Link
//               href="/"
//               className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/products"
//               className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
//             >
//              All Products
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/add-product"
//               className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
//             >
//               Add Products
//             </Link>
//           </li>

//           {/* Login link if not logged in */}
//           {!session && (
//             <li>
//               <Link
//                 href="/login"
//                 className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:from-purple-600 hover:to-pink-500 transition text-white font-semibold"
//               >
//                 Login
//               </Link>
//             </li>
//           )}

//           {/* User info & Sign out if logged in */}
//           {session && (
//             <li className="flex items-center gap-4">
//               {session.user?.image && (
//                 <img
//                   src={session.user.image}
//                   alt="avatar"
//                   className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md"
//                 />
//               )}
//               <span className="font-semibold text-sm text-gray-100">
//                 {session.user?.name || session.user?.email}
//               </span>
//               <button
//                 onClick={() => signOut()}
//                 className="ml-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:from-cyan-500 hover:to-purple-600 transition"
//               >
//                 Sign out
//               </button>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   )
// }
"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="10"
                fill="#fff"
                className="font-bold"
              >
                MPS
              </text>
            </svg>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
              My Product Shop
            </h1>
          </div>
        </Link>

        {/* Menu */}
        <ul className="flex gap-10 text-lg font-semibold items-center">
          <li>
            <Link
              href="/"
              className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              href="/add-product"
              className="relative px-2 py-1 transition hover:scale-110 hover:text-cyan-400"
            >
              Add Products
            </Link>
          </li>

          {/* Login & Register buttons if not logged in */}
          {!session && (
            <li className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:from-purple-600 hover:to-pink-500 transition text-white font-semibold"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:from-blue-600 hover:to-cyan-500 transition text-white font-semibold"
              >
                Register
              </Link>
            </li>
          )}

          {/* User info & Sign out if logged in */}
          {session && (
            <li className="flex items-center gap-4">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md"
                />
              )}
              <span className="font-semibold text-sm text-gray-100">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="ml-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:from-cyan-500 hover:to-purple-600 transition"
              >
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
