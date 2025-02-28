import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [anyError, setAnyError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { displayName, password, email, photoURL } = data;
    console.log(data);
    if (!/[A-Z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one lowercase letter");
      return;
    } else if (password.length < 6) {
      setPasswordError("");
      setPasswordError("Password length must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
      setAnyError("");

      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: displayName,
            photoURL: photoURL,
          }).then(() => {
            setUser({
              displayName: displayName,
              photoURL: photoURL,
              email: email,
            });
          });

          //   navigate(location.state ? location?.state : "/");

          Swal.fire({
            position: "top",
            icon: "success",
            title: "Registration successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
          setAnyError(err.message);
        });
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 w-full'>
      <div className='w-[86%] mx-auto'>
        <div className='w-1/2  mx-auto border shadow-lg py-8 rounded-md'>
          <div>
            <div className='bg-white dark:bg-gray-900 rounded-lg lg:rounded-l-none'>
              <div className='p-5'>
                <div className='pb-8'>
                  <p className='text-3xl font-bold mb-2 text-gray-950 dark:text-white'>
                    I'm New Here in Looming.
                  </p>

                  <p className='font-semibold text-black/60 dark:text-white'>
                    Enter your details below
                  </p>
                </div>

                <div className='flex items-center flex-wrap md:flex-nowrap gap-4 mb-4'>
                  <button
                    onClick={() => handleGoogleSignIn()}
                    className='w-full max-w-md font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                  >
                    <div className='bg-white p-2 rounded-full'>
                      <svg className='w-4' viewBox='0 0 533.5 544.3'>
                        <path
                          d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                          fill='#4285f4'
                        />
                        <path
                          d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                          fill='#34a853'
                        />
                        <path
                          d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                          fill='#fbbc04'
                        />
                        <path
                          d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                          fill='#ea4335'
                        />
                      </svg>
                    </div>
                    <span className='ml-4'>Sign In with Google</span>
                  </button>

                  <button
                    onClick={() => handleGithubSignIn()}
                    className='w-full max-w-md font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                  >
                    <div className='bg-white p-1 rounded-full'>
                      <svg className='w-6' viewBox='0 0 32 32'>
                        <path
                          fillRule='evenodd'
                          d='M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z'
                        />
                      </svg>
                    </div>
                    <span className='ml-4'>Sign In with GitHub</span>
                  </button>
                </div>

                <div className='flex gap-9 relative my-5'>
                  <p className='border-b border-gray-300 w-full'></p>
                  <span className='absolute left-1/2 -ml-2 -mt-3'>Or</span>
                  <p className='border-b border-gray-300 w-full'></p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='space-y-3 w-full '
                >
                  <p className='flex justify-end text-black dark:text-white'>
                    Already a User to Looming? Please
                    <Link
                      to='/login'
                      className='text-lg font-semibold text-blue-600 ml-1 hover:underline'
                    >
                      Login
                    </Link>
                  </p>

                  <div>
                    <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                      <legend className=' font-medium text-black/60 dark:text-white'>
                        Name
                      </legend>
                      <input
                        type='text'
                        {...register("displayName", { required: true })}
                        placeholder='Your Name'
                        className='px-4 py-1 w-full focus:outline-0 bg-white dark:bg-gray-900 text-gray-950 dark:text-white'
                      />
                    </fieldset>
                    {errors.displayName && (
                      <span className='text-red-600 dark:text-white'>
                        Name is required
                      </span>
                    )}
                  </div>
                  <div>
                    <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                      <legend className='font-medium text-black/60 dark:text-white'>
                        Email
                      </legend>
                      <input
                        type='email'
                        {...register("email", { required: true })}
                        placeholder='Enter password'
                        className='px-4 py-1 w-full focus:outline-0 bg-white dark:bg-gray-900 text-gray-950 dark:text-white'
                      />
                    </fieldset>
                    {errors.email && (
                      <span className='text-red-600 dark:text-white'>
                        Email is required
                      </span>
                    )}
                  </div>
                  <div>
                    <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                      <legend className=' font-medium text-black/60 dark:text-white'>
                        Password
                      </legend>
                      <input
                        type='password'
                        {...register("password", { required: true })}
                        placeholder='password'
                        className='px-4 py-1 w-full focus:outline-0 bg-white dark:bg-gray-900 text-gray-950 dark:text-white'
                      />
                    </fieldset>
                    {passwordError}
                    {errors.password && (
                      <span className='text-red-600 dark:text-white'>
                        Password is required
                      </span>
                    )}
                  </div>
                  <div>
                    <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                      <legend className=' font-medium text-black/60 dark:text-white'>
                        PhotoURL
                      </legend>
                      <input
                        type='text'
                        {...register("photoURL", { required: true })}
                        placeholder='Enter PhotoURL'
                        className='px-4 py-1 w-full focus:outline-0 bg-white dark:bg-gray-900 text-gray-950 dark:text-white'
                      />
                    </fieldset>
                    {errors.photoURL && (
                      <span className='text-red-600 dark:text-white'>
                        PhotoURL is required
                      </span>
                    )}
                  </div>
                  <p className='text-red-600 dark:text-white'>{anyError}</p>

                  <button className='w-full mt-3 px-3 py-2 bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'>
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
