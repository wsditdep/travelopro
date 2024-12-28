import Image from "next/image";
import Signin from "@/components/auth/Signin";
import logo from "@/public/costar_assets/logos/logo_white.png";
import welcome_bg from "@/public/costar_assets/welcome-bg.jpg";

export const dynamic = "force-dynamic";

const page = () => {
    return (
        <section className="auth-section" style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${welcome_bg.src})`,
                    backgroundSize: "cover",
                    objectPosition: "center"
                }}>
            <div className="bg-video-wrapper">
                <video className="backgroundVideo" muted autoPlay loop playsInline>
                    <source src="/costar_assets/welcome-bg.mp4" type="video/mp4" />
                </video>
                <div className="auth-wrapper">
                    <div className="auth-login-logo">
                        <p>WELCOME BACK TO</p>
                        <Image
                            src={logo}
                            height={100}
                            width={100}
                            alt="logo"
                            unoptimized
                        />
                    </div>
                    <Signin />
                </div>
            </div>
        </section>
    )
}

export default page