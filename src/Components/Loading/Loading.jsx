import "./loading.css"
import { CgSearchLoading } from "react-icons/cg";

function Loading() {
  return (
    <div className="loading-container" >
        <h1>Laoding...</h1>
        <CgSearchLoading />
    </div>
  )
}

export default Loading