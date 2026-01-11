import { useState } from "react";
import styled from "styled-components";
import { Items } from "./MenuData";
import { Drawer } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <MenuWrapper>
      <div className="menu">
        {Items &&
          Items.map((item, idx) => {
            return (
              <div
                className={`items-conatiner`}
                onClick={() => setActiveIndex(idx)}
                key={idx}
              >
                {item.label}
                <Indicator $activeIndex={activeIndex} />
              </div>
            );
          })}
      </div>

      {Items && <MoreOutlined className="btn" onClick={showDrawer} />}
      {Items && (
        <Drawer
          title="Basic Drawer"
          closable={{ "aria-label": "Close Button" }}
          onClose={onClose}
          open={open}
        >
          {Items &&
            Items.map((item, idx) => {
              return (
                <DrawerItem key={idx}>
                  {item.icon}
                  {item.label}
                </DrawerItem>
              );
            })}
        </Drawer>
      )}
    </MenuWrapper>
  );
};

export default Menu;
const MenuWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 50%;
  .menu {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  .btn {
    display: none;
  }

  .items-conatiner {
    justify-content: center;
    gap: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .items-conatiner:hover {
    color: ${(props) => props.theme.sliderText};
  }

  @media (max-width: 648px) {
    width: 10%;
    .items-conatiner {
      display: none;
    }
    .btn {
      display: contents;
    }
    .btn:hover {
      background: gray;
    }
    .menu {
      height: auto;
    }
  }
`;

const Indicator = styled.div<{ $activeIndex: number | null }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 25%;
  background: ${(props) => props.theme.sliderText};
  transform: translateX(
    ${(props) => (props.$activeIndex !== null ? props.$activeIndex * 100 : 0)}%
  );
  transition: transform 0.3s ease;
`;

const DrawerItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  height: 5%;
  padding: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
