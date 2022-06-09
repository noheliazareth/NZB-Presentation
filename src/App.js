//Needed imports
import img from './img.png';
import './App.css';
import HoverImage from "react-hover-image";
import reactlogo from './react logo.png';
import seleniumlogo from './selenium logo.png';
import {contactlist} from './contactlist';
import {projectlist} from './projectlist';
import ReactJsTyping from 'reactjs-typing-effect';
import { useForm, ValidationError } from '@formspree/react';

//Needed Variables
const list=['NZB Webpage Developer and QA Engineer']

//App to render
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <div className="container">
        <nav className="contact-nav">
          <tr>
            {contactlist.map((contactlist) => {
              const {image, href} = contactlist;
              return (
                <CallingList contactlist = {contactlist}>
                </CallingList>
              );
              }
            )} 
          </tr>
        </nav>

        <h1>
          <Typer></Typer>
        </h1>
        
        <img src={img} alt="" z-index="1"/>
        </div>

      </header>

      <body>

        <h2>About me:</h2>

        <p>
        <Resume></Resume>
        </p>
        
        <p>
        <div className="projects">
          <ph>
            Check out some of my Webpages: 
         </ph>
         <br/>
         {projectlist.map((projectlist) => {
          const {text, image, href} = projectlist;
          return (
          <ContainerTable projectlist = {projectlist}>
          </ContainerTable>
          );
          }
          )}
        </div>
        <resume>
        **IP addresses are protected by owners.
        </resume>
        </p>

        <p>
        <a
          className="App-link"
          href="https://github.com/noheliazareth/Selenium-QA">
          Check out some of my QA using Selenium on Github
        </a>
        </p>
        <h2>Contact me: </h2>

        <ContactForm/>

      </body>

      <Footer>
      </Footer>
    </div>
  );
}

//Function to call the contact list
function CallingList(props) {
  const { image, href } = props.contactlist;
  return (
    <td>
      <a href={href}>
        <img src={image} alt="" />
      </a>
    </td>
  )
}

//function to call on the project list
function ContainerTable(props){
  const {text, image1, image2, description} = props.projectlist;
  return(
    <pcol>
      <HoverImage src={image1} hoverSrc={image2} />
      <div style={{fontWeight:"1000"}}>
      {text}
      </div>
      <br/>
      {description}
    </pcol>
  )
}

//Resume component
function Resume(){
  return (
    <div>
      <resume>
        My name is Nohelia Zareth Borjas, and I'm an experienced Agile QA analyst that will help you maintain your website, no matter the complexity it requires.
        I have worked on highly industrialized projects of widely diverse fields: from water purifying facilities, hydroelectric power plants, world-wide e-market shops. Some of my projects were even located in remote places, yet their webpages remain having the highest performance.
        I'm currently working in SIT, Barcelona, maintaining some of their websites through automated testing. 
        <p>
        Some of my tools include Jira for ticketing in both SCRUM and KANBAN; Selenium for automation; Javascript, Typescript, HTML, CSS, and React JS for webpage development; Siemens TIA Portal, and QuickHMI for PLC and industrial applications; and I did a little Python for ROS systems.
        Don't hestitate to contact me for any ideas you have in mind to help you build and maintain YOUR OWN WEBSITE.
        </p>
      </resume>

    </div>
  )
}

//Footer component
function Footer(){
  return(
    <footer>
      Coded using
      <a href="https://reactjs.org">
      <img src={reactlogo} alt="" style={{width: "2rem", height: "auto"}}/>
      </a>,
      maintained by 
      <a href="https://www.selenium.dev">
      <img src={seleniumlogo} alt="" style={{width: "2rem", height: "auto"}}/>
      </a>
      <br/>
      NZB© {new Date().getFullYear()}.
    </footer>
  )
}

//Title component with a typing action action
function Typer(){
  return(
    <div>
      <ReactJsTyping StringList={list} speed={400}/>
    </div>
  )
} 

//Formspree component for contact form
function ContactForm() {
  const [state, handleSubmit] = useForm("mknknwlk");
  if (state.succeeded) {
      return <form><resume>Email Sent!</resume></form>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Name:"
      />
      <br/>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email:"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br/>
      <textarea
        id="message"
        name="message"
        placeholder="Message:"
        rows="1"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br/>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}



export default App;
