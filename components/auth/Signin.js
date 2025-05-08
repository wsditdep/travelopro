"use client";

import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { authenticate } from '@/app/actions/user/action';
import { useFormStatus } from "react-dom";
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <><i className="fa fa-circle-notch rotating-spinner"></i></> : "SIGN IN"}</button>
        </>
    )
}

const Signin = () => {

    const { push } = useRouter();

    const [defaultVal, setDefaultVal] = useState({
        username: "",
        password: ""
    });

    const [isAgree, setIsAgree] = useState(true);

    const saveLoginData = (data) => {

        const { username, password } = Object.fromEntries(data);

        const loginData = {
            username: username,
            password: password
        };

        localStorage.setItem("xjdeiuqx_history", JSON.stringify(loginData));
    };

    const handleForm = async (formData) => {

        if (!isAgree) {
            return toast.error("Please read and accept terms & conditions");
        }

        try {
            const response = await authenticate(formData);

            if (response === undefined) {
                toast.success("Successfully Logged In");
                push('/dashboard');
                saveLoginData(formData);

                return;
            } else {
                if (response.message === "Agent has been freeze") {
                    toast.error(response.message);
                } else {
                    toast.error(response.message);
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fromHistory = localStorage.getItem("xjdeiuqx_history");

        if (fromHistory) {
            const parsedData = JSON.parse(fromHistory);
            setDefaultVal({
                username: parsedData?.username || "",
                password: parsedData?.password || ""
            });
        }

    }, []);

    return (
        <div className="app-global-form">
            <form action={handleForm}>
                <div className="app-form-group app-form-group-include-conf">
                    {/* <label>Username</label> */}
                    <svg className="input-primary-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill="#1F2F5C"
                            d="M.001 13.717c0 .156.13.283.292.283h13.413a.29.29 0 0 0 .292-.283v-.338c.006-.102.02-.611-.315-1.174a2.76 2.76 0 0 0-.912-.91q-.716-.453-1.816-.653c-.005 0-.55-.072-1.106-.215-.97-.247-1.054-.466-1.055-.469a.3.3 0 0 0-.025-.062c-.007-.04-.027-.194.01-.607.096-1.047.657-1.666 1.109-2.163.142-.157.277-.305.38-.45.447-.627.488-1.34.49-1.384 0-.09-.01-.163-.032-.231-.044-.137-.127-.222-.187-.284l-.041-.044c-.005-.005-.017-.02-.006-.09.04-.26.063-.477.075-.684.02-.37.036-.921-.06-1.458a2 2 0 0 0-.062-.304q-.151-.556-.487-.948C9.919 1.207 8.98.22 6.255.015A9 9 0 0 0 5.14.021c-.088.005-.21.01-.322.04-.282.073-.357.251-.377.351-.032.165.025.294.063.38.006.011.013.027 0 .066a1.3 1.3 0 0 1-.264.27c-.029.025-.712.615-.75 1.384-.101.586-.093 1.498.026 2.128.007.035.018.086 0 .121-.128.116-.274.247-.274.545.002.03.043.743.49 1.37.104.145.238.293.38.45.452.497 1.014 1.116 1.109 2.163.037.413.018.566.01.607a.3.3 0 0 0-.025.062c0 .002-.085.221-1.05.468-.557.143-1.105.216-1.122.218-.712.12-1.315.334-1.79.634-.393.248-.7.555-.914.912a2.2 2.2 0 0 0-.328 1.186z"
                        ></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Username / Phone Number"
                        name="username"
                        defaultValue={defaultVal?.username}
                        required
                    />
                </div>
                <div className="app-form-group app-form-group-include-conf">
                    {/* <label>Password</label> */}
                    <svg className="input-primary-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        fill="none"
                        viewBox="0 0 15 16"
                    >
                        <path
                            fill="#1F2F5C"
                            stroke="#1F2F5C"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12.9 7.3H1.7A.7.7 0 0 0 1 8v6.3a.7.7 0 0 0 .7.7h11.2a.7.7 0 0 0 .7-.7V8a.7.7 0 0 0-.7-.7Z"
                        ></path>
                        <path
                            stroke="#1F2F5C"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3.8 7.3V4.5a3.5 3.5 0 0 1 7 0v2.8"
                        ></path>
                        <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7.3 10.1v2.1"
                        ></path>
                    </svg>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        defaultValue={defaultVal?.password}
                        required
                    />
                </div>
                <div className="forgetPassword">
                    <Link href="/forgotPassowrd"><p>Forgot Password?</p></Link>
                </div>
                <div className="app-form-group">
                    <Submit />
                    <div className="create-account">
                        <Link href="/signup"><p>CREATE ACCOUNT?</p></Link>
                    </div>
                </div>
                <div className="form-copyright">
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            defaultChecked
                            onChange={() => setIsAgree(!isAgree)}
                        />
                        <p>By clicking Login or Sign Up button, I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>. </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin