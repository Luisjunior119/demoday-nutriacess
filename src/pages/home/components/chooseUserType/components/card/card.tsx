import { Container, Content } from "./card.styles";
import { ICard } from "./card.types";
import { Text } from "../../../../../../components/text/text";

export const Card = ({ icon, description, title, onClick }: ICard) => {
  return (
    <Container onClick={onClick}>
      {icon && icon}
      <Content>
        <Text color="branco" height={32} size="20" weight={600}>
          {title}
        </Text>
        <Text color="branco" height={16} size="16" weight={400}>
          {description}
        </Text>
      </Content>
    </Container>
  );
};
