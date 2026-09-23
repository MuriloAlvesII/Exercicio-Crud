import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacao from "./components/BarraNavegacao";
import MensagemErro from "./components/MensagemErro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListagem from "./pages/PaginaListagem";
import PaginaCadastro from "./pages/PaginaCadastro";
import { listarAlunos, criarAluno, excluirAluno } from "./services/alunoService";
import { listarProfessores, criarProfessor, excluirProfessor } from "./services/professorService";
import PaginaCadastroProfessor from "./pages/PaginaCadastroProfessor";
import PaginaListagemProfessor from "./pages/PaginaListagemProfessor";

const mensagemConexao = "Não foi possível conectar à API. Você esqueceu de iniciar o json-server? Rode: npx json-server --watch db.json --port 3000";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(function () {
    carregarAlunos();
    carregarProfessores();
  }, []);

  async function carregarAlunos() {
    try {
      const dados_a = await listarAlunos();
      setAlunos(dados_a);
      setErro("");
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function carregarProfessores() {
    try {
      const dados_b = await listarProfessores();
      setProfessores(dados_b);
      setErro("");
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvar(aluno) {
    try {
      await criarAluno(aluno);
      carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluir(id) {
    try {
      await excluirAluno(id);
      carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvarp(professor) {
    try {
      await criarProfessor(professor);
      carregarProfessores(professor);
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluirp(id) {
    try {
      await excluirProfessor(id);
      carregarProfessores(id);
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  return (
    <div className="App">
      <header className="cabecalho-ifrn">
        <img
          src="/IFRN.png"
          alt="Logo IFRN"
          className="logo-ifrn"
          onError={function (e) { e.target.style.display = "none"; }}
        />
        <h1>Sistema Escolar — Cadastro de Alunos e Professores</h1>
      </header>
      <BarraNavegacao />
      <MensagemErro mensagem={erro} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/alunos" element={<PaginaListagem alunos={alunos} aoExcluir={aoExcluir} />} />
        <Route path="/cadastro" element={<PaginaCadastro aoSalvar={aoSalvar} />} />
        <Route path="/professores" element={<PaginaListagemProfessor professores={professores} aoExcluir={aoExcluirp} />} />
        <Route path="/cadastroProfessor" element={<PaginaCadastroProfessor aoSalvar={aoSalvarp} />} />
      </Routes>
    </div>
  );
}

export default App;
