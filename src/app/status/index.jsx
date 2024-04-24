'use client';
import React from "react";
import Link from "next/link";
import { Img, Text, Heading, Button } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function StatusPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <div className="w-full">
        {/* Sidebar section */}
        <div className="flex items-start justify-between gap-5 rounded-[40px] bg-white-A700 md:flex-col sm:pb-5 sm:pr-5">
          <Sidebar
            width="378px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="!sticky top-0 flex h-screen flex-col overflow-auto bg-blue-200 pb-[17px] pr-[17px] md:hidden md:p-5"
          >
            {/* Sidebar content */}
            <Img src="img_search_white_a700.svg" width={15} height={15} alt="search_one" className="h-[15px] w-[15px] self-start" />
            <Img src="img_meteranqu_removebg_preview.png" width={274} height={56} alt="meteranqu_one" className="mr-[18px] mt-[17px] h-[56px] w-[80%] object-cover md:mr-0" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "13px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "25px",
                  borderRadius: "10px",
                  paddingLeft: "55px",
                  paddingRight: "35px",
                  "&:hover, &.ps-active": {
                    backgroundColor: "#6a95d5 !important",
                    boxShadow: "1.5px 4px 4px 0px #0000003f",
                  },
                },
              }}
              rootStyles={{ "&>ul": { gap: "5.50px" } }}
              className="mt-[111px] flex w-full flex-col pb-16 md:pb-5"
            >
              <MenuItem icon={<Img src="img_ic_round_dashboard.svg" width={50} height={50} alt="icround_one" className="h-[50px] w-[50px]" />}><Link href="/dashboard">DASHBOARD</Link></MenuItem>
              <MenuItem icon={<Img src="img_material_symbols_water_drop.svg" width={50} height={50} alt="material_one" className="h-[50px] w-[50px]" />}><Link href="/pemakaianair">WATER USAGE</Link></MenuItem>
              <MenuItem icon={<Img src="img_trophy.svg" width={50} height={50} alt="trophy_one" className="h-[50px] w-[50px]" />}><Link href="/tagihanair">WATER BILLS</Link></MenuItem>
              <MenuItem icon={<Img src="img_search.svg" width={50} height={50} alt="search_three" className="h-[50px] w-[50px]" />}><Link href="/settingpage">SETTING</Link></MenuItem>
            </Menu>
            {!collapsed && (
              /* Logout section */
              <div className="mt-[92px] flex w-[87%] items-center justify-center gap-1.5 rounded-[10px] bg-indigo-300 p-3 shadow-xs md:w-full">
                <Img src="img_tabler_logout.svg" width={50} height={50} alt="tablerlogout" className="h-[50px] w-[50px]" />
                <Text size="s" as="p" className="mb-[5px] self-end">
                  Logout
                </Text>
              </div>
            )}
          </Sidebar>

          {/* Header section */}
          <div className="mt-8 flex w-[67%] flex-col items-start gap-[31px] md:w-full">
            <div className="flex items-center gap-[18px] self-end">
              <Img src="img_mdi_bell_indigo_300.svg" width={40} height={40} alt="mdibell_one" className="h-[40px] w-[40px] self-end" />
              <Button size="xs" shape="square" className="w-[40px] self-end">
                <Img src="img_play.svg" width={40} height={40} />
              </Button>
              <Button shape="round" leftIcon={<Img src="img_healthiconsuiuserprofile.svg" width={45} height={45} alt="healthicons:ui-user-profile" className="h-[45px] w-[45px]" />} className="min-w-[136px] gap-1.5 sm:pr-5">
                Admin
              </Button>
            </div>

            {/* Status section */}
            <div className="flex w-[94%] justify-center rounded-[5px] border border-solid border-black-900_89 bg-blue_gray-100 p-[30px] shadow-xs md:w-full sm:p-5">
              <div className="mb-[83px] flex w-[90%] flex-col items-center md:w-full">
                <Heading size="md" as="h1" className="!text-black-900">Status</Heading>
                <div className="mt-[11px] h-px w-[30%] bg-black-900" />
                <div className="mt-[34px] flex items-center justify-between gap-5 self-stretch md:flex-col">
                  <Img src="img_material_symbols_mode_off_on.svg" width={217} height={209} alt="material_three" className="h-[209px] w-[29%] md:w-full" />
                  <div className="relative mb-[34px] h-[126px] w-[55%] self-end md:h-auto md:w-full">
                    <Text size="md" as="p" className="!text-black-900">ON/OFF</Text>
                    <div className="absolute left-[28.00px] top-[32%] m-auto flex w-[57%] justify-between gap-5">
                      <Img src="img_laptop.svg" width={30} height={30} alt="laptop_one" className="h-[30px] w-[30px]" />
                      <Img src="img_search_black_900.svg" width={30} height={30} alt="search_five" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}