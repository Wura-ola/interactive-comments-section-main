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
import { data } from "./utilis";

function App() {
  return (
    <main className=" min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center font-rubik text-sm  ">
      <div className="flex flex-col gap-3">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              {
                <div className=" bg-white  block md:flex items-center  bg-white-500 bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg ">
                  <div className=" hidden md:block md:bg-lightGray md:p-4 py-5 md:rounded-lg md:mr-3  ">
                    <img src={plus} alt="" className="pb-2 cursor-pointer" />
                    <p className="">4</p>
                    <img src={minus} alt="" className="pt-2 cursor-pointer" />
                  </div>
                  <div className="  text-start">
                    <div className=" flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt="user img"
                            className="w-10   "
                          />
                          <span className=" text-darkBlue pr-2 pl-2">
                            {item.details}
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:visible md:flex md:items-center ">
                        <img src={reply} alt="" className="cursor-pointer" />
                        <h2 className="pl-3 text-blue-500">Reply</h2>
                      </div>
                    </div>
                    <p className="text-grayishBlue">{item.body}</p>
                  </div>
                  <div className=" mt-4 flex justify-between md:hidden">
                    <div className="flex justify-between items-center bg-lightGray py-3 px-5 rounded-lg  mr-3">
                      <img src={plus} alt="" className="pr-3 cursor-pointer" />
                      <h2>4</h2>
                      <img src={minus} alt="" className="pl-3 cursor-pointer" />
                    </div>
                    <div className="flex items-center">
                      <img src={reply} alt="" className="cursor-pointer" />
                      <h2 className="pl-3 text-blue-500">Reply</h2>
                    </div>
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>
      <div className=" flex justify-between">
        <div className="border-l-2 border-gray-400 h-18 flex justify-center mx-auto"></div>
        <div className="w-11/12">
          <div className="block bg-white md:flex items-center  bg-white-500 p-3 shadow-sm shadow-gray-500 rounded-lg mt-3 ">
            <div className=" hidden md:visible md:bg-lightGray md:p-4 md:py-5 md:rounded-lg md:mr-3 ">
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

                  <span className="text-grayishBlue">1 week ago</span>
                </div>
                <div className=" hidden md:flex md:visible md:items-center ">
                  <img src={reply} alt="" className="" />
                  <h2 className="pl-3 text-blue-500">Reply</h2>
                </div>
              </div>
              <p className="text-grayishBlue">
                <a href="#" className="text-blue-500 pr-2 ">
                  @maxblagun
                </a>
                Impressive! Though it seem the rag feature could be improved But
                overall it look incridible. You've nailed the design and the
                responsiveness at various breakpoint works really well.
              </p>
            </div>
            <div className="md:hidden mt-4 flex justify-between">
              <div className="flex justify-between items-center bg-lightGray py-3 px-5 rounded-lg  mr-3">
                <img src={plus} alt="" className="pr-3 cursor-pointer" />
                <h2>4</h2>
                <img src={minus} alt="" className="pl-3 cursor-pointer" />
              </div>
              <div className="flex items-center">
                <img src={reply} alt="" className="cursor-pointer" />
                <h2 className="pl-3 text-blue-500">Reply</h2>
              </div>
            </div>
          </div>

          <div className="bg-white block md:flex items-center bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg mt-3  ">
            <div className="hidden md:visible md:bg-lightGray md:p-4 md:py-5 md:rounded-lg md:mr-3 ">
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
                <div className=" hidden md:visible md:flex md:items-center ">
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
            <div className="md:hidden  mt-4 flex justify-between">
              <div className="flex justify-between items-center bg-lightGray py-3 px-5 rounded-lg  mr-3">
                <img src={plus} alt="" className="pr-3 cursor-pointer" />
                <h2>4</h2>
                <img src={minus} alt="" className="pl-3 cursor-pointer" />
              </div>
              <div className="flex items-center">
                <img src={dele} alt="" />
                <h2 className="pr-3 pl-3 text-red-500">Delete</h2>
                <img src={edit} alt="" className="" />
                <h2 className=" pr-3 pl-3 text-blue-500">Edit</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:bg-white md:flex md:justify-between md:min-h-150px md:rounded md:shadow-sm md:shadow-gray-500 md:mt-3 md:py-2 md:px-7">
        <img
          src={ramsesmiron}
          alt="User Avatar"
          className=" md:visible md:w-11 md:rounded-full md:mr-4 md:self-start"
        />
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="border-2 border-lightGray w-[30rem] h-24 "
        ></textarea>
        {/* </div> */}
        <button className="ml-4 px-3 py-1 self-start bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          SEND
        </button>
      </div>
      <div className="md:hidden mt-3 bg-white  min-h-150px md:rounded shadow-sm shadow-gray-500  py-3 px-5 x ">
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="border-2 border-lightGray w-[20rem] h-24 "
        ></textarea>
        <div className=" pt-3 flex justify-between items-center">
          <img src={ramsesmiron} alt="User Avatar" className=" " />
          <button className=" px-3 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            SEND
          </button>
        </div>
      </div>
      {/* <section className="mt-3 bg-white shadow-sm shadow-gray-500 w-96 p-3">
        <h3>Delete Comment</h3>
        <p className="text-grayishBlue  text-start mt-3">
          Are you sure you want to delete this comment?This will remove the
          comment and it can't be undone
        </p>
        <div className="flex justify-center mt-3 gap-4">
          <button className="bg-gray-500 px-3 py-1  text-white rounded">
            No, Cancel
          </button>
          <button className="bg-red-500 px-3 py-1 text-white rounded">
            Yes, Delete
          </button>
        </div>
      </section> */}
    </main>
  );
}

export default App;
