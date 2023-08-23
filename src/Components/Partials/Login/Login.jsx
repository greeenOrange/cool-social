import { FaEnvelope } from 'react-icons/fa';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    eUser,
    eLoading,
    eError,
  ] = useSignInWithEmailAndPassword(auth);

  const [updatePassword, updating, updateError] = useUpdatePassword(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data?.mail, data?.password);
    reset()
    navigate(from, {replace: true});
  };

  let signInError;
  if (eLoading || updating) {
    return <span className="flex items-center justify-center h-100vh loading loading-ring loading-lg bg-indigo-100"></span>
  }
  if (eError || updateError) {
    signInError = <p className="text-red-500 text-xs italic">{eError?.message || updateError?.message}</p>
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="card bg-indigo-100 w-4/12 bg-base-100 px-6 shadow-xl">
      <div className="text-center">
        <h2 className="text-3xl mt-8">log into -- <span className="text-primary">cool social</span></h2>
      </div>
  <form onSubmit={handleSubmit(onSubmit)} className="card-body">

  <div className="form-control flex cols gap-4">
  <label className="input-group">
    <span className="bg-indigo-500 py-1"><FaEnvelope size={25} style={{ fill: 'white' }} /></span>
    <input type="email" placeholder="Email" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
    bg-transparen w-full" 
    {...register("mail", { required: "Email Address is required" })} 
    aria-invalid={errors.mail ? "true" : "false"} 
    />
    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
  </label>
  <label className="input-group">
    <span className="bg-indigo-500 py-1"><FaEnvelope size={25} style={{ fill: 'white' }} /></span>
    <input type="password" placeholder="password" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
    bg-transparen w-full" 
    {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"}
    />
    {errors.password && <p role="alert">{errors.password?.message}</p>}
  </label>
  <div className="flex justify-between items-center">
  <label className="cursor-pointer label">
    <input type="checkbox" className="checkbox checkbox-primary" />
    <span className="label-text text-2xl">show password</span>
  </label>
  <Link to="/forgetpassword" className="text-2xl hover:text-indigo-500" >forget password ?</Link>
  </div>
</div>
{signInError}
    <div className="card-actions">
      <input type="submit" placeholder="login" className="btn btn-primary text-white w-full" />
    </div>
    <p className="text-2xl text-center md:mt-3">Don't have an account? <Link to="/register" className="hover:text-indigo-500">Sign Up</Link></p>
  </form>
</div>
</div>

  )
}

export default Login