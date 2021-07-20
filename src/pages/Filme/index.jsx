import "./filme.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function Filme() {
  const [filme, setFilme] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      setFilme(response.data);
    }
    loadFilme();
  }, [id]);

  function salvaFilme(){
    const minhaLista = localStorage.getItem("filmes")
    
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );
    
    if(hasFilme){
      alert("Você já possui esse filme salvo");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");
  }

  return (
    <div className="filme">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>
      <div className="buttons">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
