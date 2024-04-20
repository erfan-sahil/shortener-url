import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Epilogue, Roboto_Slab } from "next/font/google";
import React from "react";

const EpilogueFont = Epilogue({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const QrCodeComponent = () => {
  return (
    <div className="p-5">
      <h1 className={`text-3xl font-bold my-4 ${EpilogueFont.className}`}>
        Create a QR Code
      </h1>
      <p className={`text-xl font-semibold my-3 ${EpilogueFont.className}`}>
        Enter your QR Code destination
      </p>
      <Input
        className="my-4 text-lg"
        placeholder="Example: http://link.com"
      ></Input>
      <Button>Get your QR Code</Button>
    </div>
  );
};

export default QrCodeComponent;
