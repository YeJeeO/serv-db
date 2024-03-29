/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Container, Card, Row, Text } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { Navbar, Avatar, NavbarBrand, NavbarContent } from "@nextui-org/react";


const preventDefault = (event) => event.preventDefault();

export default function Nav() {
  const [variant, setVariant] = React.useState("static");
  const variants = ["floating"];
  return (<>

    {/* <Container onClick={preventDefault}> */}

    <Navbar isBordered variant={variant} >

      <NavbarContent css={{
        maxW: "100%",
        boxSizing: "border-box",
        dflex: "center",
        position: "fixed",
        width: "100%"
      }}>
        <NavbarBrand>
          <Avatar
            size="xl"
            src="./logo_mini.jpg"
            color="gradient"
            bordered
            squared
          />
        </NavbarBrand>
        <Link as={NextLink} href='/' >О нас</Link>
        <Link as={NextLink} href='/second'>Преподаватели</Link>
        <Link as={NextLink} href='/third'>Мероприятия</Link>
        <Link as={NextLink} href='/fouth'>Галерея</Link>
        <Link as={NextLink} href='/fifth'>Расписание</Link>
        <Link as={NextLink} href='/admin'>Admin</Link>
      </NavbarContent>
    </Navbar>
    {/*     </Container> */}
  </>
  );
}