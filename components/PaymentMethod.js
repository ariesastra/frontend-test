// Dependencies
import {useState} from 'react'
import MaskedInput from 'react-text-mask'

// Style
import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'
import formStyle from '../styles/Form.module.css'

function PaymentMethod() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [exp, setExp] = useState('')
    const [provider, setProvider] = useState({
        image: '',
        text: 'NONE'
    })

    // onKeyUp Funciton
    const changeCardName = (e) => {
        let nama = e.target.value
        setName(nama)
    }
    
    const changeCardNumber = (e) => {
        setNumber(e.target.value)

        // Init
        let firstNumb = []
        let noSatu
        
        firstNumb = e.target.value
        firstNumb = [...firstNumb.slice(0, 4)]
        noSatu = parseInt(firstNumb[0])
        
        switch (noSatu) {
            case 4:
                setProvider({
                    image: '/visa.png',
                    text: ''
                })
                break;
            case 2:
                setProvider({
                    image: '/jcb.png',
                    text: ''
                })
                break;
            case 5:
                setProvider({
                    image: '/master.png',
                    text: ''
                })
                break;
            default:
                setProvider({
                    image: '',
                    text: 'NONE'
                })
                break;
        }
    }
    
    const changeExpiration = (e) => {
        setExp(e.target.value)
    }

    return (
        <Container>
        {/* Cheat Sheet Section */}
        <Row>
            <Description>
                <h2>
                    This is Custom Interactive Credit Card Form
                </h2>
            </Description>
            <CheatSheet>
                <CheatTitle>
                    <h3>Cheat Sheet</h3>
                    <p>
                        Use this guide to check your credit card.
                    </p>
                </CheatTitle>
                <CheatBody>
                    <ul>
                        <li>
                            <Left>
                                <ImgContainer>
                                   <Image 
                                        src='/visa.png'
                                        alt='Credit Card Image'
                                        loading='lazy'
                                   />
                                </ImgContainer>
                            </Left>
                            <Right>
                                <p>Visa Start with 4</p>
                                <p>4*** **** **** ****</p>
                            </Right>
                        </li>
                        <li>
                            <Left>
                                <ImgContainer>
                                   <Image 
                                        src='/master.png'
                                        alt='Credit Card Image'
                                        loading='lazy'
                                   />
                                </ImgContainer>
                            </Left>
                            <Right>
                                <p>Mastercard Start with 5</p>
                                <p>5*** **** **** ****</p>
                            </Right>
                        </li>
                        <li>
                            <Left>
                                <ImgContainer>
                                   <Image 
                                        src='/jcb.png'
                                        alt='Credit Card Image'
                                        loading='lazy'
                                   />
                                </ImgContainer>
                            </Left>
                            <Right>
                                <p>JCB Start with 3</p>
                                <p>3*** **** **** ****</p>
                            </Right>
                        </li>
                    </ul>
                </CheatBody>
            </CheatSheet>
        </Row>
        {/* Credit Card Form */}
        <Row>
            <Col sm={12} md>
                <CardBox>
                    <Card>
                        <CardBank>
                            MyBank
                        </CardBank>
                        <CardHead>
                            {
                                provider.image
                                ? (
                                    <CardFrom 
                                        src={provider.image}
                                        alt='Credit Card Mastercard'
                                        loading='lazy'
                                    />
                                )
                                : (
                                    <p>{provider.text}</p>
                                )
                            }
                        </CardHead>
                        <CardNumb>
                            <small>
                                Card Number
                            </small>
                            <p>
                                {number ? number : 'xxxx xxxx xxxx xxxx'}
                            </p>
                        </CardNumb>
                        <CardOwner>
                            <CardName>
                                <small>Cardholder Name</small>
                                <p>
                                    {name ? name : 'xxxxx xxxxx'}
                                </p>
                            </CardName>
                            <CardExp>
                                <small>Expiration</small>
                                <CardValid>
                                    <small>
                                        VALID THRU 
                                    </small>
                                    <p>
                                        {exp ? exp :'xx/xx'}
                                    </p>
                                </CardValid>
                            </CardExp>
                        </CardOwner>
                    </Card>
                </CardBox>
            </Col>
            <Col sm={12} md>
                <FormCard>
                    <h2>Put Your Credential Here</h2>
                    <FormName>
                        <p>Name</p>
                        <MaskedInput 
                            className={formStyle.nameInput}
                            placeholder="Your Name on Card"
                            id="name"
                            keepCharPositions={true}
                            placeholderChar="x"
                            placeholder="xxxxx xxxxx"
                            guide={false}
                            type="text"
                            onChange={changeCardName}
                            mask={[/[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/, /[A-Z, a-z, ' ']/]}
                        />
                    </FormName>
                    <FormNumb>
                        <p>Card Number</p>
                        <div className={formStyle.numbInput}>
                            <MaskedInput 
                                className={formStyle.numbForm}
                                placeholder="Your Credit Card Number"
                                id="cardNumber"
                                onChange={changeCardNumber}
                                keepCharPositions={true}
                                placeholderChar="x"
                                placeholder="xxxx xxxx xxxx xxxx"
                                guide={true}
                                type="text"
                                mask={[/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <CardProvider>
                                {
                                    provider.image
                                    ? (
                                        <ProviderCC 
                                            src={provider.image}
                                            alt="provice cc"
                                            loading="lazy"
                                        />
                                    )
                                    : (
                                        <p>{provider.text}</p>
                                    )
                                }
  
                            </CardProvider>
                        </div>
                    </FormNumb>
                    <FormValid>
                        <ValidDate>
                            <p>Expiration (mm/yy)</p>
                            <MaskedInput
                                className={formStyle.expireInput}
                                id="expiration"
                                onKeyUp={changeExpiration}
                                keepCharPositions={true}
                                placeholderChar="x"
                                guide={true}
                                type="text"
                                placeholder="xx/xx"
                                mask={[/[1-9]/, /\d/, '/', /\d/, /\d/]}
                            />
                        </ValidDate>
                        <ValidCode>
                            <p>Security Code</p>
                            <MaskedInput
                                className={formStyle.codeInput} 
                                id="secureCode"
                                keepCharPositions={true}
                                placeholderChar="x"
                                placeholder="xxx"
                                guide={true}
                                type="password"
                                mask={[/[1-9]/, /\d/, /\d/]}
                            />
                        </ValidCode>
                    </FormValid>
                </FormCard>
            </Col>
        </Row>
        </Container>
    )
}

export default PaymentMethod

/* Cheat Sheet Section */
const Description = styled.div`
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
    h2{
        text-align: center;
    }
`;

const CheatSheet = styled.div`
    position: relative;
    width: 80%;
    margin: auto;
`;

const CheatTitle = styled.div`
    
    h3, p{
        text-align: center;
    }
`;

const CheatBody = styled.div`
    position: relative;
    width: 100%;
    margin-top: 35px;
    ul{
        @media screen and (min-width: 480px){
            width: 420px;
        }
        position: relative;
        margin: auto;
        list-style: none;
        padding: 0;
    }
    ul > li{
        display: flex;
        margin: 10px 0;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20%;
    margin-right: 25px;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 66.66%;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    top: 0;
`;

const Right = styled.div`
    width: 70%;
    p{
        margin: 8px;
        line-height: 20px;
        font-weight: 100;
        color: ${({theme}) => theme.colors.secondary};
    }
`;

/* Credit Card */
const CardBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    width: 300px;
    height: 180px;
    border-radius: 20px;
    color: ${({theme}) => theme.colors.basic};
    background: rgba(39, 40, 34, 0.1);
    box-shadow: 10px 10px 20px -10px rgba(39, 40, 34, 0.5);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    transition: .5s ease;
`;
const CardBank = styled.h3`
    font-weight: 600;
    font-size: 23px;
    padding: 20px 0 0 15px;
`;
const CardHead = styled.div`
    position: absolute;
    right: 0;
    width: 30%;
    height: 35px;
    padding-top: 66.66%;
    p{
        position: absolute;
        top: 17px;
        font-size: 23px;
        font-weight: 700;
    }
`;
const CardFrom = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    padding: 15px 15px 0 0;
`;
const CardNumb = styled.div`
    position: absolute;
    left: 0;
    padding: 0 0 0 15px;
    top: 65px;
    small{
        font-family: ${({theme}) => theme.font.secondary};
        font-size: 10px;
        font-weight: 200;
        letter-spacing: 2px;
    }
    p{
        letter-spacing: 5.5px;
    }
`;
const CardOwner = styled.div``;
const CardName = styled.div`
    position: absolute;
    padding: 0 0 0 15px;
    width: 50%;
    bottom: 0;
    left: 0;
    small{
        font-family: ${({theme}) => theme.font.secondary};
        font-size: 10px;
        font-weight: 200;
        letter-spacing: 2px;
    }
`;
const CardExp = styled.div`
    position: absolute;
    width: 40%;
    bottom: 0;
    right: 0;
    small{
        font-family: ${({theme}) => theme.font.secondary};
        font-size: 10px;
        font-weight: 200;
        letter-spacing: 2px;
    }
`;
const CardValid = styled.div`
    display: flex;
    flex-direction: row;
    small{
        font-size: 8px;
        width: 40px;
        font-weight: 700;
    }
`;

/* Form Submit */
const FormCard = styled.form`
    position: relative;
    margin-top: 45px;
    h2{
        font-size: 23px;
        text-align: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    }
`;
const FormName = styled.div`
    margin-top: 15px;
    p{
        margin-bottom: 5px;
    }
`;

const FormNumb = styled.div`
    margin-top: 15px;
    p{
        margin-bottom: 5px;
    }
`;

const CardProvider = styled.div`
    position: absolute;
    right: 15px;
    top: 0;
    width: 50px;
    height: 50px;
    padding-top: 66.66%;
    p{
        position: absolute;
        top: 5px;
        font-size: 17px;
        font-weight: 700;
    }
`;
const ProviderCC = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
`;

const FormValid = styled.div`
    display: flex;
    @media screen and (min-width: 768px){
        flex-direction: row;
    }
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`;
const ValidDate = styled.div`
    padding: 0 5px 0 0;
    margin-top: 15px;
    p{
        margin-bottom: 5px;
    }
`;

const ValidCode = styled.div`
    padding: 0 0 0 5px;
    margin-top: 15px;
    p{
        margin-bottom: 5px;
    }
`;
