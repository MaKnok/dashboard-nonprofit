import { metadataInfo } from "@/lib/data";
import { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

let institutionInfo = metadataInfo[0];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
});
const poppinsFontFamily = "poppins";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
});
const montserratFontFamily = "montserrat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
});
const interFontFamily = "inter";

export let fontFamily: NextFont;

switch (institutionInfo.fontFamily) {
  case poppinsFontFamily:
    fontFamily = poppins;
    break;
  case montserratFontFamily:
    fontFamily = montserrat;
    break;
  default:
    fontFamily = inter;
}
