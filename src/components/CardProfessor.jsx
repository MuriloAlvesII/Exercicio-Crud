function CardProfessor(props) {
    return(
        <div className="card-aluno">
            <h3>{props.professor.nome}</h3>
            <p>{props.professor.email}</p>
            <p>CPF: {props.professor.cpf}</p>
            <p>Materia: {props.professor.disciplina}</p>
            <p>Data de admissão: {props.professor.data_admissao}</p>
            <button onClick={function () {props.aoExcluir(props.professor.id);}}>Excluir</button>
        </div>
    );
}

export default CardProfessor;