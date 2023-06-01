import "./header.css"

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="/logo.png" />
        </a>
      </div>
      <div className="name">
        <p>
          {props.nome} {props.sobrenome}
        </p>
      </div>
    </header>
  )
}

export default Header