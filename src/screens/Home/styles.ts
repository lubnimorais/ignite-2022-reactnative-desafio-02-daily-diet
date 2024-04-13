import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_50};

  padding: 0 24px;
`