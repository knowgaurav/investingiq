import React from "react";
import * as Icon from "react-feather";
import DeleteAccount from "./components/DeleteAccount";
import ProfileForm from "./components/ProfileForm";

const Settings = () => {
  return (
    <div className="w-1/2 flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              alt="profile"
              className="w-28 h-28 rounded-full"
              src="http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg"
            />
            <div className="absolute right-0 bottom-0.5 w-8 h-8 bg-gray-100 rounded-full cursor-pointer flex items-center justify-center border">
              <Icon.Edit3 size={18} className='text-gray-500' />
            </div>
          </div>
          <div>
            <div className="font-medium mt-2 text-lg text-gray-500">
              Priyanshu Bhardwaj
            </div>
            <div className="italic">priyanshu1912</div>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="bg-gray-200 font-medium py-2 px-3 rounded-md text-xs">
            Cancel
          </button>
          <button className="bg-blue-800 font-medium text-white py-2 px-3 rounded-md text-xs">
            Save Changes
          </button>
        </div>
      </div>
      <ProfileForm />
      <DeleteAccount />
    </div>
  );
};

export default Settings;
