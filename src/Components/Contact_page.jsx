import { BiSolidMessageDetail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact_page = () => {
  return (
    <>
      <div className="flex ">
        {/* ----------------------------Contact form_page-------------------- */}
        <div className=" p-1 w-[50%]">
          <p className="flex justify-between">
            <button className="bg-black text-white rounded-sm text-base flex w-[10rem] h-[1.5rem] ml-2">
              <span className="pl-1 pt-[5px] pr-1">
                <BiSolidMessageDetail />
              </span>
              via support chat
            </button>

            <button className="bg-black text-white rounded-sm text-base flex w-[10rem] h-[1.5rem] ml-2 ">
              <span className="pl-1 pt-[5px] pr-1 ml-10">
                <FaPhone />
              </span>
              via call
            </button>
          </p>
          <button className="bg-white border-2 border-gray-400 text-black rounded-sm text-base flex w-[27.5rem] h-[1.6rem] mt-2 ml-2">
            <span className=" pt-[5px] pr-1 pl-32">
              <BiSolidMessageDetail />
            </span>
            via Email Form
          </button>

          {/* ------------------------User Form-------------------- */}
          <form action="">
            <p className="flex flex-col relative mt-[1rem]">
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

            <p className="flex flex-col relative mt-[1rem]">
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

            <p className="flex flex-col relative mt-[1rem] ">
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

            <p className="flex justify-end mt-3">
              <button
                type="submit"
                className="bg-black text-white p-1 rounded-md w-[7.25rem]"
              >
                Submit
              </button>
            </p>
          </form>
        </div>

        {/* ---------------------------------Contact-Page Images--------------------- */}
        <div className=" w-[50%]">
        <img className="w-full h-72" src="../Images/Contact_women-image.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Contact_page;
