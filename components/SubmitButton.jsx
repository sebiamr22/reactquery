import { React } from 'react';

const SubmitButton = () => {
  return (
    <input
      className=" transition ease-in-out  flex justify-center 
    mx-auto max-w-full items-center cursor-pointer bg-gradient-to-r 
    shadow-lg from-green-400 to-blue-500 hover:from-pink-500
    hover:to-yellow-500 text-white font-bold py-2 px-4 rounded 
    "
      type="submit"
      value="Submit"
    ></input>
  );
};

export default SubmitButton;
