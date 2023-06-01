import './Input.css'

const Input = (props) => {
  return (
    <div className="input-area">
      <label for={props.name}>{`${props.name}:`}</label>
      <input onChange={props.onChange} type={props.type} name={props.name} placeholder={props.placeholder} required/>
    </div>
  )
}

export default Input;
