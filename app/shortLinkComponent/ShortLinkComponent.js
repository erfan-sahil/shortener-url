import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Epilogue } from "next/font/google";
import React from "react";

const EpilogueFont = Epilogue({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const ShortLinkComponent = () => {
  return (
    <div className="p-5">
      <p className={`text-3xl font-bold my-4 ${EpilogueFont.className}`}>
        Paste a URL
      </p>
      <p className={`text-xl font-semibold my-3 ${EpilogueFont.className}`}>
        Paste a long URL
      </p>
      <Input
        className="my-4 text-lg"
        placeholder="Example: http://link.com"
      ></Input>
      <Button>Get your link</Button>
    </div>
  );
};

export default ShortLinkComponent;
