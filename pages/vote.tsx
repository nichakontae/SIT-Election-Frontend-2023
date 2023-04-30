import Navbar from '@components/layout/Navbar';
import Layout from '@components/page/Layout';
import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../model/User';
import { IButton } from '@components/layout/interface';
import axios from '../model/axios';
//vote here
const Vote: FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  const vote = (vote: number) => {
    let tempUser = user;
    tempUser.voted = vote;
    setUser(tempUser);
    sessionStorage.setItem('user', JSON.stringify(user));
    router.push('/submit');
  };
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.sessionStorage &&
      sessionStorage.getItem('user') !== null
    ) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
      if (user !== undefined) {
        axios
          .get('/api/party/', {
            headers: {
              Authorization: user.jwttoken,
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      router.push('/');
    }
  }, []);
  const buttonList: IButton[] = [
    {
      label: 'รับรอง',
      color: '#68DB40',
      onClick: () => {
        vote(1);
      },
    },
    {
      label: 'ไม่รับรอง',
      color: '#FF5B5B',
      onClick: () => {
        vote(-1);
      },
    },
    {
      label: 'ไม่ประสงค์ลงคะแนน',
      color: '#919388',
      onClick: () => {
        vote(0);
      },
    },
  ];

  return (
    <Layout
      title='ใช้สิทธิ์เลือกตั้งของคุณ'
      description={`*เนื่องจากมีผู้สมัครเพียงพรรคเดียว
      การลงคะแนนเสียงจะสามารถเลือกได้เพียง
      รับรอง ไม่รับรอง หรือไม่ประสงค์ลงคะแนน`}
      buttons={buttonList}
      image='/images/samo65.jpeg'
    />
  );
};

export default Vote;
