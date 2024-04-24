"use client";
import React from "react";
import { Text, Img, GoogleMap, Button, CheckBox } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const data = [
  {
    daybutton1: "27",
    daybutton2: "28",
    daybutton3: "29",
    daybutton4: "30",
    daybutton5: "31",
    daybutton6: "1",
    daybutton7: "2",
  },
  {
    daybutton1: "3",
    daybutton2: "4",
    daybutton3: "5",
    daybutton4: "6",
    daybutton5: "7",
    daybutton6: "8",
    daybutton7: "9",
  },
  {
    daybutton1: "10",
    daybutton2: "11",
    daybutton3: "12",
    daybutton4: "13",
    daybutton5: "14",
    daybutton6: "15",
    daybutton7: "16",
  },
  {
    daybutton1: "17",
    daybutton2: "18",
    daybutton3: "19",
    daybutton4: "20",
    daybutton5: "21",
    daybutton6: "22",
    daybutton7: "23",
  },
  {
    daybutton1: "24",
    daybutton2: "25",
    daybutton3: "26",
    daybutton4: "27",
    daybutton5: "28",
    daybutton6: "29",
    daybutton7: "30",
  },
];

export default function DashboardPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <>
      {/* main dashboard section */}
      <div className="flex w-full items-start justify-between gap-5 bg-white-A700 pb-[31px] pl-[31px] md:flex-col sm:pb-5 sm:pl-5">
        {/* sidebar navigation section */}
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
          <Menu
            menuItemStyles={{
              button: {
                padding: "20px",
                gap: "13px",
                color: "#ffffff",
                fontWeight: 400,
                fontSize: "25px",
                borderRadius: "10px",
                [`&:hover, &.ps-active`]: {
                  backgroundColor: "#6a95d5 !important",
                  boxShadow: "1.5px 4px 4px 0px #0000003f",
                },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "0.50px" } }}
            className="mt-[140px] flex w-full flex-col self-stretch"
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
              icon={<Img src="img_trophy.svg" width={50} height={50} alt="trophy_one" className="h-[50px] w-[50px]" />}
            >
              WATER BILLS
            </MenuItem>
            <MenuItem
              icon={<Img src="img_search.svg" width={50} height={50} alt="search_one" className="h-[50px] w-[50px]" />}
            >
              SETTING
            </MenuItem>
          </Menu>
          {!collapsed ? (
            <div className="mt-[295px] flex items-center justify-center gap-[13px] self-stretch rounded-[10px] bg-indigo-300 p-3 shadow-xs">
              <Img src="img_search.svg" width={50} height={50} alt="search_three" className="h-[50px] w-[50px]" />
              <Text size="s" as="p" className="mb-[5px] self-end">
                Logout
              </Text>
            </div>
          ) : null}
        </Sidebar>

        {/* main content section */}
        <div className="mb-[19px] flex w-[71%] flex-col items-end md:w-full">
          {/* header section */}
          <div className="flex w-[79%] items-start justify-between gap-5 md:w-full md:p-5 sm:flex-col">
            <Img
              src="img_rectangle_34.png"
              width={216}
              height={102}
              alt="image"
              className="relative left-[10px] top-[-80px] bottom-[175px] h-[145px] w-[15%] rounded-[500px] object-cover sm:w-full"
            />
            <div className="relative h-[141px] w-[34%] sm:w-full">
              <Img
                src="img_rectangle_22.png"
                width={160}
                height={160 }
                alt="image_one"
                className="absolute bottom-[90px] right-[0.00px] top-0 m  my-auto h-[120px] w-[40%] rounded-[450px] object-cover"
              />
              <Img
                src="img_rectangle_35.png"
                width={216}
                height={108}
                alt="image_two"
                className="absolute left-[150px] top-[0.00px] bottom-[175px] my-auto h-[145px] w-[40%] rounded-[500px] object-cover"
              />
            </div>
          </div>

          {/* user profile section */}
          <div className="mr-[188px] mt-[13px] flex w-[17%] items-start gap-1.5 rounded-[22px] bg-blue-200 shadow-sm md:mr-0 md:w-full md:p-5">
            <Img
              src="img_healthicons_ui_user_profile.svg"
              width={45}
              height={45}
              alt="healthiconsui"
              className="h-[45px] w-[45px]"
            />
            <Text size="xs" as="p" className="mt-2">
              Admin
            </Text>
          </div>
          <div className="auto mt-6 flex w-[90%] bottom-[70px] items-center justify-between gap-5 self-start md:w-full md:flex-col md:p-5">
            {/* calendar section */}
            <div className="flex w-[55%] flex-col gap-8 md:w-full">
              <div className="flex flex-col gap-4 rounded border-[10px] border-solid border-gray-200 bg-white-A700 p-1.5 shadow-sm">
                <div className="flex justify-between gap-5">
                  <Button color="blue_gray_100" size="xs" variant="outline" shape="round" className="w-[24px]">
                    <Img src="img_icon.svg" width={24} height={24} />
                  </Button>
                  <CheckBox
                    name="june2024"
                    label="June 2024"
                    id="june2024"
                    className="gap-[35px] py-px pr-[35px] text-center text-base font-semibold text-gray-900 sm:pr-5"
                  />
                </div>
                <div className="flex gap-[7px] sm:flex-col">
                  <Button color="gray_50" size="sm" shape="round" className="w-full !rounded-sm font-medium sm:px-5">
                    3 month ago
                  </Button>
                  <Button color="gray_50" size="sm" shape="round" className="w-full !rounded-sm font-medium sm:px-5">
                    6 months ago
                  </Button>
                  <Button color="gray_50" size="sm" shape="round" className="w-full !rounded-sm font-medium sm:px-5">
                    1 Year Ago
                  </Button>
                </div>

                {/* calendar details section */}
                <div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="h-px bg-blue_gray-50" />
                    <div className="flex sm:flex-col">
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Su
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Mo
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Tu
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        We
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Th
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Fr
                      </Button>
                      <Button shape="round" className="w-full font-light sm:px-5">
                        Sa
                      </Button>
                    </div>
                  </div>

                  {/* calendar weeks section */}
                  <div className="flex flex-col gap-px">
                    {data.map((d, index) => (
                      <div key={"calendarweek" + index} className="flex flex-1 sm:flex-col">
                        <Button shape="round" className="w-full font-light !text-blue_gray-100 sm:px-5">
                          {d.daybutton1}
                        </Button>
                        <Button shape="round" className="w-full font-light !text-blue_gray-100 sm:px-5">
                          {d.daybutton2}
                        </Button>
                        <Button shape="round" className="w-full font-light !text-blue_gray-100 sm:px-5">
                          {d.daybutton3}
                        </Button>
                        <Button shape="round" className="w-full font-light !text-blue_gray-100 sm:px-5">
                          {d.daybutton4}
                        </Button>
                        <Button shape="round" className="w-full font-light sm:px-5">
                          {d.daybutton5}
                        </Button>
                        <Button shape="round" className="w-full font-light sm:px-5">
                          {d.daybutton6}
                        </Button>
                        <Button shape="round" className="w-full font-light sm:px-5">
                          {d.daybutton7}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <GoogleMap showMarker={false} className="h-[357px]" />
            </div>

            {/* user statistics section */}
            <div className="flex w-[39%] flex-col gap-[26px] md:w-full md:flex-row sm:flex-col">
              <div className="flex flex-1 justify-center rounded-[50px] bg-gradient p-3.5 shadow-md">
                <div className="mt-[61px] flex w-[82%] flex-col items-start gap-[11px] md:w-full">
                  <Text size="md" as="p" className="ml-[83px] md:ml-0">
                    USER
                  </Text>
                  <div className="flex flex-wrap justify-between gap-5 self-stretch">
                    <Text as="p" className="self-start">
                      4
                    </Text>
                    <Text as="p">7</Text>
                    <Text as="p" className="self-end">
                      5
                    </Text>
                    <Text as="p" className="self-end">
                      5
                    </Text>
                  </div>
                </div>
              </div>

              {/* battery status section */}
              <div className="flex flex-1 flex-col items-center gap-[23px] rounded-[50px] bg-gradient1 p-[43px] shadow-md md:p-5">
                <Img
                  src="img_emojione_battery.svg"
                  width={81}
                  height={70}
                  alt="emojione_one"
                  className="h-[70px] w-[31%]"
                />
                <Text size="md" as="p" className="mb-1.5">
                  BATERAI
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center gap-[18px] rounded-[50px] bg-gradient p-[46px] shadow-md md:p-5">
                <Img
                  src="img_material_symbols_mode_off_on.svg"
                  width={71}
                  height={72}
                  alt="material_one"
                  className="h-[72px] w-[71px]"
                />
                <Text size="md" as="p" className="mb-[5px]">
                  STATUS{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
