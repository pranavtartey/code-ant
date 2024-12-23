"use client";
import Button from "../components/Button";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "@/assets/logo.svg";
import AzureDevopsIcon from "@/assets/azure-devops.svg";
import BitBucketIcon from "@/assets/bitbucket-logo.svg";
import GitHubIcon from "@/assets/github-logo.svg";
import GitLabIcon from "@/assets/gitlab-logo.svg";
import SSOIcon from "@/assets/SSOIcon.svg";
import BigLogoImage from "@/assets/BigLogoImage.png";
import PieChartLogo from "@/assets/pie-chart.svg";
import ArrowUpLogo from "@/assets/arrow-up-icon.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  return (
    <section className="lg:bg-[linear-gradient(to_left,#E9EAEB_60%,white_40%)]">
      <div className="flex flex-row-reverse relative container">
        <div className="p-4 h-screen  flex justify-center items-center flex-col  mx-auto flex-1">
   
          <div className="bg-white border border-[#E9EAEB] rounded-lg w-full mx-auto min-h-[582px]">
        
            <div className="flex flex-col items-center gap-6 py-9 border-b border-2-[#FAFAFA] px-4">
              <div className="flex justify-center items-center gap-4">
                <Logo />
                <h2 className="text-3xl font-normal">CodeAnt AI</h2>
              </div>
              <p className="text-[#181D27] text-2xl md:text-3xl font-semibold">
                Welcome to CodeAnt AI
              </p>
              <div className="bg-[#FAFAFA] flex justify-between rounded-lg w-full">
                <Button
                  onClick={handleClickSaas}
                  className="flex-1"
                  variant={activeSaas ? "primary" : "secondary"}
                >
                  SAAS
                </Button>
                <Button
                  onClick={handleClickSelf}
                  className="flex-1"
                  variant={activeSelf ? "primary" : "secondary"}
                >
                  Self Hosted
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 gap-4 items-center">
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg hover:bg-[#E9EAEB] max-w-lg w-full",
                  activeSaas && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <GitHubIcon />{" "}
                <span className="text-base tracking-tight font-semibold">
                  Sign in with Github
                </span>
              </button>
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg hover:bg-[#E9EAEB] max-w-lg w-full",
                  activeSaas && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <BitBucketIcon />{" "}
                <span className="text-base tracking-tight font-semibold">
                  {" "}
                  Sign in with Bitbucket
                </span>
              </button>
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg hover:bg-[#E9EAEB] max-w-lg w-full",
                  activeSaas && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <AzureDevopsIcon />
                <span className="text-base tracking-tight font-semibold">
                  Sign in with Azure Devops
                </span>
              </button>
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg hover:bg-[#E9EAEB] max-w-lg w-full",
                  activeSaas && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <GitLabIcon />{" "}
                <span className="text-base tracking-tight font-semibold">
                  {" "}
                  Sign in with GitLab
                </span>
              </button>
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg max-w-lg hover:bg-[#E9EAEB] w-full",
                  activeSelf && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <GitLabIcon />{" "}
                <span className="text-base tracking-tight font-semibold">
                  {" "}
                  Self Hosted GitLab
                </span>
              </button>
              <button
                className={twMerge(
                  "hidden justify-center items-center gap-4 py-4 border border-[#D8DAE5] rounded-lg max-w-lg hover:bg-[#E9EAEB] w-full",
                  activeSelf && "inline-flex"
                )}
                onClick={() => router.push("/dashboard")}
              >
                {" "}
                <SSOIcon />{" "}
                <span className="text-base tracking-tight font-semibold">
                  {" "}
                  Sign in with SSO
                </span>
              </button>
            </div>
          </div>
          <p className="text-[14px] text-center text-[#181D27] mt-4">
            By signing up you agree to the{" "}
            <span className="font-bold hover:cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
        <div className="max-lg:hidden flex-1 flex justify-center items-center  bg-white relative">
          {/* This is the left card */}
          <div className="lg:fixed xl:absolute bottom-0 left-0">
            <Image src={BigLogoImage} alt="big-logo-image" />
          </div>
          <motion.div
            className="border border-[#E9EAEB] w-[450px] text-center rounded-3xl shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)] h-44 relative bg-white"
          >
            <div className="inline-flex items-center gap-2 border-b border-[#E9EAEB] w-full py-4 px-4">
              <Logo />
              <h2 className="text-lg font-bold text-[#081735]">
                {" "}
                AI to Detect & Autofix Bad Code
              </h2>
            </div>
            <div className="flex items-center justify-around py-4">
              <div>
                <h2 className="text-lg font-bold text-[#081735]">30+</h2>
                <p className="text-sm font-normal text-[#171717]">
                  Language Support
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#081735]">10K+</h2>
                <p className="text-sm font-normal text-[#171717]">Developers</p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#081735]">100K+</h2>
                <p className="text-sm font-normal text-[#171717]">
                  Hours Saved
                </p>
              </div>
            </div>
            <motion.div
              className="flex justify-between gap-6 py-4 px-6 max-w-72 shadow-[-1px_-1px_53px_-9px_rgba(0,0,0,0.51)] rounded-3xl absolute -right-4 bg-white"
            >
              <div className="">
                <PieChartLogo />
                <h2 className="text-sm font-bold text-[#171717] mt-4">
                  Issues Fixed
                </h2>
                <h2 className="text-[#081735] text-[32px] font-bold tracking-wider">
                  500K+
                </h2>
              </div>
              <div className="w-16">
                <div className="inline-flex">
                  <ArrowUpLogo />
                  <p className="text-[#0049C6] font-bold text-sm">14%</p>
                </div>
                <p className="text-xs leading-none text-[#171717] text-end pr-[3px]">
                  This week
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;


// animate={{
//   translateY: [-30, 30],
// }}
// transition={{
//   repeat: Infinity,
//   repeatType: "mirror",
//   duration: 3,
//   ease: "easeInOut",
// }}