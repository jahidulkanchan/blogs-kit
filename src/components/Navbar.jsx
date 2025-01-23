import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

const Navbar = async() => {
    const {getUser} = getKindeServerSession();
    const  user  = await getUser();
    return (
      <main className="container flex justify-between items-center px-8 shadow bg-slate-50 py-5 mx-auto">
        <div></div>
        <ul className="flex justify-center text-black font-semibold gap-5 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {user? <Link href="/profile">Profile</Link> : <LoginLink>Profile</LoginLink> }
          </li>
        </ul>
        <div>
        {user? 
            <LogoutLink><button className="px-8 py-2 font-semibold rounded bg-blue-400 text-slate-50" >Logout</button></LogoutLink>:
            <LoginLink postLoginRedirectURL="/profile">
              <button className="px-8 py-2 font-semibold rounded bg-blue-400 text-slate-50">Login</button>
            </LoginLink>
          }
        </div>
      </main>
    );
};

export default Navbar;
