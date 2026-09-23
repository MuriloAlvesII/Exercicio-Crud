import { Link } from "react-router-dom";

function PaginaInicial() {
  return (
    <div className="pagina-inicial">
      <h2>Bem-vindo ao Sistema Escolar</h2>
      <p>Gerencie o cadastro de alunos e professores do Técnico Integrado em Informática.</p>
      <div className="acoes-inicial">
        <Link to="/alunos" className="botao-link">Ver alunos</Link>
        <Link to="/cadastro" className="botao-link">Cadastrar aluno</Link>
        <Link to="/professores" className="botao-link">Ver professores</Link>
        <Link to="/cadastroProfessor" className="botao-link">Cadastrar professor</Link>
      </div>
    </div>
  );
}

export default PaginaInicial;
