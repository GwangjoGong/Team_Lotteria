import React, {Component} from 'react';
import { Nav, NavIcon } from "react-sidenav";
import {withRR4} from "react-sidenav/withRR4"
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_home as home } from "react-icons-kit/md/ic_home";
import { ic_reorder as simple } from "react-icons-kit/md/ic_reorder";
import { ic_donut_large as render } from "react-icons-kit/md/ic_donut_large";

const Text = styled.div`
  padding-left: 8px;
`;
const theme={
    hoverBgColor: "f5f5f5",
    selectionBgColor: "f5f5f5",
    selectionIconColor: "#03A9F4"
}

const SideNav = withRR4();


class AppNavigation extends React.Component {
    render() {
      return (
        <SideNav theme={theme} defaultSelectedPath={"main"}>
          <Nav id="main">
            <NavIcon>
              <Icon icon={home} />
            </NavIcon>
            <Text>Home</Text>
          </Nav>
          <Nav id="lost">
            <NavIcon>
              <Icon icon={simple} />
            </NavIcon>
            <Text>Lost</Text>
          </Nav>
          <Nav id="found">
            <NavIcon>
              <Icon icon={simple} />
            </NavIcon>
            <Text>Found</Text>
          </Nav>
          <Nav id="temp">
            <NavIcon>
              <Icon icon={render} />
            </NavIcon>
            <Text>AMOLA</Text>
          </Nav>
        </SideNav>
      );
    }
  }

export default AppNavigation;