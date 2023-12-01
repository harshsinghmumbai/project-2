import { BiSolidMessageDetail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact_page = () => {
  return (
    <>
      <div className="flex ">
        {/* ----------------------------Contact form_page-------------------- */}
        <div className=" p-1 w-[50%]">
          <p className="flex justify-between w-[22rem]">
            <button className="bg-black text-white rounded-sm text-base flex w-[10rem] h-[1.5rem] ml-2 mt-2">
              <span className="pl-1 pt-[5px] pr-1">
                <BiSolidMessageDetail />
              </span>
              via support chat
            </button>

            <button className="bg-black text-white rounded-sm text-base flex w-[10rem] h-[1.5rem] ml-2 mt-2 ">
              <span className="pl-1 pt-[5px] pr-1 ml-10">
                <FaPhone />
              </span>
              via call
            </button>
          </p>

          <button className="bg-white border-2 border-gray-400 text-black text-base flex w-[21.8rem] h-[1.9rem] mt-4 ml-2 rounded-xl hover:bg-blue-300 ">
            <span className=" pt-[5px] pr-1 pl-24">
              <BiSolidMessageDetail />
            </span>
            <span className="text-lg"> via Email Form</span>
          </button>

          {/* ------------------------User Form-------------------- */}
          <form action="">
            <p className="flex flex-col relative mt-[1rem] w-[22rem]">
              <label
                htmlFor="text"
                className="absolute top-[-13px] left-2 bg-white h-[1.4rem]"
              >
                Name
              </label>
              <input
                className="border-2 border-black p-1"
                type="text"
                id="text"
              />
            </p>

            <p className="flex flex-col relative mt-[2rem] w-[21.5rem] ">
              <label
                htmlFor="email"
                className="absolute top-[-13px] left-2 bg-white"
              >
                Email
              </label>
              <input
                className="border-2 border-black p-1"
                type="email"
                id="email h-[1.4rem]"
              />
            </p>

            <p className="flex flex-col relative mt-[2rem] w-[21.5rem] ">
              <label
                htmlFor="email"
                className="absolute top-[-11px] left-2 bg-white text-base"
              >
                TEXT
              </label>
              <textarea
                id="message"
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 border-2 border-black "
              ></textarea>
            </p>

            <p className="flex justify-end mt-3 w-[21.5rem]">
              <button
                type="submit"
                className="bg-black text-white p-1 rounded-md w-[4rem]"
              >
                Submit
              </button>
            </p>
          </form>
        </div>

        {/* ---------------------------------Contact-Page Images--------------------- */}
        <div className=" w-[80%]">
          <img
            className="w-full h-[19rem] object-cover"
            src="../Images/Contact_women-image.svg"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Contact_page;
