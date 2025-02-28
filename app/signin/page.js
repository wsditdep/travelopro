import Image from "next/image";
import logo from "@/public/costar_assets/logos/logo_white.png";
import welcome_bg from "@/public/costar_assets/welcome-bg.jpg";

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const Signin = dynamic(() => import("@/components/auth/Signin"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <section className="auth-section page_animation" style={{
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