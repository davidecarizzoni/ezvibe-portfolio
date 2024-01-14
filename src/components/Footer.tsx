import React from "react";
import Image from "next/image";
import Link from "next/link";
import {INSTAGRAM_URL, WHATSAPP_URL, YOUTUBE_URL} from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-transparent border-r-transparent border-l-transparent 3 text-white">
      <div className="container p-12 flex justify-between">
        <span>EZVIBE</span>
        <div className={"flex flex-row items-center space-x-2"}>
          <Link href={INSTAGRAM_URL} target={'_blank'}>
            <Image src={'/icons/instagram.svg'} alt={'instagram'} width={20} height={20}/>
          </Link>
          <Link href={YOUTUBE_URL} target={'_blank'}>
            <Image src={'/icons/youtube.svg'} alt={'youtube'} width={25} height={20}/>
          </Link>
          <Link href={WHATSAPP_URL} target={'_blank'}>
            <Image src={'/icons/whatsapp.svg'} alt={'whatsapp'} width={20} height={20}/>
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved. @2023</p>
      </div>
    </footer>
  );
};

