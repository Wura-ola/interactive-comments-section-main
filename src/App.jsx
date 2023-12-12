import React from "react";

import "./App.css";
import amyrobson from "./assets/avatars/image-amyrobson.png";
import plus from "./assets/icon-plus.svg";
import minus from "./assets/icon-minus.svg";
import reply from "./assets/icon-reply.svg";
import dele from "./assets/icon-delete.svg";
import edit from "./assets/icon-edit.svg";
import maxblagun from "./assets/avatars/image-maxblagun.png";
import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import juliusomo from "./assets/avatars/image-juliusomo.png";

function App() {
  return (
    <main className="  min-h-screen max-w-3xl mx-auto flex flex-col justify-center items-center font-rubik text-sm">
      <div className=" flex items-center bg-white-500 bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg">
        <div className="bg-lightGray p-4 py-5 rounded-lg mr-3">
          <img src={plus} alt="" className="pb-2" />
          <p className="">4</p>
          <img src={minus} alt="" className="pt-2" />
        </div>
        <div className="  text-start">
          <div className=" flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={amyrobson} alt="amyrobson" className="w-10   " />
                <span className=" text-darkBlue pr-2 pl-2">Amyrobson</span>
              </div>

              <span className="text-grayishBlue">1 Month ago</span>
            </div>
            <div className="flex items-center">
              <img src={reply} alt="" className="" />
              <h2 className="pl-3 text-blue-500">Reply</h2>
            </div>
          </div>
          <p className="text-grayishBlue">
            Impressive! Though it seem the rag feature could be improved But
            overall it
            {/* </p> */}
            {/* <p> */}
            look incridible. You've nailed the design and the responsiveness at
            various
            {/* </p> */}
            {/* <p> */}
            breakpoint works really well.
          </p>
        </div>
      </div>

      <div className=" flex items-center bg-white-500 mb-5 bg-white-500 shadow-sm shadow-gray-500 p-5 rounded-lg mt-3">
        <div className="bg-lightGray p-4 py-5 rounded-lg mr-3">
          <img src={plus} alt="" className="pb-2" />
          <p className="">4</p>
          <img src={minus} alt="" className="pt-2" />
        </div>
        <div className="text-start">
          <div className=" flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={maxblagun} alt="amyrobson" className="w-10  " />
                <span className="pr-2 pl-2 text-darkBlue">maxblagun</span>
              </div>

              <span className="text-grayishBlue">2 week ago</span>
            </div>
            <div className="flex items-center">
              <img src={reply} alt="" className="" />
              <h2 className="pl-3 text-blue-500">Reply</h2>
            </div>
          </div>
          <p className="text-grayishBlue">
            Impressive! Though it seem the rag feature could be improved But
            overall it
            {/* </p> */}
            {/* <p> */}
            look incridible. You've nailed the design and the responsiveness at
            various
            {/* </p> */}
            {/* <p> */}
            breakpoint works really well.
          </p>
        </div>
      </div>

      <div className=" flex justify-between">
        <div className="border-l-2 border-gray-400 h-18 flex justify-center mx-auto"></div>
        <div className="w-11/12">
          <div className=" flex items-center  bg-white-500 p-3 shadow-sm shadow-gray-500 rounded-lg mt-3  ">
            <div className="bg-lightGray p-4 py-5 rounded-lg mr-3">
              <img src={plus} alt="" className="pb-2" />
              <p className="">4</p>
              <img src={minus} alt="" className="pt-2" />
            </div>
            <div className="text-start">
              <div className=" flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      src={ramsesmiron}
                      alt="ramsesmiron"
                      className="w-10   "
                    />
                    <span className=" text-darkBlue pl-2 pr-2">
                      ramsesmiron
                    </span>
                  </div>

                  <span className="grayishBlue">1 week ago</span>
                </div>
                <div className="flex items-center">
                  <img src={reply} alt="" className="" />
                  <h2 className="pl-3 text-blue-500s">Reply</h2>
                </div>
              </div>
              <p className="text-grayishBlue">
                <a href="#" className="text-blue-500 pr-2 ">
                  @maxblagun
                </a>
                Impressive! Though it seem the rag feature could be improved But
                overall it
                {/* </p> */}
                {/* <p> */}
                look incridible. You've nailed the design and the responsiveness
                at various
                {/* </p> */}
                {/* <p> */}
                breakpoint works really well.
              </p>
            </div>
          </div>

          <div className="  flex items-center bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg mt-3  ">
            <div className="bg-lightGray p-4 py-5 rounded-lg mr-3">
              <img src={plus} alt="" className="pb-2" />
              <p className="">4</p>
              <img src={minus} alt="" className="pt-2" />
            </div>
            <div className="text-start">
              <div className=" flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img src={juliusomo} alt="amyrobson" className="w-10  " />

                    <span className="pr-2 pl-2 text-darkBlue">Juliusomo</span>
                    <button className="text-white bg-blue-500 py-0.5 mx-2 rounded-sm px-2">
                      You
                    </button>
                  </div>

                  <span className="grayishBlue">2 days ago</span>
                </div>
                <div className="flex items-center">
                  <img src={dele} alt="" />
                  <h2 className="pr-3 pl-3 text-red-500">Delete</h2>
                  <img src={edit} alt="" className="" />
                  <h2 className=" pr-3 pl-3 text-blue-500">Edit</h2>
                </div>
              </div>
              <p className="text-grayishBlue">
                <a href="#" className="text-blue-500 pr-2 ">
                  @ramsesmiron
                </a>
                Impressive! Though it seem the rag feature could be improved But
                overall it
                {/* </p> */}
                {/* <p> */}
                look incridible. You've nailed the design and the responsiveness
                at various
                {/* </p> */}
                {/* <p> */}
                breakpoint works really well.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between min-h-150px rounded shadow-sm shadow-gray-500 mt-3 py-2 px-7">
        {/* <div className="flex min-h-full gap-4 p-3"> */}
        <img
          src={ramsesmiron}
          alt="User Avatar"
          className="w-11 rounded-full mr-4 self-start"
        />
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="border-2 border-lightGray w-[39rem] h-24"
        ></textarea>
        {/* </div> */}
        <button className="ml-4 px-3 py-1 self-start bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          SEND
        </button>
      </div>
    </main>
  );
}

export default App;
