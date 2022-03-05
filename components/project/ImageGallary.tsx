import { useState } from "react"

interface Props {
  images: string[]
}

export const ImageGallary = (props: Props) => {
  console.log(props.images, "props.imaegs")
  const productImages = [
    ...props.images
  ]

  const [currentImg, setCureentImg] = useState(0)

  const handleNext = () => {
    setCureentImg((prev) => {
      if (prev == productImages.length - 1) {
        return 0
      } else {
        return prev + 1;
      }
    })
  }
  const handleBack = () => {
    setCureentImg((prev) => {
      prev = productImages.length - 1;
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    })
  }

  return (
    <>
      <div className=" relative h-[500px] w-full flex-shrink-0">
        <div className="overflow-hidden flex w-full h-full">

          {productImages.length > 0 ?

            <img src={productImages[currentImg]} alt="images" className="w-full h-full" />
            : <div className="flex justify-center items-center h-full w-full text-black">
              <p className="text-[2rem]">No images</p>
            </div>
          }

        </div>

        <div className="absolute top-0 left-0 bottom-0  w-[50px] flex items-center">
          <button onClick={handleBack} className="w-[50px] text-center  bg-gray-400 h-[50px] rounded-full  text-white text-[2rem] ">
            {/* <img src="/icon/back.png" /> */}
            {"<"}
          </button>

        </div>
        <div className="absolute top-0 right-0 bottom-0  w-[50px] flex items-center">
          <button onClick={handleNext} className="w-[50px] bg-gray-400 h-[50px] rounded-full  text-white text-[2rem] ">
            {/* <img className="scale-x-[-1]" src="/icon/back.png" alt="" /> */}
            {">"}
          </button>

        </div>
      </div>
    </>
  )
}
