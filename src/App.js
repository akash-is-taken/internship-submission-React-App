import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {  
  function handleClick(box_color) {
    if (box_color === "red") {
      alert('I am an alert box for red box');
    } else if (box_color === "blue") {
      alert("I am an alert box for blue box");
    }
  }

  return (
    <div className="App container-fluid d-flex justify-content-center align-items-center">
      <div className='row'>
        <div className="col-sm d-flex justify-content-center align-items-center">
          <div className="box" id="box-red" onClick={() => handleClick("red")}></div>
        </div>
        <div className="col-sm d-flex justify-content-center align-items-center">
          <div className="box" id="box-blue" onClick={() => handleClick("blue")}></div>
        </div>
      </div>
    </div>
  );
}


export default App;
