import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sports from "./Sports";
// import ToDo from "./ToDo";

function App() {
  const sports = ["Football", "Cricket", "Basketball", "Tennis", "Hockey"];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core ConCept</h1>

      {sports.map((sport) => (
        <Sports key={sport} sports={sport} />
      ))}

      {/* <FreeFire />
      <Car name="Toyota" />
      <Car name="Honda" />
      <Car name="BMW" />
      <Car name="Mercedes" /> */}

      {/* <ToDo name="JavaScript " isDone={true} />
      <ToDo name="React" isDone={true} />
      <ToDo name="CSS" isDone={false} />
      <ToDo name="HTML" isDone={false} /> */}
    </>
  );
}

// function FreeFire() {
//   return (
//     <div className="freeFire">
//       <h1>My Favorite Game is Free Fire</h1>
//       <h2>Team : BORZ</h2>
//       <p>Name : TB.SEBER</p>
//       <p>id : 2123744843</p>
//       <p>Roll : Russer</p>
//     </div>
//   );
// }

// function Car(props) {
//   return (
//     <div className="myCar">
//       <h1>My Car : {props.name}</h1>
//     </div>
//   );
// }
// function Pet() {
//   return <h1>My Pet is a Cat</h1>;
// }

export default App;
