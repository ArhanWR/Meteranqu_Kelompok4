"use client";
import React from "react";
import { Text, Img, Heading, Button } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function BatteryStatusPage() {
  return (
    <>
      {/* main container section */}
      <div className="w-full">
        {/* sidebar section */}
        <div className="rounded-[40px] bg-white-A700 sm:py-5">
          {/* content section */}
          <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
            {/* sidebar navigation section */}
            <Sidebar1 className="!sticky top-0 flex h-screen w-[347px] flex-col overflow-auto rounded-[20px] bg-blue-200 p-[17px] md:hidden" />

            {/* header section */}
            <div className="flex w-[68%] flex-col items-start gap-[31px] md:w-full">
              <div className="flex items-center gap-[18px] self-end">
                <Img
                  src="img_mdi_bell_indigo_300.svg"
                  width={40}
                  height={40}
                  alt="mdibell_one"
                  className="h-[40px] w-[40px] self-end"
                />
                <Button size="xs" shape="square" className="w-[40px] self-end">
                  <Img src="img_play.svg" width={40} height={40} />
                </Button>
                <Button
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
                  className="min-w-[136px] gap-1.5 sm:pr-5"
                >
                  Admin
                </Button>
              </div>

              {/* battery status section */}
              <div className="flex w-[94%] rounded-[5px] border border-solid border-black-900_89 bg-blue_gray-100 p-[39px] shadow-xs md:w-full sm:p-5">
                <div className="mb-20 flex w-[78%] flex-col items-end md:w-full">
                  <Heading size="md" as="h1" className="mr-[125px] !text-black-900 md:mr-0">
                    Battery Status
                  </Heading>
                  <div className="mr-[121px] h-px w-[43%] bg-black-900 md:mr-0" />
                  <div className="mt-10 flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <Img
                      src="img_emojione_battery.svg"
                      width={248}
                      height={197}
                      alt="emojione_one"
                      className="h-[197px] w-[39%] sm:w-full"
                    />
                    <Text size="md" as="p" className="!text-black-900">
                      100%
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
