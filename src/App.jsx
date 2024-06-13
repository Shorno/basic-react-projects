import {useState} from "react";
import Counter from "../components/Counter.jsx";

function App() {
    const [counter, setCounter] = useState(0)


    return (
        <>
            <div className={"w-full h-screen bg-[#142d4c]"}>
                <Counter count={counter} setCount={setCounter}/>
            </div>
        </>
    )
}

export default App
