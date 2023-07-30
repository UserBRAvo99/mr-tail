import React from "react";
import { styled } from "styled-components";

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

const Item = styled.li``;

const Link = styled.a`
  padding: 10px;
  cursor: pointer;
  color: var(--color-dog-trainer-icon);
  font-size: 1.3rem;

  &:hover,
  &:focus {
    color: var(--hover-bg-color-dog-trainer-icon);
  }
`;
