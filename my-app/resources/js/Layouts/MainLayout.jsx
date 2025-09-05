import React from "react";
import { Head, usePage, Link as InertiaLink } from "@inertiajs/react";
import { Box, Heading, HStack, Text, Link, Menu, MenuButton, MenuList, MenuItem, IconButton,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack} from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";

const MainLayout = ({ children }) => {
    const { auth } = usePage().props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Head>
                <title>{import.meta.env.VITE_APP_NAME}</title>
                <meta name="description" content="This is the main layout description." />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={{base: "xs", md: "md"}}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>menu</DrawerHeader>

                <DrawerBody>
                    <VStack>
                        {auth.user ? (
                            <Box display={"block"}>
                                <VStack>
                                    <Box fontSize={"sm"} mb={4}>
                                        {auth.user.name}さん
                                    </Box>
                                    <Link href={route("dashboard")} _hover={{color:"gray.500"}}>マイページ</Link>
                                    <Link href='#' _hover={{color:"gray.500"}}>店舗の登録</Link>
                                    <InertiaLink href={route('logout')} method="post" onClick={onClose} _hover={{color:"gray.500"}}>ログアウト</InertiaLink>
                                </VStack>
                            </Box>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    新規登録
                                </Link>
                            </>
                        )}
                    </VStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            <header>
            <Box bg={"orange.800"}>
                <HStack justifyContent={"space-between"} alignItems={"center"} py={{base: 0, md: 3}} px={{base: 1, md: 2}}>
                    {/* ヘッダー */}
                    <Heading as="h1" size={{base:"xs", md:"md"}} color={"white"}>
                        <Link href={route('shop.index')} _hover={{color:"gray.500"}}>
                            {import.meta.env.VITE_APP_NAME}
                        </Link>
                    </Heading>
                    {/* PC表示 */}
                    <HStack display={{base: "none", md: "flex"}} color={"white"} fontWeight={"bold"}>
                        {auth.user ? (
                            <Box>
                                <Text
                                    onClick={onOpen}
                                    cursor={"pointer"}
                                    ref={btnRef}
                                    display={"flex"}
                                    alignItems={"center"}
                                    >
                                        {auth.user.name}さん
                                        <SettingsIcon mx={1} />
                                </Text>
                            </Box>
                            ) : (
                            <>
                                <Box>
                                <Link href={route("login")}>
                                    <Button colorScheme={"white"} variant={"outline"} _hover={{bg:"gray.500"}}>ログイン</Button>
                                </Link>
                            </Box>
                            <Box>
                                <Link href={route("register")}>
                                    <Button colorScheme={"blue"}>新規登録</Button>
                                </Link>
                            </Box>
                            </>
                        )}
                    </HStack>
                    {/* SP表示 */}
                    <Box display={{base: "block", md: "none"}} px={{base: "1", md: "none"}} py={{base: "2", md: "none"}}>
                        <HamburgerIcon
                            ref={btnRef}
                            onClick={onOpen}
                            cursor={"pointer"}
                            boxSize={{base:6, md:8}}
                            color={"white"}
                        />
                        {/* <Menu>
                            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" colorScheme={"white"} color={"white"}></MenuButton>
                            <MenuList>
                                <MenuItem icon={<SettingsIcon />} command="⌘T">
                                    マイページ
                                </MenuItem>
                                <MenuItem>
                                    店舗一覧
                                </MenuItem>
                            </MenuList>
                        </Menu> */}
                    </Box>
                </HStack>
            </Box>
            </header>
            <Box>{children}</Box>
            {/* フッター */}
            <Box>
                <Box bg={"orange.800"} color={"white"} fontWeight={"bold"} textAlign={"center"} py={{base:2, md:3}}>
                    <Text fontSize={{base:13, md:16}}>&copy; 2025 {import.meta.env.VITE_APP_NAME}</Text>
                </Box>
            </Box>
        </>
    )
}

export default MainLayout;