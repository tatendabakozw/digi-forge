// import styles from './index.module.css';
import Image from 'next/image';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Index() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  const login_user = async () => {
    setLoading(true);
    try {
   
      setLoading(false);
      router.push('/overview');
      setPassword('');
      setEmail('');
      // console.log(data);
    } catch (error) {
     
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex-col grid py-8 items-start content-center bg-white">
      <p className="absolute md:text-start text-center top-10 text-primary-original text-4xl font-semibold left-10">
        Gigiforge
      </p>
      {/* <div className="z-0 absolute top-20 left-24 md:w-96 w-60 md:h-96 h-60 bg-primary-superlight dark:bg-primary-dark rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" /> */}
      {/* <div className="z-0 absolute top-32 right-52 md:w-96 w-60 md:h-96 h-60 bg-secondary-superlight dark:bg-secondary-dark rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" /> */}
      <div className="z-0 absolute bottom-8 right-96 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-3000" />
      <div className=" max-w-xs rounded-lg p-4 w-full mx-auto flex flex-col space-y-4 backdrop-blur-xl shadow">
        <div className="flex flex-col space-y-8">
          <p className="text-center text-slate-700 text-lg">Almost there,</p>
          <p className="text-xs text-slate-700 text-center font-medium">
            Sign in to access your account or get started
          </p>
        </div>
        <button className="flex flex-row items-center border content-center justify-center border-slate-300/50 w-full p-2 rounded-lg space-x-4">
          <Image
            src={'/icons/google-logo.png'}
            height={24}
            width={24}
            alt="google login icon"
          />
          <p className="text-sm text-slate-700">Sign in with Google</p>
        </button>
        <div className="flex flex-row items-center space-x-2">
          <div className="border-t border-slate-300/50 flex-1" />
          <p>or</p>
          <div className="border-t border-slate-300/50 flex-1" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-300/50 backdrop-blur-xl rounded-lg p-2 outline-none text-sm"
          placeholder="Email"
        />
        <div className="flex flex-col space-y-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-slate-300/50 backdrop-blur-xl rounded-lg p-2 outline-none text-sm"
            placeholder="Password"
          />
          <p className="text-end text-xs font-medium text-primary-original">
            Forgot Password?
          </p>
        </div>
        <PrimaryButton onClick={login_user} loading={loading} text="Log In" />
        <p className="text-slate-700 text-xs font-medium text-center">
          So you have an account?{' '}
          <span className="text-primary-original">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Index;
