import React from "react";
import { styled } from "styled-components";

// import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
// import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

import "../VariableColor/var.css";

function IconTeamSocComponent({ facebook, instagram }) {
  return (
    <List>
      <Item>
        <Link href={facebook} target="blank" rel="noopener noreferrer">
          Facebook
        </Link>
      </Item>
      <Item>
        <Link href={instagram} target="blank" rel="noopener noreferrer">
          Instagram
        </Link>
      </Item>
      {/* <Item>
        <Link href={telegram} target="blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </Link>
      </Item>
      <Item>
        <Link href={"tel:" + phone}>
          <FaPhoneAlt />
        </Link>
      </Item> */}
    </List>
  );
}

export default IconTeamSocComponent;

const List = styled.ul`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: nowrap;
  justify-content: center;
`;

const Item = styled.li`
  padding-bottom: 20px;

  /* a {
    svg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  } */
  /* iconFacebook */
  /* &:nth-child(1) {
    a {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  } */
  /* iconInstagram */
  /* &:nth-child(2) {
    a {
      svg {
        width: 34px;
        height: 34px;
      }
    }
  } */
  /* iconTelegram */
  /* &:nth-child(3) {
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
  } */
  /* iconPhone */
  /* &:nth-child(4) {
    a {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  } */
`;

const Link = styled.a`
  /* display: block;
  border-radius: 50%; */
  /* position: absolute; */
  /* width: 40px;
  height: 40px; */

  cursor: pointer;

  /* background: var(--bg-color-dog-trainer-icon); */
  color: var(--color-dog-trainer-icon);
  font-size: 1.5rem;

  &:hover,
  &:focus {
    /* background-color: var(--hover-color-dog-trainer-icon); */
    color: var(--hover-bg-color-dog-trainer-icon);
  }
`;
