import { useParams } from "react-router-dom"
import Header from "../Header/header";
import List from "../List/list";

const Table = () => {

  const { nome, sobrenome, idade, email, cpf } = useParams();

  const formatCpf = (cpf) => {

    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const formatDate = (date) => {
    date = date.replace(/[^\d]/g, "");
    return date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
  }

  return (
    <>
      <Header nome={nome} sobrenome={sobrenome}/>
      <List nome={nome} sobrenome={sobrenome} idade={formatDate(idade)} email={email} cpf={formatCpf(cpf)} />
    </>
  )
}

export default Table