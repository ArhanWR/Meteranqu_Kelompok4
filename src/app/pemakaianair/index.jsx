"use client";
import React from "react";
import Link from "next/link";
import { Button, Img } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function PemakaianAirPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <>
      {/* main layout section */}
      <div className="w-full">
        <div className="flex items-start gap-[46px] rounded-[40px] bg-white-A700 p-[31px] md:flex-col sm:p-5">
          {/* sidebar section */}
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
              className="mt-2.5 h-[56px] w-[88%] object-cover"
            />

            {/* navigation menu section */}
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
                    backgroundColor: "#6a95d5 !important",
                    boxShadow: "1.5px 4px 4px 0px #0000003f",
                  },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "21px" } }}
              className="mt-[114px] flex w-full flex-col self-stretch pb-[17px]"
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
                <Link href="/dashboard">DASHBOARD</Link>
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
                <Link href="/pemakaianair">WATER USAGE</Link>
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="img_trophy.svg" width={50} height={50} alt="trophy_one" className="h-[50px] w-[50px]" />
                }
              >
                <Link href="/tagihanair">WATER BILLS</Link>
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="img_search.svg" width={50} height={50} alt="search_one" className="h-[50px] w-[50px]" />
                }
              >
                <Link href="/settingpage">SETTING</Link>
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
                    className="h-[20px] w-[50px]"
                  />
                }
                className="mt-[125px] w-full sm:px-5"
              >
                Logout
              </Button>
            ) : null}
          </Sidebar>
          <div className="flex flex-1 flex-col items-end gap-[125px] md:gap-[93px] md:self-stretch sm:gap-[62px]">
            {/* notification admin section */}
            <div className="flex items-center gap-4">
              <Img
                src="img_mdi_bell.svg"
                width={40}
                height={40}
                alt="mdibell_one"
                className="h-[40px] w-[40px] self-end"
              />
              <Button
                color="blue_200"
                size="xs"
                leftIcon={
                  <Img
                    src="img_healthiconsuiuserprofile.svg"
                    width={45}
                    height={45}
                    alt="healthicons:ui-user-profile"
                    className="h-[50px] w-[45px]"
                  />
                }
                className="min-w-[136px] rounded-[22px] sm:pr-5"
              >
                Admin
              </Button>
            </div>

            <div>
            <div class="gap-[12px] w-full flex relative max-w-[275px] box-border items-start justify-start">
              <div class="gap-[10px] w-full flex px-[16px] py-[8px] relative max-w-[88px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[linear-gradient(-180deg,_#b8e1ff_0%,_#5d8acf_100%)]">
                <Img
                  src="add.png"
                  alt="instance"
                  width="50"
                  height="35"
                  class="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
                  />
                <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0"><p class="text-[#ffffff] text-[16px] not-italic mt-0 text-left font-['Manrope',_sans-serif] font-semibold mb-0 tracking-[0px] normal-case">Add</p></div>
              </div>
              <div class="gap-[10px] w-full flex px-[12px] py-[8px] relative max-w-[175px] [border-top:2px_solid_#d0d5dd] box-border items-center [border-left:2px_solid_#d0d5dd] [border-right:2px_solid_#d0d5dd] [border-bottom:2px_solid_#d0d5dd] rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center">
                <Img
                  src="download.png"
                  alt="instance"
                  width="50"
                  height="35"
                  class="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
                  />
                <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                  <p class="text-[#191d23] text-[16px] not-italic mt-0 text-left font-['Manrope',_sans-serif] font-semibold mb-0 tracking-[0px] normal-case">Download Excel</p>
                </div>
              </div>
            </div>
          </div>            
            <div className="mr-[13px] flex flex-col gap-[22px] self-stretch md:mr-0">
              <div className="flex items-center justify-between gap-5 rounded-[30px] bg-gradient p-[11px] shadow-md md:flex-col">
                <div className="ml-[11px] h-[49px] w-[50%] rounded-[24px] bg-white-A700 shadow-md md:ml-0 md:p-5">
                <Img
                  src="search.png"
                  alt="instance"
                  width="35"
                  height="20"
                  class="c_search-bar-instance"
                  />
                </div>
                <div className="mr-[15px] h-[48px] w-[21%] rounded-[24px] bg-white-A700 shadow-md md:mr-0 md:p-5">
                <Img
                  src="filter.png"
                  width="35"
                  height="20"
                  />
                </div>
                
              </div>
              <div className="h-[676px] rounded-[30px] bg-gradient shadow-md" >
              <div>
              <div class=".mr-[13px].flex.flex-col.gap-[22px].self-stretch md:mr-0">
              <div>
              <div class="w-full max-w-[77px] mt-0 min-h-[21px] text-left mb-0">
                <div  class="text-[#ffffff] text-[20px] not-italic mt-0 text-left font-['Plus_Jakarta_Sans',_sans-serif] font-bold leading-[12px] mb-0 normal-case">
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>No Hp</th>
                  <th>Alamat</th>
                  <th>Liter</th>
                  <th>Email</th>
                  <th>Date & Month</th>
                  <th>Action</th>
                </tr>
                </div>
              </div>
            </div>
                <div class="gap-[8px] w-full flex relative max-w-[512px] box-border items-start justify-start">
                  <div class="gap-[8px] w-full flex px-[px] py-0 overflow-hidden relative max-w-[72px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[#ffffff]">
                    <Img
                      src="arrow-back.png"
                      alt="instance"
                      width="16"
                      height="16"
                      class="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
                      />
                    <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                      <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">Prev</p>
                    </div>
                  </div>                  
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">1</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">2</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">3</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">4</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">...</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[10px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[32px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] flex-col justify-center bg-[#ffffff]">
                    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[22px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] flex-col justify-center">
                      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                        <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">5</p>
                      </div>
                    </div>
                  </div>
                  <div class="gap-[8px] w-full flex px-[8px] py-0 overflow-hidden relative max-w-[72px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-center bg-[#ffffff]">
                    <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
                      <p class="text-[#051b44] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[24px] mb-0 tracking-[-0.5px] normal-case">Next</p>
                    </div>
                    <Img
                      src="next.png"
                      alt="instance"
                      width="16"
                      height="16"
                      class="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
                      />
                  </div>
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
