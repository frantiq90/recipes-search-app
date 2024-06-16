import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #66bb6a 30%, #43a047 90%);
`;

const Header = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Recipe Finder by Oskar Kosela
      </Typography>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
