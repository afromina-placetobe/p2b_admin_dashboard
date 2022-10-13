import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '@mui/material';
const UserProfile = () => {
  // const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
   
      </div>
      <div className="flex gap-5 items-center mt-6 border-color  pb-6">
     
      </div>
  
      <div className="mt-5">
        <Button
          color="white"
          // bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
