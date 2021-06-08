// Dependencies
import Head from 'next/head'

// Components
import PaymentMethod from '../components/PaymentMethod'
import Immutable from '../components/Immutable'

// Style
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'

function index() {
  return (
    <>
    <Head>
      <title>Frontend Engineer Test</title>
    </Head>
    <Container>
      <Row>
        <Col>
          <Title>
            <h1>Frontend Engineer Test</h1>
          </Title>
        </Col>
      </Row>
    </Container>
    {/* Custom Credit Card Form */}
    <PaymentMethod />

    {/* Immutable */}
    <Immutable />
    </>
  )
}

export default index

const Title = styled.div`
  display: flex;
  padding: 25px 0 15px;
  border-bottom: 1px dashed ${({theme}) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  h1{
    text-align: center;
    font-weight: 400;
    color: ${({theme}) => theme.colors.basic}
  }
`;