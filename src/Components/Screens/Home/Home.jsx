import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

function Home() {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>{user?.displayName}
      {user ? <button
        onClick={logout}
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        sign out
      </button>: <button to="/login">login</button>}
      <p><Link to="/profile"> profile</Link> ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}

export default Home