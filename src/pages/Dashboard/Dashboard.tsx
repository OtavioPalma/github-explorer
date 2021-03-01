import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer Logo" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44899968?s=460&u=e41badbdae01d70dab39670fb8033924ba59d474&v=4"
            alt="github logo"
          />

          <div>
            <strong>OtavioPalma/github-explorer</strong>

            <p>Github Explorer GoStack Repo 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44899968?s=460&u=e41badbdae01d70dab39670fb8033924ba59d474&v=4"
            alt="github logo"
          />

          <div>
            <strong>OtavioPalma/github-explorer</strong>

            <p>Github Explorer GoStack Repo 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44899968?s=460&u=e41badbdae01d70dab39670fb8033924ba59d474&v=4"
            alt="github logo"
          />

          <div>
            <strong>OtavioPalma/github-explorer</strong>

            <p>Github Explorer GoStack Repo 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
