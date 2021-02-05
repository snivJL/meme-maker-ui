import React from "react";

const uploadImage = (file) => {
  if (file) {
    const formData = new formData();
    formData.append("image", file);
    // formData.append("text", text);
    //TODO : Create form state. append text and options(?) to formdata before sending to the server
  }
};

const HomePage = () => {
  return (
    <div className="h-100 w-full flex justify-center items-center">
      <input onChange={uploadImage} type="file" name="" id="" />
    </div>
  );
};

export default HomePage;
