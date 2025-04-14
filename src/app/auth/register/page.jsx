import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[800px] flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default page;
