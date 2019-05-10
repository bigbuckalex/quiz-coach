import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCategory from '../components/AppCategory';
import AppPanel from '../components/AppPanel';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import axios from 'axios';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            values: ['$200', '$400', '$600', '$800', '$1000'],
            clues: [],
            modalOpen: false
        }
    }

    toggleModal() {
        this.setState({modalOpen: !this.state.modalOpen});
    }

    showAnswer() {
        alert('ox');
    }

    populateCategories() {
        console.log('populating categories');
        for (let i = 0; i < 6; i++) {
            axios.get('/api/clues/random')
                .then(res => {
                    console.log(res.data);
                    this.setState({ categories: this.state.categories.concat([res.data.category]) });
                }
            );
        }
    }

    getQuestion(cat, val) {
        console.log(`getting question with category ${this.state.categories[0]} and value ${val}`);
        axios.get('/api/clues/', {
            params: {
                category: this.state.categories[cat],
                value: val
            }
        })
        .then(res => {
            console.log(res);
            this.toggleModal();
        })
    }

    componentDidMount() {
        console.log('mounted');
        this.populateCategories();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        <h2>CHINESE CALENDAR ANIMALS</h2>
                    </ModalHeader>
                    <ModalBody>
                        <h3>'One of the largest animals, it has the shortest name -- 2 letters'</h3>
                        <Button onClick={this.showAnswer} color='primary'>Show Answer</Button>
                        <Button onClick={this.toggleModal} color='success'>Correct</Button>
                        <Button onClick={this.toggleModal} color='danger'>Incorrect</Button>
                    </ModalBody>
                </Modal>
                <AppNavbar id='nav' />
                    <Row>
                        <Col>
                            <AppCategory category={this.state.categories[0]} />
                        </Col>
                        <Col>
                            <AppCategory category={this.state.categories[1]} />
                        </Col>
                        <Col>
                            <AppCategory category={this.state.categories[2]} />
                        </Col>
                        <Col>
                            <AppCategory category={this.state.categories[3]} />
                        </Col>
                        <Col>
                            <AppCategory category={this.state.categories[4]} />
                        </Col>
                        <Col>
                            <AppCategory category={this.state.categories[5]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AppPanel className='0' onClick={() => this.getQuestion(0, '$200')} value={this.state.values[0]} />
                        </Col>
                        <Col>
                            <AppPanel className='1' onClick={() => this.getQuestion(1, '$200')} value={this.state.values[0]} />
                        </Col>
                        <Col>
                            <AppPanel className='2' onClick={() => this.getQuestion(2, '$200')} value={this.state.values[0]} />
                        </Col>
                        <Col>
                            <AppPanel className='3' onClick={() => this.getQuestion(3, '$200')} value={this.state.values[0]} />
                        </Col>
                        <Col>
                            <AppPanel className='4' onClick={() => this.getQuestion(4, '$200')} value={this.state.values[0]} />
                        </Col>
                        <Col>
                            <AppPanel className='5' onClick={() => this.getQuestion(5, '$200')} value={this.state.values[0]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AppPanel className='0' onClick={() => this.getQuestion(0, '$400')} value={this.state.values[1]} />
                        </Col>
                        <Col>
                            <AppPanel className='1' onClick={() => this.getQuestion(1, '$400')} value={this.state.values[1]} />
                        </Col>
                        <Col>
                            <AppPanel className='2' onClick={() => this.getQuestion(2, '$400')} value={this.state.values[1]} />
                        </Col>
                        <Col>
                            <AppPanel className='3' onClick={() => this.getQuestion(3, '$400')} value={this.state.values[1]} />
                        </Col>
                        <Col>
                            <AppPanel className='4' onClick={() => this.getQuestion(4, '$400')} value={this.state.values[1]} />
                        </Col>
                        <Col>
                            <AppPanel className='5' onClick={() => this.getQuestion(5, '$400')} value={this.state.values[1]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AppPanel className='0' onClick={() => this.getQuestion(0, '$600')} value={this.state.values[2]} />
                        </Col>
                        <Col>
                            <AppPanel className='1' onClick={() => this.getQuestion(1, '$600')} value={this.state.values[2]} />
                        </Col>
                        <Col>
                            <AppPanel className='2' onClick={() => this.getQuestion(2, '$600')} value={this.state.values[2]} />
                        </Col>
                        <Col>
                            <AppPanel className='3' onClick={() => this.getQuestion(3, '$600')} value={this.state.values[2]} />
                        </Col>
                        <Col>
                            <AppPanel className='4' onClick={() => this.getQuestion(4, '$600')} value={this.state.values[2]} />
                        </Col>
                        <Col>
                            <AppPanel className='5' onClick={() => this.getQuestion(5, '$600')} value={this.state.values[2]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AppPanel className='0' onClick={() => this.getQuestion(0, '$800')} value={this.state.values[3]} />
                        </Col>
                        <Col>
                            <AppPanel className='1' onClick={() => this.getQuestion(1, '$800')} value={this.state.values[3]} />
                        </Col>
                        <Col>
                            <AppPanel className='2' onClick={() => this.getQuestion(2, '$800')} value={this.state.values[3]} />
                        </Col>
                        <Col>
                            <AppPanel className='3' onClick={() => this.getQuestion(3, '$800')} value={this.state.values[3]} />
                        </Col>
                        <Col>
                            <AppPanel className='4' onClick={() => this.getQuestion(4, '$800')} value={this.state.values[3]} />
                        </Col>
                        <Col>
                            <AppPanel className='5' onClick={() => this.getQuestion(5, '$800')} value={this.state.values[3]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AppPanel className='0' onClick={() => this.getQuestion(0, '$1000')} value={this.state.values[4]} />
                        </Col>
                        <Col>
                            <AppPanel className='1' onClick={() => this.getQuestion(1, '$1000')} value={this.state.values[4]} />
                        </Col>
                        <Col>
                            <AppPanel className='2' onClick={() => this.getQuestion(2, '$1000')} value={this.state.values[4]} />
                        </Col>
                        <Col>
                            <AppPanel className='3' onClick={() => this.getQuestion(3, '$1000')} value={this.state.values[4]} />
                        </Col>
                        <Col>
                            <AppPanel className='4' onClick={() => this.getQuestion(4, '$1000')} value={this.state.values[4]} />
                        </Col>
                        <Col>
                            <AppPanel className='5' onClick={() => this.getQuestion(5, '$1000')} value={this.state.values[4]} />
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default Quiz;