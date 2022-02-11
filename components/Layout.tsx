import React, { FC, ReactNode } from "react";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  SimpleGrid,
} from "@chakra-ui/react";
import { PokemonList } from "../modules/pokemon/components/PokemonList";

interface LinkItemProps {
  name: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Home" },
  { name: "Trending" },
  { name: "Explore" },
  { name: "Favourites" },
  { name: "Settings" },
];

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" align={"center"} justify={"center"} bg="#484D57">
      <Box
        height="100%"
        maxHeight="46.0625rem"
        maxWidth="74.875rem"
        mx="auto"
        width="100%"
        borderRadius="lg"
      >
        <SimpleGrid gridTemplateColumns="max-content 1fr">
          <PokemonList
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Box p="4" bg="#3B3E46">
            {children}
          </Box>
        </SimpleGrid>

        {/* Mobile Nav */}
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <PokemonList onClose={onClose} />
          </DrawerContent>
        </Drawer>

        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      </Box>
    </Flex>
  );
};

export default Layout;

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav: FC<MobileProps> = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        aria-label="burger menu"
        borderColor="gray.100"
        variant="outline"
        onClick={onOpen}
        icon={<i className="fas fa-bars" />}
      ></IconButton>
    </Flex>
  );
};
