import {
  CardWrapper,
  CloseButton,
  Container,
  Header,
} from "./chooseUserType.styles";
import { Text } from "../../../../components/text/text";
import { X } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Card } from "./components/card/card";
import EspTypeSvg from "../../../../assets/esp-type.svg";
import UserTypeSvg from "../../../../assets/user-type.svg";
import { useNavigate } from "react-router-dom";
import { IChooseUserType } from "./chooseUserType.types";

export const ChooseUserType = ({ isVisible }: IChooseUserType) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container isVisible={isVisible}>
      <Header>
        <Text color="preto" height={32} weight={600} size="24">
          Como você quer se cadastrar?
        </Text>
        <CloseButton>
          <X color={theme.Colors.preto} weight="regular" size={32} />
        </CloseButton>
      </Header>
      <CardWrapper>
        <Card
          description="Quero passar em consultas com nutricionistas "
          icon={<img src={UserTypeSvg} alt="Icone de usuário" />}
          onClick={() => navigate("/sign-up-user")}
          title="Cliente"
        />
        <Card
          description="Quero atender pacientes online, e investir na minha carreira. "
          icon={<img src={EspTypeSvg} alt="Icone de especialista" />}
          onClick={() => navigate("/sign-up-user")}
          title="Especialista"
        />
      </CardWrapper>
    </Container>
  );
};
