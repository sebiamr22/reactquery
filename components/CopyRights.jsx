import { React } from 'react';

const CopyRights = () => {
  return (
    <p className="my-4 font-bold text-center text-gray-500 text-xs">
      &copy;{new Date().getFullYear()} ChessCoders. All rights reserved.
    </p>
  );
};

export default CopyRights;
