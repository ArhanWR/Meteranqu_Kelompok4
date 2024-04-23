"use client";
import React from "react";
import { Text, Img, Heading, Button } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function SettingPagePage() {
  return (
    <>
      {/* main content section */}
      <div className="w-full">
        {/* sidebar section */}
        <div className="rounded-[40px] bg-white-A700 py-[31px] sm:py-5">
          {/* sidebar menu section */}
          <div className="container-xs flex justify-between gap-5 md:flex-col md:p-5">
            {/* sidebar top section */}
            <Sidebar1 className="!sticky top-0 flex h-screen w-[347px] flex-col overflow-auto rounded-[20px] bg-blue-200 p-[17px] md:hidden" />

            {/* profile section */}
            <div className="flex w-[70%] flex-col items-end gap-12 md:w-full">
              {/* notification bar section */}
              <div className="flex items-center gap-[18px]">
                <Img
                  src="img_mdi_bell.svg"
                  width={40}
                  height={40}
                  alt="mdibell_one"
                  className="h-[40px] w-[40px] self-end"
                />
                <Button color="blue_200" size="xs" shape="square" className="w-[40px] self-end">
                  <Img src="img_user.svg" width={40} height={40} />
                </Button>
                <Button
                  color="blue_200"
                  shape="round"
                  leftIcon={
                    <Img
                      src="img_healthiconsuiuserprofile.svg"
                      width={45}
                      height={45}
                      alt="healthicons:ui-user-profile"
                      className="h-[45px] w-[45px]"
                    />
                  }
                  className="min-w-[136px] gap-1.5 text-white-A700 shadow-sm sm:pr-5"
                >
                  Admin
                </Button>
              </div>

              {/* profile details section */}
              <div className="mr-[9px] flex flex-col items-center self-stretch md:mr-0">
                {/* profile overview section */}
                <div className="relative z-[1] flex w-[30%] flex-col items-start justify-center rounded-[30px] bg-indigo-300 p-[21px] shadow-md md:w-full sm:p-5">
                  <Heading size="xs" as="h1" className="ml-[71px] md:ml-0">
                    PROFILE
                  </Heading>
                  <div className="h-px w-[65%] self-center bg-gray-300" />

                  {/* profile avatar section */}
                  <div className="relative ml-[81px] mt-3.5 h-[64px] w-[40%] md:ml-0 md:h-auto">
                    <Img
                      src="img_image.png"
                      width={64}
                      height={64}
                      alt="image_one"
                      className="h-[64px] w-full object-cover"
                    />
                    <div className="absolute bottom-[3.00px] right-[5.67px] m-auto h-[13px] w-[13px] rounded-md bg-teal-800" />
                  </div>
                  <Text as="p" className="ml-[69px] mt-2 md:ml-0">
                    AdminQu
                  </Text>
                  <Text as="p" className="self-center">
                    adminqu@gmail.com
                  </Text>
                </div>

                {/* account settings section */}
                <div className="relative mt-[-87px] flex flex-col gap-[73px] self-stretch rounded-[30px] bg-indigo-300 p-[49px] shadow-md md:gap-[54px] md:p-5 sm:gap-9">
                  {/* account options section */}
                  <div className="mt-[61px] flex flex-col items-start">
                    <Text as="p" className="ml-[9px] md:ml-0">
                      Account
                    </Text>
                    <div className="mt-[5px] h-[6px] self-stretch" />
                    <Text as="p" className="ml-[9px] mt-3.5 md:ml-0">
                      Edit Profile
                    </Text>
                    <Text as="p" className="ml-[9px] mt-[33px] md:ml-0">
                      Change Password
                    </Text>
                    <Text as="p" className="ml-[9px] mt-[31px] md:ml-0">
                      Change Email
                    </Text>
                  </div>

                  {/* general settings section */}
                  <div className="mb-[13px] flex flex-col items-start">
                    <Text as="p" className="ml-[13px] md:ml-0">
                      Settings
                    </Text>
                    <div className="mt-2.5 h-px self-stretch bg-gray-300" />
                    <Text as="p" className="ml-[17px] mt-3.5 md:ml-0">
                      Languange
                    </Text>
                    <Text as="p" className="ml-[17px] mt-7 md:ml-0">
                      Notifications
                    </Text>
                    <Text as="p" className="ml-[17px] mt-[31px] md:ml-0">
                      Dark Mode
                    </Text>
                    <Text as="p" className="ml-[17px] mt-7 md:ml-0">
                      Battery Status
                    </Text>
                    <Text as="p" className="ml-[17px] mt-[18px] md:ml-0">
                      Status
                    </Text>
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
