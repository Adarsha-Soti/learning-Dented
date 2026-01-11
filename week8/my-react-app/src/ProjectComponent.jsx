import './App.css'
const ProjectComponent = () => {
    const firstName="Adarsha Soti";
    const styleObject={
        color:"red",
        margin:"25px"
    }
  return (
    <div style={styleObject} className="project">
      <h1>{firstName}</h1>
      <p>this is component</p>
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default ProjectComponent
