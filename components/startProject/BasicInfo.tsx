type Props = {
  register;
};

const classes = {
  commonLabel: "font-semibold mb-3",
  commonInput: "bg-transparent border border-white py-2 px-2 mb-4 rounded",
  sectionTitle: "font-semibold text-xl mb-4",
  sectionDescription: "text-sm w-7/12",
};

const BasicInfo = ({ register }: Props) => {
  return (
    <>
      <div className="flex w-full mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Project Title</div>
          <p className={`${classes.sectionDescription}`}>
            Write a clear, brief title and subtitle to help people quickly
            understand your project. Both will appear on your project and
            pre-launch pages.
            <br />
            <br />
            Potential backers will also see them if your project appears on
            category pages, search results
          </p>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className={`${classes.commonLabel}`}>
            Title
          </label>
          <input
            type="text"
            className={`${classes.commonInput}`}
            {...register("title")}
          />
          <label htmlFor="" className={`${classes.commonLabel}`}>
            Subtitle
          </label>
          <input
            type="text"
            className={`${classes.commonInput}`}
            {...register("subtitle")}
          />
        </div>
      </div>
      <div className="w-full flex mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Project Category</div>
          <p className={`${classes.sectionDescription}`}>
            Choose the category that most closely aligns with your project.
            <br />
            Think of where backers may look to find it. Reach a more specific
            community by also choosing a subcategory.
            <br />
            You’ll be able to change the category and subcategory even after
            your project is live.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className={`${classes.commonLabel}`}>
            Category
          </label>
          <select
            name=""
            id=""
            className={`${classes.commonInput}`}
            {...register("category")}>
            <option value=""></option>
            <option value="test">Test</option>
            <option value="test2">Test 2</option>
          </select>
        </div>
      </div>
      <div className="w-full flex mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Profile Image</div>
          <p className={`${classes.sectionDescription}`}>
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
        <div className="w-full">
          <div className="mt-20px border-2 border-white relative">
            <input
              className="absolute m-0 p-0 w-full h-full outline-none opacity-0 cursor-pointer"
              type="file"
              name="profile_image"
              {...register("profile_image")}
              // onchange={() => {}}
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
      <div className="w-full flex mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Images</div>
          <p className={`${classes.sectionDescription}`}>
            Upload 4-5 image that clearly represents your project. Choose one
            that looks good at different sizes—it’ll appear on your project
            page, across the throwitin website and mobile apps, and (when
            shared) on social channels.
            <br />
            Your image should be at least 1024x576 pixels. It will be cropped to
            a 16:9 ratio.
          </p>
        </div>
        <div className="w-full">
          <div className="mt-20px border-2 border-white relative cursor-pointer">
            <input
              className="absolute m-0 p-0 w-full h-full outline-none opacity-0"
              type="file"
              {...register("images")}
              // onchange={() => {}}
              accept="image/*"
              multiple
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
      <div className="w-full flex mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Social</div>
          <p className={`${classes.sectionDescription}`}>
            Add links to the projects website, other social media handles and a
            youtube video link that will contain a demo of the project.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col mb-3">
            <label htmlFor="website_url" className={`${classes.commonLabel}`}>
              Website URL
            </label>
            <input
              type="text"
              className={`${classes.commonInput}`}
              {...register("website_url")}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="video_link" className={`${classes.commonLabel}`}>
              Video link
            </label>
            <input
              type="text"
              className={`${classes.commonInput}`}
              {...register("video_link")}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="twitter" className={`${classes.commonLabel}`}>
              Twitter
            </label>
            <input
              type="text"
              className={`${classes.commonInput}`}
              {...register("creators_twitter")}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="discord" className={`${classes.commonLabel}`}>
              Discord
            </label>
            <input
              type="text"
              className={`${classes.commonInput}`}
              {...register("discord")}
            />
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full flex mb-16">
        <div className="w-full">
          <div className={`${classes.sectionTitle}`}>Campaign duration</div>
          <p className={`${classes.sectionDescription}`}>
            Set a time limit for your campaign. You won’t be able to change this
            after you launch.
          </p>
        </div>
        <div className="w-full flex flex-col space-y-6">
          {/* date */}
          <div className="flex space-x-4 items-center">
            <div className="flex flex-col">
              <div className={`${classes.commonLabel}`}>Day</div>
              <div className="border-2 rounded py-3 px-4">20</div>
            </div>
            <div className="flex flex-col">
              <div className={`${classes.commonLabel}`}>Month</div>
              <div className="border-2 rounded py-3 px-4">01</div>
            </div>
            <div className="flex flex-col">
              <div className={`${classes.commonLabel}`}>Year</div>
              <div className="border-2 rounded py-3 px-4">2022</div>
            </div>

            <div className="border-2 border-white relative cursor-pointer rounded mt-8">
              <input
                className="absolute m-0 p-0 w-full h-full outline-none opacity-0 cursor-pointer"
                type="date"
                {...register("date", { valueAsDate: true })}
                // onchange={() => {}}
                value=""
              />
              <div className="py-3 px-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
