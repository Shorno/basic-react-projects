import {GrPowerReset} from "react-icons/gr";
import {useEffect} from "react";

export default function Counter({count, setCount}) {
    const decrease = () => {
        setCount(prevState => prevState - 1)
    }
    const increase = () => {
        setCount(prevState => prevState + 1)
    }
    const reset = () => {
        setCount(0)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.code){
                case "ArrowUp":
                    setCount(count+1)
                    break;
                case "ArrowDown":
                    setCount(count-1);
                    break;
                case "Space":
                    setCount(0);
                    break;
                default:
                    break;
            }

        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }

    }, [count])


    return (
        <>
            <div className={"flex items-center justify-center h-full"}>
                <div

                    className={"text-3xl flex-col font-semibold text-[#385170] uppercase flex  w-1/4 h-1/2 bg-[#9fd3c7] rounded-xl text-center pt-10"}>
                    <h1>Fancy <br/>Counter</h1>
                    <h1 className={"text-9xl pt-10 pb-10"}>{count}</h1>
                    <button className={"flex justify-center hover:scale-125 transition duration-500 focus: outline-none "}>
                        <GrPowerReset size={40} onClick={reset}/>
                    </button>
                    <div className={"flex items-center h-1/4 mt-12 gap-0.5 bg-[#9fd3c7]"}>
                        <div className={"w-1/2 bg-amber-200 h-full hover:bg-amber-300 transition duration-500"}>
                            <button className={"text-6xl hover:scale-75 transition duration-500 focus: outline-none "}
                                    onMouseDown={decrease}>-
                            </button>
                        </div>
                        <div className={"w-1/2 bg-amber-200 h-full hover:bg-amber-300 transition duration-500"}>
                            <button className={"text-6xl hover:scale-75 transition duration-500s focus: outline-none"}
                                    onMouseDown={increase}>+
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}