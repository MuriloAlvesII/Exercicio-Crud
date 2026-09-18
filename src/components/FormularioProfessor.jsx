import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormularioProfessor(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [data_admissao, setData_admissao] = useState("");

  function aoEnviar(e) {
    e.preventDefault();
    const professor = {
      nome: nome,
      email: email,
      cpf: cpf,
      disciplina: disciplina,
      data_admissao: data_admissao,
    };
    props.aoSalvar(professor);
    setNome("");
    setEmail("");
    setCpf("");
    setDisciplina("");
    setData_admissao("");
  }

  return (
    <form className="formulario-aluno" onSubmit={aoEnviar}>
      <CampoTexto rotulo="Nome" valor={nome} aoAlterar={setNome} />
      <CampoTexto rotulo="Email" tipo="email" valor={email} aoAlterar={setEmail} />
      <CampoTexto rotulo="CPF" valor={cpf} aoAlterar={setCpf} />
      <CampoTexto rotulo="Disciplina" tipo="date" valor={disciplina} aoAlterar={setDisciplina} />
      <CampoTexto rotulo="Data de admissao" valor={data_admissao} aoAlterar={setData_admissao} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProfessor;
