"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomInputProps {
  route: string;
  iconposition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearch = ({
  route,
  iconposition,
  placeholder,
  imgSrc,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconposition === "left" && (
        <Image
          src={imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className=" cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700 border-none shadow-none"
      />
      {iconposition === "right" && (
        <Image
          src={imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className="ml-4 cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
