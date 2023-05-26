import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

function SortSelctor() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort
      </MenuButton>
      <MenuList>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item2</MenuItem>
        <MenuItem>Item3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelctor;
