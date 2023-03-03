import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Home(props) {
     const {name,age} = props
    const navigate = useNavigate()

    let randomid = Math.random().toString(36).substring(6);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        comments: "",
        isFriendly: false
    })
    console.log(formData, "formData");
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFromData => {
            return {
                ...prevFromData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div>
            <form id="form">
                <input type="text" name="firstName" placeholder="firstName" onChange={handleChange} value={formData.firstName} />
                <input type="text" name="lastName" placeholder="lastName" onChange={handleChange} value={formData.lastName} />
                <textarea name="comments" value={formData.comments} onChange={handleChange} />
                <input type="checkbox" name="isFriendly" placeholder="isfriendly" onChange={handleChange} value={formData.isFriendly} />
            </form> 
            <div>Home page</div>
            <button onClick={() => navigate(`/contact?randomId=${randomid}`)}>go to contact</button>
        </div>
    )
}
export default Home