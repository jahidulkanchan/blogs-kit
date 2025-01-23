import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const ProfilePage = async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const {given_name, family_name,email,picture} = user || {}
  return (
    <>
      <main className="flex flex-col text-black bg-slate-50 justify-center min-h-[500px] items-center">
          <h2 className="text-3xl  mb-8">Welcome To <span className="text-blue-400 font-bold">Your Profile!</span></h2>
         <div className="card w-10/12 flex flex-col justify-center items-center px-5 py-5 shadow-2xl shadow-blue-100 border rounded-2xl md:w-1/3 min-h-[200px]">
            <Image className="rounded-full mb-3 ring" src={picture || ''} alt='Profile' width={80} height={80} ></Image>
            <h2 className="flex items-center gap-2 text-2xl font-medium mb-2" ><FaUserCircle />{given_name} {family_name}</h2>
            <p className="flex items-center gap-2 text-sm text-slate-600"><FaEnvelope />{email}</p>
         </div>
      </main>
    </>
  );
};

export default ProfilePage;