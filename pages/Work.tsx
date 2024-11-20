import Logo from '../assets/Nolan_Logo.svg'
import Project3Video from '../assets/CS60411_Video_Assignment.mp4'

function Work () {
    return (
        <>
    <div className="Logo">
        <a href="app.tsx"><img src={Logo}/></a>
    </div>
    <header>Work</header>
    <div className="Project3Video">
        <video width="700" height="394" controls>
            <source src={Project3Video} type="video/mp4"></source>
        </video>
    </div>
        </>
    );
}

export default Work;