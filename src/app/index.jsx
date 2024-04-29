"use client";
import React from "react";
import { Button, Text, Img, Heading } from "./../components";
import MegaMenu1 from "./../components/MegaMenu1";
import Link from "next/link";

const data = [
  { image: "img_ion_water_sharp.svg", text: "Penggunaan Air", link: "/pemakaianair" },
  { image: "img_material_symbols_mode_off_on.svg", text: "Status", link: "/status" },
  { image: "img_tabler_battery_4_filled.svg", text: "Battery", link: "/batterystatus" },
  { image: "img_solar_bill_list_bold.svg", text: "Tagihan Air", link: "/tagihanair" },
];

export default function HomePagePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      {/* main content section */}
      <div className="w-full bg-white-A700">
        <div className="relative mb-32 h-[895px] md:h-auto">
          {/* branding section */}
          <div className="absolute left-[9%] top-[30%] m-auto flex w-[35%] flex-col items-start gap-[53px] sm:gap-[26px]">
            <Text size="3xl" as="p">
              Smart Water Meter Reader
            </Text>
            <Img
              src="img_rectangle_16.svg"
              width={89}
              height={30}
              alt="image"
              className="h-[30px] w-[18%] rounded-[15px]"
            />
          </div>

          {/* navigation menu section */}
          <div className="mt-[91px] flex flex-wrap items-center sm:flex-col">
            <Heading size="s" as="h1" className="self-start sm:p-5">
              Home
            </Heading>
            <Text size="s" as="p" className="ml-5 self-start sm:ml-0 sm:p-5">
              About
            </Text>
            <Text size="s" as="p" className="ml-[21px] self-start sm:ml-0 sm:p-5">
              Service
            </Text>
            <Text size="s" as="p" className="ml-[15px] self-start sm:ml-0 sm:p-5">
              Drop Down
            </Text>
            <Img
              src="img_material_symbol.svg"
              width={24}
              height={24}
              alt="materialsymbol"
              className="relative ml-[-2px] h-[24px] w-[24px] sm:ml-0 sm:w-full"
            />
            <Text size="s" as="p" className="ml-2.5 self-start sm:ml-0 sm:p-5">
              Blog
            </Text>
            <Text size="s" as="p" className="ml-[25px] self-start sm:ml-0 sm:p-5">
              Contact
            </Text>
          </div>
          <div className="absolute left-0 right-0 top-[0.00px] m-auto flex h-[769px] w-full items-start rounded-[20px] bg-[url(/images/img_group_5.png)] bg-cover bg-no-repeat p-[19px] md:h-auto">
            {/* header section */}
            <header className="relative mb-[659px] mt-4 flex w-[93%] items-center justify-between gap-5 md:w-full md:flex-col">
              <Img
                src="img_meteranqu_removebg_preview.png"
                width={274}
                height={56}
                alt="meteranqu_one"
                className="h-[56px] w-[21%] object-cover md:w-full"
              />
              <div className="mb-[7px] flex w-[60%] items-center justify-between gap-5 self-end md:w-full md:flex-col">
                <ul className="flex items-center gap-9 sm:flex-col">
                  <li>
                    <Link href="#" className="self-start">
                      <Text size="md" as="p" className="!font-svngilroy tracking-[0.03px] !text-black-900_7f">
                        About
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="self-start">
                      <Text size="md" as="p" className="!font-svngilroy tracking-[0.03px] !text-black-900_7f">
                        Features
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="self-start">
                      <Text size="md" as="p" className="!font-svngilroy tracking-[0.03px] !text-black-900_7f">
                        Download{" "}
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="self-end">
                      <Text size="md" as="p" className="!font-svngilroy tracking-[0.03px] !text-black-900_7f">
                        Support
                      </Text>
                    </Link>
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-2">
                      <Text
                        size="md"
                        as="p"
                        className="self-start !font-svngilroy tracking-[0.03px] !text-black-900_7f"
                      >
                        Partners
                      </Text>
                      <Img
                        src="img_icon_font_aweso.svg"
                        width={16}
                        height={16}
                        alt="iconfontaweso"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                  </li>
                </ul>
                <div className="flex w-[26%] items-center justify-between gap-5 pl-5 md:w-full">
                  <Heading size="xs" as="p" className="text-center !font-svngilroy tracking-[0.18px] !text-blue-700">
                    Sign In
                  </Heading>
                  <Button className="flex h-[36px] min-w-[99px] items-center justify-center rounded bg-gradient px-6 text-center font-svngilroy text-sm font-bold tracking-[0.18px] text-white-A700 sm:px-5">
                    Sign Up
                  </Button>
                </div>
              </div>
            </header>
          </div>

          {/* features list section */}
          <div className="container-xs absolute bottom-[0.00px] left-0 right-0 my-auto flex justify-center px-8 md:p-5 sm:px-5">
            <div className="flex w-full gap-[38px] md:flex-col">
              {data.map((d, index) => (
                <div
                  key={"viewhierarchy" + index}
                  className="flex w-full flex-col items-center gap-3.5 rounded-[30px] bg-blue-200 p-[52px] shadow-xs md:p-5"
                >
                  <Img src={d.image} width={100} height={100} alt="image" className="h-[100px] w-[100px]" />
                  <Text size="lg" as="p" className="text-shadow-ts text-center">
                    {d.text}
                  </Text>
                  <Button className="ml-[35px] flex h-[38px] min-w-[110px] items-center justify-center self-start rounded-[19px] bg-indigo-300 px-8 text-center text-sm font-bold text-white-A700 shadow-sm md:ml-0 sm:px-5">
                    <Link href={d.link}>Check</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
