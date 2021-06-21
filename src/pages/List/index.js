import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi"

import {
  Container,
  TitleContainer,
  Icon,
  Title,
  Input,
  Repositories,
} from "./styles";

import api from "../../services/api";

function List() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    console.log(repositories)
  }, [repositories])

  async function handleAddRepository() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const repository = response.data;
      console.log(response.data);

      setRepositories([...repositories, repository]);
    } catch {
      alert("Erro na busca deste repositório.")
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Icon src="https://image.flaticon.com/icons/png/512/25/25231.png" />
        <Title>Github Explorer</Title>
      </TitleContainer>

      <form onSubmit={handleAddRepository}>
        <Input placeholder="Digite o nome do repositório.." 
          onChange={e => setNewRepo(e.target.value) } />
      </form>
      {
        repositories.map(repository => {
          return (
            <Repositories key={repository.full_name}>
              <Link to={`/repository/${repository.full_name}`}>
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                <div>
                  <strong>{repository.full_name}</strong>
                  <p>{repository.description}</p>
                </div>

                <FiChevronRight size={20} />
              </Link>
            </Repositories>
          )
        })
      }
    </Container>
  )
}

export default List;