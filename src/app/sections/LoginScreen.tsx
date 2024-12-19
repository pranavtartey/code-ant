"use client";
import Image from "next/image";
import logoMobile from "@/app/assets/logo-mobile.png";
import Button from "../components/Button";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaBitbucket } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const LoginScreen: FC = () => {
  const [activeSaas, setActiveSaas] = useState<boolean>(true);
  const [activeSelf, setActiveSelf] = useState<boolean>(false);

  const handleClickSaas = () => {
    setActiveSaas(true);
    setActiveSelf(false);
  };
  const handleClickSelf = () => {
    setActiveSaas(false);
    setActiveSelf(true);
  };

  return (
    <section className="bg-[#FAFAFA] h-screen flex justify-center items-center">
      <div className="container">
        <div className="bg-white border border-[#E9EAEB] rounded-lg max-w-3xl mx-auto shadow-md min-h-[582px] ">
          <div className="flex flex-col justify-center items-center gap-5 py-9 px-4 border-b-[1px] border-b-[#E9EAEB]">
            <h2 className="inline-flex items-center justify-center gap-3">
              <Image src={logoMobile} alt="logo-mobile" />
              <span className="text-3xl font-md">CodeAnt AI</span>
            </h2>
            <h3 className="text-2xl font-semibold">Welcome to CodeAnt AI</h3>
            <div className="bg-[#E9EAEB] rounded-lg w-full flex justify-around max-w-sm">
              <Button
                onClick={handleClickSaas}
                variant={activeSaas ?'primary' : "secondary" }
                className="flex-1"
              >
                SAAS
              </Button>
              <Button
                onClick={handleClickSelf}
                variant={activeSelf ?'primary' : "secondary" }
                className="flex-1"
              >
                Self Hosted
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6 px-4">
            <button className={twMerge("border border-[#E9EAEB] rounded-lg py-4 text-base font-semibold hidden items-center justify-center gap-4 w-full max-w-sm hover:bg-[#FAFAFA]",activeSaas && "inline-flex")}>
              <FaGithub />
              <span>Sign in with Github</span>
            </button>
            <button className={twMerge("border border-[#E9EAEB] rounded-lg py-4 text-base font-semibold hidden items-center justify-center gap-4 w-full max-w-sm hover:bg-[#FAFAFA]",activeSaas && "inline-flex")}>
              <FaBitbucket />
              <span>Sign in with Bitbucket</span>
            </button>
            <button className={twMerge("border border-[#E9EAEB] rounded-lg py-4 text-base font-semibold hidden items-center justify-center gap-4 w-full max-w-sm hover:bg-[#FAFAFA]",activeSaas && "inline-flex")}>
              <VscAzureDevops />
              <span>Sign in with Azure Devops</span>
            </button>
            <button className="border border-[#E9EAEB] rounded-lg py-4 text-base font-semibold inline-flex items-center justify-center gap-4 w-full max-w-sm hover:bg-[#FAFAFA]">
              <FaGitlab />
              <span>Sign in with GitLab</span>
            </button>
            <button className={twMerge("border border-[#E9EAEB] rounded-lg py-4 text-base font-semibold hidden items-center justify-center gap-4 w-full max-w-sm hover:bg-[#FAFAFA]",activeSelf && "inline-flex")}>
            <IoKeyOutline />
              <span>Sign in with SSO</span>
            </button>
          </div>
        </div>
        <p className="text-center text-base text-[#181D27] mt-4">
          By signing up you agree to the{" "}
          <span className="font-semibold"> Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default LoginScreen;
