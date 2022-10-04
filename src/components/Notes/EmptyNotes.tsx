import { LightbulbOutlined as Light } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";

const LightIcon = styled(Light)`
  color: #f5f5f5;
  font-size: 120px;
`;

const Text = styled(Typography)`
  font-size: 22px;
  color: #80868b;
`;

const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
`;

// Показ его на странице после получения значения title от Container.tsx
export const EmptyNotes = ({ title }: { title: string }) => {
  return (
    <Container>
      <LightIcon />
      <Text>{title}</Text>
    </Container>
  );
};
