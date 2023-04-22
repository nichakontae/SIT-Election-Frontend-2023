import { IButton } from '@components/layout/interface';
import Navbar from '@components/layout/Navbar';
import { Container, Box, Typography, Button, colors } from '@material-ui/core';
import React, { FC } from 'react';

interface ILayout {
  title: string;
  image?: string;
  description?: string;
  buttons: IButton[];
}

const Layout: FC<ILayout> = (props) => {
  const { title, image, description, buttons } = props;
  return (
    <div>
      <Navbar />
      <Container maxWidth='xs'>
        <Box mt={12}>
          <Typography align='center'>{title}</Typography>
        </Box>
        {image && (
          <Box display='flex' mt={3} justifyContent='center'>
            <Box border={2} borderColor='#326295' width={202} borderRadius={4}>
              <Box
                height={260}
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <img src={image} style={{ width: '180px' }} />
              </Box>
            </Box>
          </Box>
        )}
        {props.children}
        <Box mt={3}>
          <Typography align='center'>{description}</Typography>
        </Box>
        <Box
          mt={3}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          {buttons.map((b) => (
            <Box mb={3}>
              <Button
                variant='contained'
                onClick={b.onClick}
                style={{
                  width: '260px',
                  backgroundColor: `${b.color}`,
                  color: 'white',
                }}>
                {b.label}
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
