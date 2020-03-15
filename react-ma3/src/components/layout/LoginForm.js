import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const formSchema = yup.object().shape({
    userName: yup.string().max(12).required("Username must be longer than 3 letters"),
    password: yup.string().min(6).required("Submit password")
});



function Login(){
    const {register, HandleSubmit, errors } = useForm({
    validationSchema: formSchema
    });
    
function onSubmit(data) {
        console.log("data", data);
    }                                                            
return(
    <form onSubmit={HandleSubmit(onSubmit)}>
        <div>
            <input type="text" name= "userName" placeholder="Enter username" ref={register} />
            {errors.userName && <p>{errors.userName.message}</p>}
    </div>
    <div>
            <input type="text" name="password" placeholder="Enter password" ref={register}/>
            {errors.password && <p>{errors.password.message}</p>}
    </div>    
 <button type="submit">Submit</button>
    </form>

    );
}
}
}
export default Login;