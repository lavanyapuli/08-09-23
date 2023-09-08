import React,{useState} from 'react';
function ContactForm(){
const [formData, setFormData]=useState({
    name:'',
    email:'',
    message:'',
});
const handleChange = (e) => {
    const {name,value} =e.target;
    setFormData({...formData,[name]:value});
   
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:',formData);
};
return(
    <div>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                type="text" 
                name="name" 
                value={formData.name} onChange={handleChange}
                />
            </label>
            <br></br>
            <label>
                EMAIL:
                <input 
                 type="text" 
                 name="email" 
                 value={formData.value} 
                 onChange={handleChange}
                 />
            </label>
            <br></br>
            <label>
             Message: 
             <textarea 
             name="message" 
             value={formData.message} 
             onChange={handleChange}
             />
            </label>
            <br></br>
            <button type="submit">submit</button>
            
        </form>
    </div>
);
}
export default ContactForm;