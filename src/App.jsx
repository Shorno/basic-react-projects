import {useState} from "react";
import Counter from "../components/Counter.jsx";

function App() {
    const [counter, setCounter] = useState(0)



    return (
        <>
            <div className={"w-full h-screen bg-[#142d4c]"}>
                <Counter counter={counter} setCounter={setCounter}/>
            </div>
        </>
    )
}

export default App
