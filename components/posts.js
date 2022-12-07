import React,{useEffect} from 'react'

function posts({children,description,avatar,name}) {
 console.log(description)
 const badWords=/fuck|asshole|fucking|retrard/gi;
 let finalDesc=description.replace(badWords,'######')
 let newWord=description+'This is extra here'
  return (
    <div className='post-container'>
        <div className='post-info'>
            <img src={avatar} alt="user image" className='avatar-img-post' />
            <h3>{name}</h3>
            </div>
            <div className='post-desc'>
                <p>{finalDesc}</p>
            </div>
            {children}
        </div>
    
  )
}

export default posts