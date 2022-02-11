import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  IconButton,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { PokemonList } from "../modules/pokemon/components/PokemonList";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" align={"center"} justify={"center"} bg="#484D57">
      <Box
        height="100%"
        maxWidth={{ base: "auto", md: "74.875rem" }}
        mx="auto"
        paddingY={{ base: 0, md: "3rem" }}
        paddingX={{ base: "1rem", md: 0 }}
        marginX={{ base: 0, md: "3rem" }}
        width="100%"
        borderRadius="lg"
      >
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

        <SimpleGrid
          gridTemplateColumns="max-content 1fr"
          display={{ base: "block", md: "grid" }}
        >
          <PokemonList
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Box
            bg="#3B3E46"
            borderTopRightRadius="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={{ base: "lg", md: "none" }}
            borderBottomLeftRadius={{ base: "lg", md: "none" }}
            width="100%"
            minHeight={{ base: "22.5rem", md: "auto" }}
          >
            {children}
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Layout;

interface MobileNavProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ onOpen, ...rest }) => {
  return (
    <Flex height="20" alignItems="center" justifyContent="flex-end" {...rest}>
      <IconButton
        aria-label="burger menu"
        icon={<i className="fas fa-bars" />}
        onClick={onOpen}
      />
    </Flex>
  );
};
