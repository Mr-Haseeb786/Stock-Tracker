import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Sidebar from "./Sidebar";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

// const openSidebar = () => {

// }

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "5rem" }}>
      <Sidebar />
      {
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <Grid container justifyItems={"center"} alignItems={"center"}>
                <Grid item xs={11}>
                  <Typography variant='h4' sx={{ textAlign: "center" }}>
                    Stocker
                  </Typography>
                </Grid>
                <Grid item xs={1} justifySelf={"right"}>
                  <SettingsIcon sx={{ cursor: "pointer" }} />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      }
    </nav>
  );
};

//    <HideOnScroll {...props}>
//   <AppBar>
//     <Toolbar>
//       <Typography variant='h6' component='div'>
//         Scroll to hide App bar
//       </Typography>
//     </Toolbar>
//   </AppBar>
// </HideOnScroll>;
// }

export default Navbar;
