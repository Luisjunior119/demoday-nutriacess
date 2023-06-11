import { useState } from 'react'
import { Input } from '../../../../components/input/input'
import { Text } from '../../../../components/text/text'
import { Container, DivTitulo, Alinhamento, ContentInput, DivRadioPlan, DivTypePlan, Inputstyle, SectionPlan} from './sideLeft.styles'
import { StyledInput } from '../../../formulario/components/InputCheck/InputCheck.styles'

export const SideLeft = () => {



    const [plan, setPlan] = useState("");
    const [nometitular, setNometitular] = useState("");
    const [ncartao, setNcartao] = useState("");
    const [validade, setValidade] = useState("");
    const [cods, setCods] = useState("");

    const handleNometitularChange = (value: string) => {
        setNometitular(value);
    };

    const handleNcartaoChange = (value: string) => {
        setNcartao(value);
    };

    const handleValidadeChange = (value: string) => {
        setValidade(value);
    };

    const handleCodsChange = (value: string) => {
        setCods(value);
    };

    return (
        <Container>
           
             <DivTitulo>
            <Text color='preto' size='24' height={50} weight={600}>Método de Pagamento</Text>

            <Text color='preto' size='20' height={31} weight={600}>Cartão de Crédito</Text>
            </DivTitulo>

            <Alinhamento>
            <Inputstyle>
                <Input label='' onChange={handleNometitularChange} placeholder='Nome do titular do cartão' value={nometitular} type='text'></Input>
            </Inputstyle>
            <Inputstyle>
                <Input label='' onChange={handleNcartaoChange} placeholder='Número do cartão ' value={ncartao} ></Input>
            </Inputstyle>

            <ContentInput>
                <Inputstyle>
                    <Input label='' onChange={handleValidadeChange} placeholder='Validade' value={validade} />
                </Inputstyle>
                <Inputstyle>
                    <Input label='' onChange={handleCodsChange} placeholder='Cód. de segurança' value={cods} />
                </Inputstyle>
            </ContentInput>
            </Alinhamento>

            <DivTypePlan>
                <Text color='preto' size='20' height={30} weight={200}>Qual plano você deseja?</Text>
            </DivTypePlan>

            

            <DivRadioPlan>
                <SectionPlan>
                    <StyledInput name="myCheckbox"  onChange={(e) => setPlan(e.target.value)} value={plan} type='radio' />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Plus </Text>
                </SectionPlan>

                <SectionPlan>
                    <StyledInput name="myCheckbox"  onChange={(e) => setPlan(e.target.value)} value={plan} type="radio" />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Premium </Text>
                </SectionPlan>

                <SectionPlan>
                    <StyledInput name="myCheckbox"  onChange={(e) => setPlan(e.target.value)} value={plan} type='radio' />
                        <Text color='preto' size='18' height={30} weight={300}>
                        Plano Família
                        </Text>
                </SectionPlan>

            </DivRadioPlan>

        </Container>
    )
}
