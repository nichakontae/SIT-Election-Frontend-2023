import { Box, Container, Button, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User } from "../model/User";
import axios from "../model/axios";
import Navbar from "../components/layout/Navbar";

//submit the vote
const Submit = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  const voteStatus = (vote: number) => {
    switch (vote) {
      case -1:
        return "ไม่รับรอง";
      case 0:
        return "ไม่ประสงค์ลงคะแนน";
      case 1:
        return "รับรอง";
      default:
        return "";
    }
  };
  const onEdit = (event) => {
    event.preventDefault();
    router.replace("/vote");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    axios
      .post(
        "/api/vote/",
        {
          party: [
            {
              id: 1,
              choice: user.voted,
            },
          ],
        },
        {
          headers: {
            Authorization: user.jwttoken,
          },
        }
      )
      .then((res) => {
        router.push("/success");
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.sessionStorage &&
      sessionStorage.getItem("user") !== null
    ) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    } else {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <Navbar/>
      <Container maxWidth="sm">
        <Box mt={5}><Typography align="center">ตรวจสอบการลงคะแนนเสียงเลือกตั้ง</Typography></Box>
        <Typography align="center">คุณเลือก</Typography>
        <Typography align="center">
          <strong>{voteStatus(user ? user.voted : -2)}</strong>
        </Typography>
        <Box display="flex" mt={3} mb={3} justifyContent="space-around">
          
          <Button
            style={{ backgroundColor: "#4698CA" }}
            variant="contained"
            onClick={(e) => {
              onEdit(e);
            }}
          >
            แก้ไขการใช้สิทธิ์
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            ยืนยันการใช้สิทธิ์
          </Button>
        </Box>

        <Box display="flex" justifyContent="center">
          {" "}
          **เมื่อทำการเลือก “ยืนยันการใช้สิทธิ์”
          ระบบจะทำการบันทึกข้อมูลและออกจากระบบโดยอัตโนมัติ**
        </Box>
      </Container>
    </div>
  );
};

export default Submit;
