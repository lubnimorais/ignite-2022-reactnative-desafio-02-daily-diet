import { Header } from "@components/Header";
import { Card } from "@components/Card";

import { HomeContainer } from "./styles";

export function HomeScreen() {
  return (
    <HomeContainer>
      <Header />

      <Card title="90,86%" subtitle="das refeições dentro da dieta"/>
    </HomeContainer>
  )
}