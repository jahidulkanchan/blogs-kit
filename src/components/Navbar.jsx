
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async() => {
    const {getUser} = getKindeServerSession();
    const  user  = await getUser();
    console.log(user);
    return (
      <main className="container bg-black py-4 text-white mx-auto">
        <ul className="flex justify-center gap-5 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {user?  <li>
            <Link href="/logout">Log Out</Link>
          </li> : <li>
            <Link href="/login">Log In</Link>
          </li> }
        </ul>
      </main>
    );
};

export default Navbar;
