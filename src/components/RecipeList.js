import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return (
      <CenteredBox>
        <Typography variant="h5" component="div" color="textSecondary">
          No recipes found.
        </Typography>
      </CenteredBox>
    );
  }

  return (
    <GridContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
      ))}
    </GridContainer>
  );
};

export default RecipeList;
