import React from "react";
import { styled } from "styled-components";

import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaPhoneAlt, FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import "../VariableColor/var.css";

export function IconSocComponent({
  facebook,
  instagram,
  telegram,
  phone,
  map,
  mail,
}) {
  return (
    <WrapperList>
      <List>
        <Item>
          <Link href={facebook} target="blank" rel="noopener noreferrer">
            <TiSocialFacebook />
          </Link>
        </Item>
        <Item>
          <Link href={instagram} target="blank" rel="noopener noreferrer">
            <TiSocialInstagram />
          </Link>
        </Item>
        <Item>
          <Link href={telegram} target="blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </Link>
        </Item>
        <Item>
          <Link href={"tel:" + phone}>
            <FaPhoneAlt />
          </Link>
        </Item>
        <Item>
          <Link href={map}>
            <FaMapMarkerAlt />
          </Link>
        </Item>
        <Item>
          <Link href={"mailto:" + mail}>
            <BiLogoGmail />
          </Link>
        </Item>
      </List>
    </WrapperList>
  );
}

const WrapperList = styled.div`
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  max-width: calc((50px * 3) + 60px);
  flex-wrap: wrap;
  gap: 30px;
`;

const Item = styled.li`
  display: block;
  width: 50px;
  height: 50px;
  padding-bottom: 20px;

  a {
    svg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  /* iconFacebook */
  &:nth-child(1) {
    a {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  /* iconInstagram */
  &:nth-child(2) {
    a {
      svg {
        width: 34px;
        height: 34px;
      }
    }
  }
  /* iconTelegram */
  &:nth-child(3) {
    a {
      svg {
        position: relative;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);

        width: 28px;
        height: 28px;
      }
    }
  }
  /* iconPhone */
  &:nth-child(4) {
    a {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
  /* iconMap */
  &:nth-child(5) {
    a {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
  /* iconMail */
  &:nth-child(6) {
    a {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

const Link = styled.a`
  display: block;
  border: solid 1px rgba(0, 0, 0, 20%);
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  /* background: var(--bg-color-dog-trainer-icon); */
  color: rgba(0, 0, 0, 70%);

  &:hover,
  &:focus {
    /* background-color: var(--hover-color-dog-trainer-icon); */
    color: var(--hover-bg-color-dog-trainer-icon);
  }
`;
