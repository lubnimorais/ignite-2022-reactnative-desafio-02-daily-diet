import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Typography } from '@components/Typography';

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_50};

  padding: 0 24px;
`;

export const MealContainer = styled.View`
  margin-top: 40px;
`;

export const SectionTitle = styled(Typography).attrs(() => ({
  fontFamily: 'BOLD',
  fontSize: 'LG',
  color: 'GRAY_600',
}))`
  margin-top: 8px;
  margin-bottom: 8px;
`;
