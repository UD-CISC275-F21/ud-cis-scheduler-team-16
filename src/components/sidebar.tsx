import React, {useState} from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import "./App.css";

<ProSidebar>
  <Menu iconShape="square">
  <MenuItem>Colleges</MenuItem>
    <SubMenu title="Colleges">
      <MenuItem>Math</MenuItem>
      <SubMenu> Math243 </SubMenu>
      <SubMenu> Math242 </SubMenu> 
      <SubMenu> Math241 </SubMenu>
      <SubMenu> Math349 </SubMenu>
      <SubMenu> Math426 </SubMenu>
    <MenuItem>Computer Science</MenuItem>
      <SubMenu> CISC108 </SubMenu>
      <SubMenu> CISC210 </SubMenu>
      <SubMenu> CISC220 </SubMenu>
      <SubMenu> CISC181 </SubMenu>
      <SubMenu> CISC275 </SubMenu>
    </SubMenu>
  </Menu>
</ProSidebar>;