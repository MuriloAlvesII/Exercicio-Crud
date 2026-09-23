import CardProfessor from "./CardProfessor";

function ListaProfessores(props) {
  const cards = [];

  for (let i = 0; i < props.professores.length; i++) {
    const professor = props.professores[i];
    cards.push(
      <CardProfessor
        key={professor.id}
        professor={professor}
        aoExcluir={props.aoExcluir}
      />
    );
  }

  return (
    <div className="lista-alunos">
      {cards}
    </div>
  );
}

export default ListaProfessores;
