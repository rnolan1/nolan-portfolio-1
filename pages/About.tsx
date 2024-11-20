import Headshot from '../assets/RNolan_Headshot_InteractiveWorkshop_thumbnail.jpg'
import Logo from '../assets/Nolan_Logo.svg'
import '../About.css'
import Resume from '../assets/RNolanResume_2024_Web.pdf'

function About() {
    return (
    <>
      <div className="Logo">
        <a href="app.tsx"><img src={Logo}/></a>
      </div>
      <div className="Intro">
        <img src={Headshot}/>
        <div className="IntroCopy">
        <h2>hey there!</h2>
        <p>I'm a graphic designer born and raised in St. Louis, Missouri. I love branding, 
          motion design, and geeking out over Pantones and typography. In my free time, 
          you’ll find me hiking, curled up with a good book, or out and about with my camera. 
        </p>
        <a href= {Resume} target="blank"><p>Check out my resume here!</p></a>
        </div>
      </div>
      <div className="Main">
        <h2>about me</h2>
        <p>I graduated from Maryville University in May 2019 with a BFA in Graphic Design. 
          However, that's not what I originally pictured for myself. I started college as a 
          nursing major but found myself captivated more and more by design. One year later, 
          I enrolled in my first graphic design class—I was hooked. Creatively problem-solving 
          in a way that is both functional and beautiful is incredibly satisfying! I've always 
          loved learning and luckily I've chosen a field where I can do just that. Whether it's 
          learning about constantly evolving creative technology or client work, I'm always in 
          the classroom.<br></br>
        The words that best describe my design style are: bold, playful, thoughtful, and versatile. 
        It's such a pleasure to transform visions into reality and I'm committed to getting it right. 
        I most recently worked as Art Director at Osborn Barr Paramore and am currently seeking a 
        new adventure! I am available for full-time hire and freelancing. If you're interested in 
        working together, please don't hesitate to contact me!</p>
      </div>
    </>
    );
  }
 
  export default About;
 