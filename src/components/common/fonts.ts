import { Encode_Sans_SC, Epilogue, Inter } from "next/font/google";

// Header fonts
export const heading1Font = Encode_Sans_SC({
  subsets: ["latin"],
  weight: "700",
});

export const heading2Font = Epilogue({
  subsets: ["latin"],
  weight: "400",
});

// Content fonts
export const paragraphFont = Epilogue({
  subsets: ["latin"],
  weight: "400",
});

export const italicParagraphFont = Epilogue({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const linkFont = Epilogue({
  subsets: ["latin"],
  weight: "400",
});

// Footer font
export const copyrightFont = Inter({
  subsets: ["latin"],
  weight: "400",
});