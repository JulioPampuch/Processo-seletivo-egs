import "./list.css"

const List = (props) => {

  const users = [
    {
      nome: "Julio",
      sobrenome: "Pampuch",
      data: "01/09/2003",
      email: "juliopampuch@gmail.com",
      cpf: "000.000.000-00"
    },
    {
      nome: "Exemplo",
      sobrenome: "Ex",
      data: "04/05/1998",
      email: "exemplo@gmail.com",
      cpf: "222.222.222-22"
    }
  ]

  users.push({
    nome: props.nome,
    sobrenome: props.sobrenome,
    data: props.idade,
    email: props.email,
    cpf: props.cpf
  })

  return (
    <section className="bg-list">
      <table className="list-container">
        <thead>
          <tr className="list-header">
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data</th>
            <th>E-mail</th>
            <th>Cpf</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className="user">
                <td>{user.nome}</td>
                <td>{user.sobrenome}</td>
                <td>{user.data}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default List