import Head from 'next/head'
import Posts from '../components/posts'
import {useState,useEffect} from 'react'
import {db} from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import image from '../public/splash.jpg'




export default function Home() {
  return (
    <div className='container'>
   <div className="intro">
<h2>Welcome to</h2>
<h2>The WeCollab</h2>
<p>Welcome to WeCollab where people share anything and everything to feel good.We collab provides this service free of cost without needing 
  subscription
</p>
<button className="btn-explore">
<Link href='/allposts' >
   Lets Get Started
   </Link>
   </button>
</div>
<div className="splash-img">
  <img src='/splash3.png' alt="There is an image here" />
</div>
  </div>
  )
}