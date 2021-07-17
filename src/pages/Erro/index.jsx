import "./erro.css";
import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/">Veja todos os filmes</Link>
    </div>
  );
}
