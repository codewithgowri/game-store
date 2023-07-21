import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSort: (item: string) => void;
  selectedSortItem: string;
}

const OrderSelector = ({ onSort, selectedSortItem }: Props) => {
  const list = [
    { value: "", holder: "Relavance" },
    { value: "name", holder: "name" },
    { value: "-released", holder: "released" },
    { value: "-added", holder: "added" },
    { value: "-created", holder: "created" },
    { value: "rating", holder: "updated" },
    { value: "-rating", holder: "rating" },
    { value: "metacritic", holder: "metacritic" },
  ];
  const currentItem = list.find((item) => item.value == selectedSortItem);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {currentItem?.holder || "Relanvance"}
      </MenuButton>
      <MenuList>
        {list.map((item) => (
          <MenuItem
            key={item.holder}
            value={item.value}
            onClick={() => onSort(item.value)}
          >
            {item.holder}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
