import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

const Navbar = async() => {
    const {getUser} = getKindeServerSession();
    const  user  = await getUser();
    console.log(user);
    return (
      <main className="container bg-slate-300 py-5 mx-auto">
        <ul className="flex justify-center gap-5 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {user? <Link href="/profile">Profile</Link> : <LoginLink>Profile</LoginLink> }
          </li>
          {user? 
          <li>
            <LogoutLink><button>logout</button></LogoutLink>
          </li> : 
          <li>
            <LoginLink postLoginRedirectURL="/profile">
              <button>Login</button>
            </LoginLink>
          </li>
          }
        </ul>
      </main>
    );
};

export default Navbar;
