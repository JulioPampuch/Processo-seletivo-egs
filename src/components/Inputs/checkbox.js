import "./checkbox.css"

const Checkbox = (props) => {
  return (
    <label class="container">{props.name}
      <input type="checkbox" required/>
      <span class="checkmark"></span>
    </label>
  )
}

export default Checkbox
