import Logo from "/TODO.png";
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
import { useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header
            className={`${
                theme === "light" ? "header-light" : "header-dark"
            } w-full h-[150px] md:h-[250px] flex flex-col items-center px-[20px] pt-[45px]`}
        >
            <div className="w-full md:max-w-[550px] lg:max-w-[700px] flex justify-between items-center ">
                <div>
                    <img
                        className="w-[109px] md:w-[167px] lg:w-[180px] h-auto"
                        src={Logo}
                        alt="logo"
                    />
                </div>
                <button onClick={toggleTheme}>
                    <img
                        className="w-[20px] md:w-[25px] lg:w-[30px] h-auto"
                        src={theme === "light" ? Moon : Sun}
                        alt="icon"
                    />
                </button>
            </div>
        </header>
    );
}
