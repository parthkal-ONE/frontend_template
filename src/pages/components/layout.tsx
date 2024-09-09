"use client";
import * as React from "react";
import {
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  styled,
  useTheme,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Button,
  Card,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  People,
  WorkOutline,
  ErrorOutline,
  Settings,
  HomeRounded,
  ArticleRounded,
  StorageRounded,
  BackupTableRounded,
  ChecklistRtlRounded,
  DashboardRounded,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ReactNode, ChangeEvent } from "react";
import Head from "next/head";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MainLayout({ children }: { children: ReactNode }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            height: 300,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Image
            src="/one-magenta-logo-full-no-bg.png"
            width={726 / 2.7}
            height={344 / 2.7}
            alt="ONE Logo"
            priority
          />
          <Typography variant="h5" gutterBottom>
            You are not signed in.
          </Typography>
          <Button variant="contained" onClick={() => signIn()}>
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  /*
  NOTE:
  1. Edit the SIDEBAR_MAP array to customize the Sidebar.

  2. Please use either of these formats inside the SIDEBAR_MAP array:
    a. {
      type: "link",
      icon: <Icon_Name style={{ marginRight: 2 }} />,
      text: "Text_To_Show_In_Menu",
      link: "URL_of_the_page",
    }

    b.  {
      type: "separator",
    }

  3. To take a look at the Icons you can use, go to: https://mui.com/material-ui/material-icons/
  
  4. Please import the icon you want to use from "@mui/icons-material" library.
  */

  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  const SIDEBAR_MAP = [
    {
      type: "link",
      icon: <HomeRounded style={{ marginRight: 2 }} />,
      text: "Home",
      link: `/`,
    },
    {
      type: "link",
      icon: <ArticleRounded style={{ marginRight: 2 }} />,
      text: "Navigation",
      link: `/${projectId}/navigation`,
    },
    {
      type: "link",
      icon: <StorageRounded style={{ marginRight: 2 }} />,
      text: "Data Fetching",
      link: `/${projectId}/data-fetching`,
    },
    {
      type: "link",
      icon: <BackupTableRounded style={{ marginRight: 2 }} />,
      text: "Tables",
      link: `/${projectId}/tables`,
    },
    {
      type: "link",
      icon: <ChecklistRtlRounded style={{ marginRight: 2 }} />,
      text: "Forms",
      link: `/${projectId}/forms`,
    },
    {
      type: "separator",
    },
    {
      type: "link",
      icon: <DashboardRounded style={{ marginRight: 2 }} />,
      text: "Other Components",
      link: `/${projectId}/other-components`,
    },
  ];

  const handleOpenUserMenu = (event: ChangeEvent<HTMLInputElement> | any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>ONE NA Frontend Template</title>
      </Head>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", paddingX: 2 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              ONE NA Frontend Template
            </Typography>
          </div>
          <Image
            src="/one-grey-logo-secondary-no-bg.png"
            width={1083 / 6}
            height={230 / 6}
            alt="ONE Logo"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            priority
          />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Image"
                  src={session?.data?.user?.image || ""}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  session?.status == "authenticated" ? signOut() : signIn();
                }}
              >
                <Typography textAlign="center">
                  {session?.status == "authenticated" ? "Sign Out" : "Sign In"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SIDEBAR_MAP.map((item, index) => {
            if (item.type === "separator") {
              return <Divider key={index} />;
            } else {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => router.push(`${item.link}`)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
      </Drawer>
      <Main
        style={{
          marginTop: "4rem",
        }}
        open={open}
      >
        {children}
      </Main>
    </Box>
  );
}
