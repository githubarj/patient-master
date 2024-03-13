import { useRef } from "react"
import "./form.css"

function Form() {

    //get reference of the form
    const formRef = useRef(null)

  return (
    <div className='form-container' >
        <form ref={formRef}>
            
        </form>
    </div>
  )
}

export default Form