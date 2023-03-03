import {useNavigate, useLocation} from "react-router-dom"


function Contect(){
    const navigate = useNavigate()
    const location = useLocation();
    
    console.log({location})

    return (
        <div>
            <div>contact</div>
        <button onClick={() => navigate("/?commit=true")}>back to home</button>

    </div>
    )
}
export default Contect