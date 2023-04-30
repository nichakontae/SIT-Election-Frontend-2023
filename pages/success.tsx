import logout from '@components/authentication/Logout';
import { Box, Container } from '@material-ui/core';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
//route to this page if voted user lock in ไม่ใช้แล้ว
const Done = () => {
  useEffect(() => {
    setTimeout(function(){logout()}, 3000);
  }, []);
  return (
    <div>
      <Container maxWidth='sm'>
        <Box
          display='flex'
          justifyContent='center'
          alignContent='center'
          alignItems='center'>
          ลงคะแนนเรียบร้อย
        </Box>
      </Container>
    </div>
  );
};

export default Done;
