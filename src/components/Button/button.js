import "./button.css"

const Button = (props) => {
  return (
    <div className="button-area">
      <button type="submit" >{props.name}</button>
      <a href="#">I'm already a member</a>
    </div>
  )
}

export default Button