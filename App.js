import logo from './logo.svg';
import './App.css';
import Profile from './Component/profile/Profile';
import Counter from './Component/counter/Counter';
import CounterTwo from './Component/counter/CounterTwo';
import Welcome from './Component/welcome/Welcome';

import illustrationOne from "./images/illustration-one.png";
import illustrationTwo from "./images/illustration-two.png";
import illustrationThree from "./images/illustration-three.png";
import CourseCard from './Component/CourseCard/CourseCard';


import UnorderedList from './Component/unorderedList/UnorderedList';// Adjust the path to your component





const h1Style = {
  fontSize: "30px",
  color: "#0c0",
  textTransform: "uppercase",
  textDecoration: "underline"
};

const pStyle = {
  fontSize: "18px",
  color: "#000",
  textTransform: "lowercase"
};

const name="    Olive  McKenzie";
const greeting= (hasUser) =>{
  if(hasUser){
    return<h1>{name}'s Reading Lists</h1>
  }else{
    return<h1>Reading Lists</h1>
  }
}


function App() {
  return (
    <div className="App"> 
    <Counter/>
    <CounterTwo/>
      {greeting(false)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={h1Style}>Welcome {name}</h1>
        <p style={pStyle}>React is great{ name}</p>
        <h1>Hello Everyone</h1>

        <UnorderedList   className="UnorderedList"/>
        <Profile />
       
      </header>
      <Profile/>

      <Welcome firstName="Olive"/> 
      <div className= "flex">
      <CourseCard
      headerTitle="Softeware Development"
      headerBackground={illustrationOne}
      />

      <CourseCard
      headerTitle="Data Analytics & Project Management"
      headerBackground={illustrationTwo}
      />

      <CourseCard
      headerTitle="Digital Marketing"
      headerBackground={illustrationThree}
      />

      

  </div>

 
</div>


  );
}



	






export default App;

