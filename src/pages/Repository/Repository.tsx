import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Header, Issues, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface RepositoryData {
  id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
}

interface IssueData {
  id: string;
  html_url: string;
  title: string;
  user: { login: string };
}

export const Repository: React.FC = () => {
  const {
    params: { repository },
  } = useRouteMatch<RepositoryParams>();

  const [repo, setRepo] = useState<RepositoryData>();
  const [issues, setIssues] = useState<IssueData[]>([]);

  useEffect(() => {
    api
      .get<RepositoryData>(`repos/${repository}`)
      .then(res => setRepo(res.data));

    api
      .get<IssueData[]>(`repos/${repository}/issues`)
      .then(res => setIssues([...res.data]));
  }, [repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer Logo" />

        <Link to="/">
          <FiChevronLeft size={20} />

          <span>Voltar</span>
        </Link>
      </Header>

      {repo && (
        <RepositoryInfo>
          <header>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />

            <div>
              <strong>{repo.full_name}</strong>

              <p>{repo.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>

              <span>Stars</span>
            </li>

            <li>
              <strong>{repo.forks_count}</strong>

              <span>Forks</span>
            </li>

            <li>
              <strong>{repo.open_issues_count}</strong>

              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {issues && (
        <Issues>
          {issues.map(issue => (
            <a href={issue.html_url} key={issue.id}>
              <div>
                <strong>{issue.title}</strong>

                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </Issues>
      )}
    </>
  );
};
