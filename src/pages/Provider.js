import React from "react";
import { Typography } from "@material-tailwind/react";

const Provider = () => {
  return (
    <>
      <header className="sticky top-0 z-10 text-xl text-[#2f81e4] bg-[#232121] bg-gradient-to-rfrom-white to-[#def0f5] flex border-b p-5 font-bold tracking-tight">
        Food Rangers
      </header>
      <div className="relative p-5">
        <Typography className="px-5" variant="h4" color="gray">
          Share Your Food!
        </Typography>
      </div>
    </>
  );
};

export default Provider;
