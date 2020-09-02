import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import {FiChevronRight} from 'react-icons/fi';


const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/2475990?s=60&v=4"
                        alt="Daniel Ataydes" />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀 </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/2475990?s=60&v=4"
                        alt="Daniel Ataydes" />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀 </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/2475990?s=60&v=4"
                        alt="Daniel Ataydes" />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀 </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;