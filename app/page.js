"use client";
import Image from "next/image";
import CoverImg from "@/public/images/www-search.png";
import { Allerta_Stencil, Epilogue, Work_Sans } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ShortLinkComponent from "./shortLinkComponent/ShortLinkComponent";
import QrCodeComponent from "./qrCodeComponent/QrCodeComponent";
import { useState } from "react";

const AllertaStencil = Allerta_Stencil({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const WorkSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const EpilogueFont = Epilogue({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  const [showShortLink, setShowShortLink] = useState(true);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleShortLinkClick = () => {
    setShowShortLink(true);
    setShowQRCode(false);
  };

  const handleQRCodeClick = () => {
    setShowQRCode(true);
    setShowShortLink(false);
  };

  return (
    <main className="mx-auto">
      <div className="flex justify-evenly items-center mt-16 gap">
        <div className="w-[450px] px-4 lg:px-0">
          <h2 className={`text-5xl font-bold ${AllertaStencil.className}`}>
            Strengthen digital ties with Shortly.
          </h2>
          <p className={`mt-10 ${WorkSans.className} text-lg`}>
            {" "}
            Empower your audience with Shortly, our all-in-one solution for URL
            shortening, QR Codes. Seamlessly engage your users and guide them to
            the right information with ease. Manage, customize, and track
            everything within the Shortly Connections Platform. Join us in
            simplifying your online presence and enhancing user engagement.{" "}
          </p>
        </div>

        <div className="hidden lg:flex">
          <Image
            src={CoverImg}
            alt="Picture of the author"
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
      </div>

      <div className="mt-20 bg-rose-50 py-10">
        <p
          className={`text-3xl font-bold text-center px-4 ${EpilogueFont.className}`}
        >
          Sign up for a free account and put Shortly to work
        </p>
        <Card className="w-full lg:w-2/3 mx-auto mt-10 py-5 px-4 lg:p-8">
          <div className="">
            <Button
              variant="link"
              className={
                showShortLink === true
                  ? `text-rose-600 text-xl font-semibold underline decoration-rose-600 ${EpilogueFont.className}`
                  : `text-black text-xl font-semibold hover:underline decoration-rose-600 ${EpilogueFont.className}`
              }
              onClick={handleShortLinkClick}
            >
              Short link
            </Button>
            <Button
              variant="link"
              className={
                showQRCode === true
                  ? `text-rose-600 text-xl font-semibold underline decoration-rose-600 ${EpilogueFont.className}`
                  : `text-black text-xl font-semibold hover:underline decoration-rose-600 ${EpilogueFont.className}`
              }
              onClick={handleQRCodeClick}
            >
              QR Code
            </Button>
          </div>

          {showShortLink && <ShortLinkComponent />}
          {showQRCode && <QrCodeComponent />}
        </Card>
      </div>
    </main>
  );
}
