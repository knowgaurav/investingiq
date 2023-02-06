import React from 'react'

const ProfileForm = () => {
  return (
    <form className="flex flex-col gap-5 text-gray-500">
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Username</div>
        <input
          type="text"
          disabled
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Full name</div>
        <input
          type="text"
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Email address</div>
        <input
          type="text"
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Password</div>
        <input
          type="password"
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
    </form>
  );
}

export default ProfileForm