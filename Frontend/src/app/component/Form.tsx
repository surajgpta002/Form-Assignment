import React from "react";
import Mainform from "./MainForm";

const Form = () => {
  return (
    <div className="bg-white p-4 h-[100vh] relative">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-4xl bg-blue-700 rounded-lg text-white px-2  text-center">
            e
          </h1>
          <div className="flex flex-col ">
            <h1 className="font-semibold text-lg leading-none ">The empact </h1>
            <h1 className="font-semibold text-lg leading-none">Project</h1>
          </div>
        </div>
        <div className="flex gap-3 ">
          <div className="flex gap-1 items-center">
            <h1 className="bg-blue-500 rounded-full px-1 text-white text-xs">
              1
            </h1>
            <h1 className="text-xs">Organisation Details</h1>
          </div>
          <div className="flex gap-1 items-center">
            <h1 className="bg-gray-300 rounded-full px-1 text-xs">2</h1>
            <h1 className="text-xs text-gray-400">Bank Details</h1>
          </div>
          <div className="flex gap-1 items-center">
            <h1 className="bg-gray-300 rounded-full px-1 text-xs">3</h1>
            <h1 className="text-xs text-gray-400">Documents Upload</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-semibold  text-base">Setting up your account</h1>
          <h1 className="text-[10px] text-gray-500">
            We need few details of your NGO
          </h1>
        </div>
        <Mainform />
      </div>
    </div>
  );
};

export default Form;
