import { GrPowerReset } from "react-icons/gr";

export default function Counter({counter, setCounter}) {
    const decrease = () => {
        setCounter(prevState => prevState - 1)
    }
    const increase = () => {
        setCounter(prevState => prevState + 1)
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <div className={"flex items-center justify-center h-full"}>
                <div
                    className={"text-3xl flex-col font-semibold text-[#385170] uppercase flex  w-1/4 h-1/2 bg-[#9fd3c7] text-center rounded-xl pt-10"}>
                    <h1>Fancy <br/>Counter</h1>
                    <h1 className={"text-9xl pt-10 pb-10"}>{counter}</h1>
                    <button className={"flex justify-center hover:scale-125 transition duration-500 "}>
                        <GrPowerReset size={40} onClick={reset}/>
                    </button>
                    <div className={"justify-around flex bg-[#ececec] rounded-b-xl h-1/4 mt-12"}>
                        <button className={"text-8xl  hover:scale-75 transition duration-500 "} onClick={decrease}>-</button>
                        <button className={"text-8xl hover:scale-75 transition duration-500s"} onClick={increase}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}