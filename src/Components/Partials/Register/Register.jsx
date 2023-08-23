import './Register.css';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUnlockAlt, FaUser, FaUserAlt } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form"
import auth from '../../../firebase.init';
import { useRef } from 'react';

function Register() {
    const { register, formState: { errors }, watch, handleSubmit, reset } = useForm();
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const password = useRef({});
    password.current = watch("password", "");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let unmatchPassword;
    const onSubmit = async (data) => {
      if (data.password !== data.password2) {
        return unmatchPassword = <p className="text-red-500 text-xs italic">Password not massing</p>;
      }
      await createUserWithEmailAndPassword(data?.mail, data?.password, data?.displayName);
      await updateProfile({ displayName: data?.surname })    
      reset()
    }

    let signInError;
    if (loading || updating ) {
      return <span className="loading loading-ring loading-lg"></span>

    }
    if (error || updateError) {
      signInError = <p className="text-red-500 text-xs italic">{error?.message || updateError?.massage}</p>
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card bg-indigo-100 w-4/12 bg-base-100 px-6 shadow-xl">
                <div className="text-center">
                    <h2 className="text-3xl mt-8">log into -- <span className="text-primary">cool social</span></h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control flex flex-col gap-4">

                        <label className="input-group">
                            <span className="bg-indigo-500 py-1"><FaUser size={25} style={{ fill: 'white' }} /></span>
                            <input type="text" placeholder="Given name" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
                            bg-transparen w-full"
                            {...register("givenName", { required: true })}
                            aria-invalid={errors.givenName ? "true" : "false"}
                            />
                        </label>

                        <label className="input-group">
                            <span className="bg-indigo-500 py-1"><FaUserAlt size={25} style={{ fill: 'white' }} /></span>
                            <input type="text" placeholder="Surname" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
                            bg-transparen w-full"
                            {...register("surname", { required: true })}
                            aria-invalid={errors.surname ? "true" : "false"}
                            />
                        </label>

                        <label className="input-group">
                            <span className="bg-indigo-500 py-1"><FaEnvelope size={25} style={{ fill: 'white' }} /></span>
                            <input type="email" placeholder="Email" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
                            bg-transparen w-full"
                            {...register("mail", { required: true })}
                            aria-invalid={errors.mail ? "true" : "false"}
                            />
                            {errors.mail && <p role="alert">{errors.mail.message}</p>}
                        </label>
                        <label className="input-group">
                            <span className="bg-indigo-500 py-1"><FaUnlockAlt size={25} style={{ fill: 'white' }} /></span>
                            <input type="password" placeholder="Password" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
                            bg-transparen w-full"
                            {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"}
                            
                            />
                            {errors.password && <p role="alert">{errors.password.message}</p>}
                        </label>

                        <label className="input-group">
                            <span className="bg-indigo-500 py-1"><FaUnlockAlt size={25} style={{ fill: 'white' }} /></span>
                            <input type="password" placeholder="Re-password" name="password2" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
                            bg-transparen w-full"
                            {...register("password2", { required: true,
                                validate: (val) => {
                                    if (watch('password') != val) {
                                      return "Your passwords do no match";
                                    }
                                  }
                            })} aria-invalid={errors.password2 ? "true" : "false"}
                            />
                            {errors?.password2?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose Re-password.</p>}
                        </label>
                        {signInError || unmatchPassword}
                        <div className="flex flex-col justify-center gap-2 mt-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text text-2xl">show password</span>
                            </label>
                            <label className="cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text text-2xl">Agree to Terms and Conditions</span>
                            </label>

                        </div>
                    </div>
                    <div className="card-actions">
                        <input type="submit" className="btn btn-primary text-white w-full" />
                    </div>
                    <p className="text-2xl text-center md:mt-3">Don't have an account? <Link to="/login" className="hover:text-indigo-500">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register