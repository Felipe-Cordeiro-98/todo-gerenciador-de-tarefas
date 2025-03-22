import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/TODO.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        toDasboard();
    };

    const toDasboard = () => {
        navigate("/dashboard");
    };

    return (
        <div className="w-full h-screen px-[15px] ">
            <div className="h-17 flex items-center justify-center mb-6">
                <img
                    className="invert w-[115px] md:w-[167px] lg:w-[180px] h-auto"
                    src={Logo}
                    alt="logo"
                />
            </div>
            <form className="flex flex-col gap-3 " onSubmit={handleForm}>
                <fieldset className="relative">
                    <input
                        className="peer w-full border border-[#ccc] px-3 pt-6 pb-2 rounded-xl outline-none focus:ring focus:ring-blue-500"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder=" "
                    />
                    <label
                        className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        htmlFor="email"
                    >
                        Número do celular ou email
                    </label>
                </fieldset>

                <fieldset className="relative">
                    <input
                        className="peer w-full border border-[#ccc] px-3 pt-6 pb-2 rounded-xl outline-none focus:ring focus:ring-blue-500"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder=" "
                    />
                    <label
                        className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        htmlFor="password"
                    >
                        Senha
                    </label>
                </fieldset>
                <button
                    className="bg-blue-600 transition-all active:bg-blue-700 text-white text-md rounded-3xl px-2 py-3"
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            <div className="flex flex-col items-center">
                <a className="mt-6 mb-15" href="/register">
                    Esqueceu a senha?
                </a>

                <button
                    className="w-full transition-all border border-blue-500 text-md rounded-3xl px-2 py-3"
                    type="submit"
                >
                    Criar nova conta
                </button>
            </div>
        </div>
    );
}
