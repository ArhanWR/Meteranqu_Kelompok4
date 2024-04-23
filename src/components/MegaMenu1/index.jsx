import React from "react";
import { Text } from "../../components";
import Link from "next/link";

export default function MegaMenu1() {
  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-white-A700 p-5 shadow-xl">
        <div className="flex gap-[30px] md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-900">Title 1</Text>
            <div className="flex flex-col items-start gap-3">
              <Link href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 1</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 2</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 3</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 4</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 5</Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-900">Title 2</Text>
            <div className="flex flex-col items-start gap-3">
              <Link href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 1</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 2</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 3</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 4</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 5</Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-900">Title 3</Text>
            <div className="flex flex-col items-start gap-3">
              <Link href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 1</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 2</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 3</Text>
              </Link>
              <Link href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">Menu 4</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
