import React, { useState } from "react";

type Props = {
  register: any;
};

const Governance = ({ register }: Props) => {
  const [projectImage, setProjectImage] = useState('')
  
  const handleImage = (e: any) => {
    console.log(e.target.files)
    const file = e.target.files[0] as File
    setProjectImage(URL.createObjectURL(file))
  }

  return (
    <>
      {/* section 1 */}
      <div className="w-full flex mb-16">
        {/* left */}
        <div className="w-full">
          <div className="font-semibold text-xl mb-4">Nft Image</div>
          <p className="text-sm w-7/12">
            Add an image that clearly represents your project. Choose one that
            looks good at different sizes—it’ll appear on your project page,
            across the throwitin website and mobile apps, and (when shared) on
            social channels.
            <br />
            <br />
            Your image should be at least 1024x576 pixels. It will be cropped to
            a 16:9 ratio.
            <br />
            <br />
            Avoid images with banners, badges, or text—they are illegible at
            smaller sizes.
          </p>
        </div>
        {/* right */}
        <div className="w-full">
          <div className="mt-20px border-2 border-white relative cursor-pointer">
            {projectImage !== '' && (
              <img
                src={projectImage}
                className="select-none absolute z-50 m-0 h-full w-full cursor-pointer select-none rounded-full p-0 outline-none"
              />
            )}
            <input
              className="absolute m-0 p-0 w-full h-full outline-none opacity-0"
              type="file"
              {...register("nft_image")}
              onChange={(e) => handleImage(e)}
              accept="image/*"
            />
            <div className="py-20 text-center">
              <h3 className="uppercase">
                Drag and drop image or select a file
              </h3>
              <p className="text-xs opacity-50 select-none">
                Image must be *.jpg or *.png and no longer than
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Governance;
