import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cadastro">Cadastrar alunos</Link>
      <Link to="/professores">Professores</Link>
      <Link to="/cadastroProfessor">Cadastrar professor</Link>
    </nav>
  );
}

export default BarraNavegacao;
