
import Nav from './Nav'
import footer from './footer'
export default function Layout({children}){
return(
<div>
<Nav />
<main>
    {children}
</main>
<footer/>
</div>

    )
}
