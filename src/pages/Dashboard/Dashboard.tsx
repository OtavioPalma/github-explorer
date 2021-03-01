import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Repository } from '../Repository/Repository';
import { Error, Form, Repositories, Title } from './styles';

interface Repository {
  id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepo = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!repository) {
      setError('Digite o autor/nome do repositório!');
      return;
    }

    api
      .get<Repository>(`repos/${repository}`)
      .then(res => {
        setRepositories([...repositories, res.data]);
        setRepository('');
        setError('');
      })
      .catch(() => {
        setError('Erro na busca do repositório!');
      });
  };

  return (
    <>
      <img src={logo} alt="Github Explorer Logo" />
      <Title>Explore Repositórios no Github</Title>

      <Form hasError={Boolean(error)} onSubmit={handleAddRepo}>
        <input
          value={repository}
          onChange={ev => setRepository(ev.target.value)}
          placeholder="Digite o nome do repositório"
        />

        <button type="submit">Pesquisar</button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <a href="teste" key={repo.id}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />

            <div>
              <strong>{repo.full_name}</strong>

              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};
