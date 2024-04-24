"use client";
import React from "react";
import { Text, Button, Input, Img } from "../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function TagihanAirPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <>
      {/* main container section */}
      <div className="w-full">
        {/* sidebar section */}
        <div className="flex items-start justify-between gap-5 rounded-[40px] bg-white-A700 p-[31px] md:flex-col sm:p-5">
          {/* sidebar menu section */}
          <Sidebar
            width="347px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="!sticky top-0 flex h-screen flex-col overflow-auto rounded-[20px] bg-blue-200 p-[17px] md:hidden md:p-5"
          >
            <Img
              src="img_meteranqu_removebg_preview.png"
              width={274}
              height={56}
              alt="meteranqu_one"
              className="h-[56px] w-[88%] object-cover"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "13px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "25px",
                  borderRadius: "10px",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                  [`&:hover, &.ps-active`]: {
                    fontWeight: "700 !important",
                    backgroundColor: "#6a95d5 !important",
                    boxShadow: "1.5px 4px 4px 0px #0000003f",
                  },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "52px" } }}
              className="mt-[161px] flex w-full flex-col self-stretch pb-2"
            >
              <MenuItem
                icon={
                  <Img
                    src="img_ic_round_dashboard.svg"
                    width={50}
                    height={50}
                    alt="icround_one"
                    className="h-[50px] w-[50px]"
                  />
                }
              >
                DASHBOARD
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_material_symbols_water_drop.svg"
                    width={50}
                    height={50}
                    alt="material_one"
                    className="h-[50px] w-[50px]"
                  />
                }
              >
                WATER USAGE
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="img_trophy.svg" width={50} height={50} alt="trophy_one" className="h-[50px] w-[50px]" />
                }
              >
                WATER BILLS
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="img_search.svg" width={50} height={50} alt="search_one" className="h-[50px] w-[50px]" />
                }
              >
                SETTING
              </MenuItem>
            </Menu>
            {!collapsed ? (
              <Button
                shape="round"
                leftIcon={
                  <Img
                    src="img_tablerlogout.svg"
                    width={50}
                    height={50}
                    alt="tabler:logout"
                    className="h-[50px] w-[50px]"
                  />
                }
                className="mt-[295px] w-full gap-1.5 font-plusjakartasans shadow-xs sm:px-5"
              >
                Logout
              </Button>
            ) : null}
          </Sidebar>

          {/* content section */}
          <div className="flex w-[68%] flex-col items-start gap-[42px] md:w-full">
            {/* notification bar section */}
            <div className="flex flex-col items-start gap-[31px] self-stretch">
              <div className="flex items-center gap-[18px] self-end">
                <Img
                  src="img_mdi_bell.svg"
                  width={40}
                  height={40}
                  alt="mdibell_one"
                  className="h-[40px] w-[40px] self-end"
                />
                <Button size="xs" shape="square" className="w-[40px] self-end">
                  <Img src="img_play.svg" width={40} height={40} />
                </Button>
                <Button
                  size="sm"
                  leftIcon={
                    <Img
                      src="img_healthiconsuiuserprofile.svg"
                      width={45}
                      height={45}
                      alt="healthicons:ui-user-profile"
                      className="h-[45px] w-[45px]"
                    />
                  }
                  className="min-w-[136px] gap-1.5 rounded-[22px] font-plusjakartasans shadow-sm sm:pr-5"
                >
                  Admin
                </Button>
              </div>

              {/* bill check section */}
              <div className="flex w-[94%] justify-center rounded-[5px] border border-solid border-black-900_89 px-14 py-[61px] shadow-xs md:w-full md:p-5">
                <div className="mb-[110px] flex w-[85%] flex-col items-start md:w-full">
                  <Text size="md" as="p" className="ml-[149px] tracking-[0.50px] !text-black-900_93 md:ml-0">
                    Cek Tagihan Air
                  </Text>
                  <div className="mt-2 flex items-center gap-[27px] self-stretch md:flex-col">
                    <Text as="p" className="tracking-[0.50px] !text-black-900_93">
                      ID Pelanggan
                    </Text>
                    <Input
                      shape="round"
                      name="masukkanidpelan"
                      placeholder={`Masukkan ID Pelanggan..`}
                      className="sm:px-5"
                    />
                  </div>
                  <Button
                    size="md"
                    shape="round"
                    className="mt-[29px] min-w-[194px] self-end tracking-[0.50px] sm:px-5"
                  >
                    Cek Tagihan
                  </Button>
                </div>
              </div>
            </div>

            {/* customer details section */}
            <div className="flex w-[94%] flex-col items-center gap-[47px] rounded-[5px] border border-solid border-black-900_89 p-[26px] shadow-xs md:w-full sm:p-5">
              <div className="flex flex-wrap justify-center self-stretch bg-blue_gray-100_82 p-[15px]">
                <Text as="p" className="self-end tracking-[0.50px]">
                  ID Pelanggan
                </Text>
                <Text as="p" className="ml-[134px] tracking-[0.50px]">
                  Nama{" "}
                </Text>
                <Text as="p" className="ml-[155px] self-start tracking-[0.50px]">
                  Alamat{" "}
                </Text>
                <Text as="p" className="ml-[166px] self-end tracking-[0.50px]">
                  Total Tagihan
                </Text>
              </div>
              <Text as="p" className="mb-[198px] tracking-[0.50px]">
                ID Pelanggan Tidak Ditemukan
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
