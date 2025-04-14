import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-2 bg-white dark:bg-white/10 ml-1 rounded-xl  shadow-xl">
      <h1 className="text-center font-bold text-3xl mb-3">Setting Akun Anda</h1>
      <div className="flex p-2 w-full gap-10">
        <div className="w-1/2  flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="edit-username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="masukan username "
              id="edit-username"
              className="rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="edit-email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="masukan Email"
              id="edit-email"
              className="rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="edit-password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="masukan password"
              id="edit-password"
              className="rounded-lg p-2"
            />
          </div>
        </div>
        <div className="w-1/2  flex flex-col">
          <label htmlFor="edit-username">Password</label>
          <input type="text" placeholder="masukan username " />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button className="p-3 bg-blue-600 dark:bg-yellow-600 text-white font-bold rounded-lg mr-4 mb-4">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default page;
