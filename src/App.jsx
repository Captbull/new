import React from "react";
import Userinput from './components/Userinput'
import Useroutput from './components/Useroutput'

const App= () =>{
        return (
            <div className="wrap">
            <Userinput />
            <Useroutput />
            <Useroutput />
            <Useroutput />
            </div>
        )
    }
    
    



































// import { useState } from "react";
// const [name, setName] = useState('Dupe')

// const affidavit =(e) => {
//     setName(e.target.value)
// }



// import { render } from "@testing-library/react";
// import React, {Component} from "react";


// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             address: 'Akasolori',
//         }
//         // this.affidavit = this.affidavit.bind(this)
//     }
    
//     // affidavit = (e) => {
//     //     this.setState({
//     //         name: e.target.value
//     //     })
//     // }

    



//     render() {
//         return (
//             <div> <h1> My Name is {this.state.name}  and  i live at  {this.state.address}</h1>
//             {/* <label htmlFor="input">Type Name: </label>
//             <input type="text" onChange={this.affidavit}/> */}
//             </div>
//         )
//     }
// }












export default App;
