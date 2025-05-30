import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./SignUp.scss"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const schema = yup.object({
  userName: yup.string().min(4).max(8).required(),
  email: yup.string().min(4).max(16).email().required(),
  password: yup.string().min(4).max(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),

});

function SignUp() {
   const { register, handleSubmit, formState: { errors } } = useForm({
   resolver: yupResolver(schema),
 });
 
 const onSubmit = (data) => {
   console.log(data);
 }
   return (
    <>
      <Header />
     <form className="form" onSubmit={handleSubmit(onSubmit)}>
       <input className="form__input" {...register("userName")} placeholder="Username" />
       <p className="form__error">{errors.userName?.message}</p>
       <input className="form__input" {...register("email")} placeholder="Email" />
       <p className="form__error">{errors.email?.message}</p>
       <input className="form__input" {...register("password")} placeholder="Password" />
       <p className="form__error">{errors.password?.message}</p>
       <input className="form__input" {...register("confirmPassword")} placeholder="confirmPassword" />
       <p className="form__error">{errors.confirmPassword?.message}</p>
       <button className="form__btn" onClick={handleSubmit(onSubmit)}>Sign In</button>
     </form>
     <Footer />
    </>
   )
}

export default SignUp