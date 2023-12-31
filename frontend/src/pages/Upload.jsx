import React, { useEffect, useState } from "react";
import ApnaButton from "../components/ApnaButton";
import toast, { Toaster } from 'react-hot-toast';
import clipIcon from "../assets/paperclip.svg";
import uuid from 'react-uuid';
import UserAuth from "../context/UserAuth";
import { Navbar } from "../components/navbar";

function UploadPage() {
  const [file, setFile] = useState();
  const { user } = UserAuth()

  const [formData, setFormData] = useState({
    caption: "",
    location: "",
    id: uuid(),
    email: user.email,
    tags: [],
  });


  async function handleSubmit() {
    console.log("onsubmit");
    const sendingData = new FormData()
    sendingData.append("image", file)
    // console.log(user.email)
    console.log(formData)
    sendingData.append('objectData', JSON.stringify(formData))

    fetch("http://localhost:3001/image/imagePost", {
      method: "POST",
      body: sendingData
    }).then((res) => {
      toast.success('Successfully uploaded!')
      console.log(res)
    })
  }

  return (
    <>
      <Navbar />
      <Toaster/>
      <div className=" min-h-screen flex items-center">
        <div className="  w-full flex justify-center items-center">
          <div className="bg-slate-200 w-[24em] h-[30em] flex justify-center items-center border-2 border-gray-400 rounded-3xl">
            <label className="cursor-grab">
              <img className="h-20 mr-2" src={clipIcon} />
              <input
                className="hidden"
                type="file"
                name="image"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>
        <div className="h-auto w-full flex flex-col items-center ">
          <label className="p-2 text-xl mt-5 text-center">Caption</label>
          <input
            className="w-80 rounded-md p-2 bg-slate-200"
            type="text"
            placeholder="A cat standing in the rain"
            onChange={(e) => setFormData((prev) => {
              return {
                ...prev,
                caption: e.target.value
              }
            })}
          />
          <label className="p-2 text-xl mt-5 text-center">Location</label>
          <input
            className="w-80 rounded-md p-2 bg-slate-200"
            type="text"
            placeholder="Eg. Mumbai"
            onChange={(e) => setFormData((prev) => {
              return {
                ...prev,
                location: e.target.value
              }
            })}
          />
          <label className="p-2 text-xl mt-5 text-center">Price</label>
          <input
            className="w-80 rounded-md p-2 bg-slate-200"
            type="text"
            placeholder=""

          />
          <label className="p-2 text-xl mt-5 text-center">Price Per View</label>
          <input
            className="w-80 rounded-md p-2 bg-slate-200"
            type="text"
            placeholder=""

          />
          <label className="p-2 text-xl mt-5 text-center">Tags</label>
          <input
            className="w-80 rounded-md p-2 mb-5 bg-slate-200"
            type="text"
            placeholder="Enter comma seperated tags"
            onChange={(e) => setFormData((prev) => {
              return {
                ...prev,
                tags: e.target.value.split(',')
              }
            })}
          />
          <ApnaButton text="Submit" onClick={() => handleSubmit()} />
        </div>
      </div>
    </>
  );
}

export default UploadPage;
