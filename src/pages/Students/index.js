import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import axios from 'axios';
// import api from '../../services/api';
import history from '~/services/history';

import { Container } from './styles';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
    }

    async componentDidMount() {
        const response = await axios.get('students');
        this.setState({ students: response.data });
    }

    handleUpdateStudent = student => {
        const { dispatch } = this.props;

        dispatch({
            type: 'UPDATE_STUDENT',
            student,
        });
    };

    goTo = file => {
        history.push(file);
    };

    render() {
        const { students } = this.state;
        return (
            <Container>
                <>
                    <header>
                        <h1>Gerenciando alunos</h1>
                        <aside>
                            <button
                                type="button"
                                onClick={() => this.goTo('./form')}
                            >
                                <MdAdd size={16} color="#fff" /> CADASTRAR
                            </button>
                            <input
                                type="text"
                                /* onChange={event => loadStudents(event.target.value)} */
                                placeholder="Procurar aluno"
                                name="procurar"
                                id="procurar"
                            />
                        </aside>
                    </header>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>NOME</th>
                                    <th>EMAIL</th>
                                    <th>IDADE</th>
                                    <th>AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="blueMinimalButton"
                                                onClick={() =>
                                                    this.handleUpdateStudent(
                                                        student
                                                    )
                                                }
                                                // onClick={() =>
                                                //     goTo(
                                                //         `studentsform?id=${student.id}`
                                                //     )
                                                // }
                                            >
                                                editar
                                            </button>
                                            <button
                                                type="button"
                                                //   onClick={() =>
                                                //     deleteItem(
                                                //         `cadastro do aluno ${student.name}`,
                                                //         student.id,
                                                //         dispatch,
                                                //         'students',
                                                //         callback
                                                //     )
                                                //     }
                                                className="redMinimalButton"
                                            >
                                                apagar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            </Container>
        );
    }
}

export default connect()(Students);
