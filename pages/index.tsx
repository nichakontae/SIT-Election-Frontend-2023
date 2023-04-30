import Login from "@components/authentication/Login";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";


const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
});
//log in page
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Box display="flex" height={50} justifyContent="space-between" style={{ margin: '10px 0px' }}>
          <img src="/images/sitlogo.png" />
          <img height={35} style={{ margin: '10px 0px' }} src="/images/samologo.png" />
        </Box>
        <Box>
          <Typography className={classes.title} my={5} align="center">
            ระบบเลือกตั้ง คณะกรรมการสโมสรนักศึกษา คณะเทคโนโลยีสารสนเทศ มจธ.
            ปีการศึกษา 2565
          </Typography>
        </Box>
        <Login />
      </Container>
    </div>
  );
};

export default Home;
