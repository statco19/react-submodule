import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from "react";
import {Component} from "react";

class App extends Component {
    state = {
        puzzles: []
    };

    async componentDidMount() {
        const response = await fetch('/puzzles');
        const body = await response.json();
        this.setState({puzzles: body});
    }

    render() {
        const {puzzles} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-intro">
                        <h2>Puzzles</h2>
                        {puzzles.map(puzzle =>
                            <div key={puzzle.id}>
                                {puzzle.title}
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}
export default App;


// import logo from './logo.svg';
// import './App.css';
// import {useEffect, useState} from "react";
//
// function App() {
//   const [puzzle, setPuzzle] = useState([]);
//
//
//     useEffect(() => {
//         fetch("/puzzles")
//             .then((response) => {
//                   return response.json();
//               })
//              .then(function (data) {
//                   setPuzzle(data);
//               });
//         }, []);
//
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//             {puzzle.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
//         </ul>
//       </header>
//     </div>
//   );
// }
//
// export default App;
// const [message, setMessage] = useState([]);

// // useEffect
// useEffect(() => {
//     fetch("/hello")
//         .then((response) => {
//             return response.json();
//         })
//         .then(function (data) {
//             setMessage(data);
//         });
// }, []);

// {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}