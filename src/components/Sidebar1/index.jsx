import React from "react";
import Link from "next/link";
import { Text, Img } from "./..";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <Sidebar {...props} width="345px !important" collapsedWidth="80px !important" collapsed={collapsed}>
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
            marginTop: "10px",
            [`&:hover, &.ps-active`]: {
              backgroundColor: "#6a95d5 !important",
              boxShadow: "1.5px 4px 4px 0px #0000003f",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.50px" } }}
        className="mt-[161px] flex w-full flex-col self-stretch pb-16 md:pb-5"
      >
        <MenuItem
          icon={<Img src="img_ic_round_dashboard.svg" width={50} height={50} alt="icround_one" className="h-[50px] w-[50px]"/>}
        >
          DASHBOARD
        </MenuItem>
        <MenuItem
          icon={<Img src="img_material_symbols_water_drop.svg" width={50} height={50} alt="material_one" className="h-[50px] w-[50px]"/>}
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
          <Link href="/settingpage">SETTING</Link>
        </MenuItem>
      </Menu>
      {!collapsed ? (
        <div className="mt-[22px] flex items-center justify-center gap-1.5 self-stretch rounded-[10px] bg-indigo-300 p-3 shadow-xs">
          <Img src="img_tabler_logout.svg" width={50} height={50} alt="tablerlogout" className="h-[50px] w-[50px]" />
          <Text size="s" as="p" className="mb-[5px] self-end">
            Logout
          </Text>
        </div>
      ) : null}
    </Sidebar>
  );
}
