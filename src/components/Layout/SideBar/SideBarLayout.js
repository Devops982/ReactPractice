import { Drawer } from "@mui/material";
import React from "react";

function SideBarLayout() {
  return (
    <div>
      <Drawer variant="permanent" anchor="left" mt="20px">
        <div> SideBar</div>
      </Drawer>
    </div>
  );
}

export default SideBarLayout;
