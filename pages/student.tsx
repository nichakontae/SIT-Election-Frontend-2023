import Navbar from '@components/layout/Navbar';
import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../model/User';
import Layout from '@components/page/Layout';
import { IButton } from '@components/layout/interface';

//student(user) informat to see before vote
const Student: FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.sessionStorage &&
      sessionStorage.getItem('user') !== null
    ) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
    } else {
      router.push('/');
    }
  }, []);

  const buttonList: IButton[] = [
    {
      label: 'ดำเนินการต่อ',
      color: '#326295',
      onClick: () => window.location.replace('/vote'),
    },
  ];

  return (
    <Layout
      title='ข้อมูลผู้ใช้สิทธิ์ลงคะแนนเสียงเลือกตั้ง'
      buttons={buttonList}>
      <Box mt={3}>
        {/* <Typography align='center'>{user ? user.description : ''}</Typography> */}
        <Typography align='center'>{user ? user.cn : ''}</Typography>
        <Typography align='center'>{user ? user.uid : ''}</Typography>
      </Box>
    </Layout>
  );
};

export default Student;
