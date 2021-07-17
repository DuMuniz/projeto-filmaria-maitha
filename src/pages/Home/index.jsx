import "./home.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      {filmes.map((filme) => {
        return (
          <div className="home" key={filme.id}>
            <h2>{filme.nome}</h2>
            <img src={filme.foto} alt={filme.nome} />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </div>
        );
      })}
    </div>
  );
}
