import React from 'react'
import Link from 'next/link';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import {useAuthState}  from 'react-firebase-hooks/auth'


function Nav() {
  //To mimic if the user is logged in 
  const isLoggedIn=true;
  const [user,loading]=useAuthState(auth)

  console.log(user)
  
  return (
    <nav className=''>
      <Link href='/'>
     <button className='main-logo'>We Collab</button>
      </Link>
      <Link href='/support'>
        <button>Support</button>
      </Link>
      <Link href='/about'>
        <button>About</button>
      </Link>
     <ul>
      {!user &&
      <Link href='/auth/login'>
        <button>Join Now</button> 
      </Link>
      }
      {/* <img src={user.photoURL} alt="user photo" /> */}
      {user && (
        <div >
         <Link href='/post'>
         <button className='post-btn'>Post</button> 
       </Link> 
       <Link href='/dashboard'>
        <img src={user.photoURL} alt="User display picture" className='avatar-img' />
       </Link>
       </div> 
      )    
       
      }
     </ul>
    </nav>
  )
}

export default Nav