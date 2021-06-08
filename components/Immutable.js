// Dependencies
import {useState} from 'react'
import Async from 'async'

// Components

// Style
import styled from 'styled-components'
import {Row, Col, Button, Container} from 'react-bootstrap'
import FormStyle from '../styles/Form.module.css'

function Immutable() {
    const [result, setResult] = useState([{hope: ''}])

    // Calling Paraller Async
    const parallelAction = () => {
        const firstName = document.getElementById('firstname').value
        const lastName = document.getElementById('lastname').value

        Async.parallel([
            function(callback) {
                if (typeof(firstName) === 'string') {
                    setTimeout(() => {
                        const addOn = `my first name is ${firstName}, I'am Frontend Engineer.`
                        callback(null, addOn)
                    }, 200)
                }
            },
            function(callback) {
                if (typeof(lastName) === 'string') {
                    setTimeout(() => {
                        const addOn = `my last name is ${lastName}, and I want to be hired !`
                        callback(null, addOn)
                    }, 100);
                }
            }
        ],
        function(err, results) {
            setResult({
                hope : results[0] + results[1],
            })
        }); 
    }

    // Calling Series Async
    const seriesAction = () => {
        const firstName = document.getElementById('firstname').value
        const lastName = document.getElementById('lastname').value

        Async.series([
            function(callback) {
                const addOn = `my first name is ${firstName}, I'am Frontend Engineer.`
                callback(null, addOn);
            },
            function(callback) {
                const addOn = `my last name is ${lastName}, and I want to be hired ! `
                callback(null, addOn);
            }
        ],
        // optional callback
        function(err, results) {
            setResult({
                hope: results[1] + results[0]
            })
        });
    }

    return (
        <Container>
            <Row>
                <Col sm={12} md>
                    <Title>
                        <h3>Immutable Async Component</h3>
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md lg>
                    <InputText>
                        <p>First Name</p>
                        <FirstName 
                            id="firstname"
                        />
                    </InputText>
                    <InputText>
                        <p>Second Name</p>
                        <SecondName 
                            id="lastname"
                        />
                    </InputText>
                    <Button onClick={parallelAction} className={FormStyle.button}>Parallel</Button>
                    <Button onClick={seriesAction} className={FormStyle.button}>Series</Button>
                </Col>
                <Col sm={12} md lg>
                    {
                        result.hope
                        ? result.hope
                        : ''
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Immutable

const Title = styled.div`
    border-top: 1px dashed ${({theme}) => theme.colors.secondary};
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        text-align: center;
        margin-top: 15px;
    }
`;

const InputText = styled.div`
    position: relative;
    width: 100%;
`;
const FirstName = styled.input.attrs(props => ({
    type: "text",
}))`
    border: 1px solid #738290;
    box-sizing: border-box;
    border-radius: 4px;
    display: inline-block;
    padding: 5px 10px;
    @media screen and (max-width: 767px){
        width: 100%;
    }
    @media screen and (min-width: 768px){
        width: 300px;
    }
`;
const SecondName = styled.input.attrs(props => ({
    type: "text",
}))`
    border: 1px solid #738290;
    box-sizing: border-box;
    border-radius: 4px;
    display: inline-block;
    padding: 5px 10px;

    @media screen and (max-width: 767px){
        width: 100%;
    }
    @media screen and (min-width: 768px){
        width: 300px;
    }
`;
