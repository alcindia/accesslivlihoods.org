
import React from 'react';
import { AiFillFacebook, AiFillLinkedin,  AiFillInstagram,   AiFillYoutube } from 'react-icons/ai'

function SocialMedia() {
  return (
    <div className="text-white flex flex-grow z-50 top-4 flex-col justify-center h-screen fixed left-0">
      {/*V */}
      <ul className="">
        <li className="flex w-[160px]  justify-between items-center">
          <a className="flex h-[40px] text-lg justify-between bg-blue-600 ml-[-120px] hover:ml-[0px] duration-300 items-center w-full " 
          href="https://www.facebook.com/accesslivelihoods.org/"> Facebook <AiFillFacebook  size="35px"/>     </a>        
        </li>

        <li>
        <a className="flex h-[40px] text-lg justify-between bg-red-800 ml-[-120px] hover:ml-[0px] duration-300 items-center w-full " 
        href="https://youtube.com/@AccessLivelihoods"> YouTube <AiFillYoutube  size="35px"/>     </a>
        </li>

        <li>
        <a className="flex h-[40px] text-lg justify-between bg-blue-700 ml-[-120px] hover:ml-[0px] duration-300 items-center w-full " href="https://www.instagram.com/access.livelihoods/"> Instagram <AiFillInstagram  size="35px"/>     </a>
        </li>

        <li>
        <a className="flex h-[40px] text-lg justify-between bg-blue-900 ml-[-120px] hover:ml-[0px] duration-300 items-center w-full " 
        href="https://www.linkedin.com/company/access-livelihoods/"> LinkedIn <AiFillLinkedin  size="35px"/>     </a>
        </li>

      </ul>
      
</div>
  )
}

export default SocialMedia;