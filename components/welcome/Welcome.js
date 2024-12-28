import Image from "next/image"
import Link from "next/link";
import white_logo from "@/public/costar_assets/logos/logo_white.png";
import welcome_bg from "@/public/costar_assets/welcome-bg.jpg";

const Welcome = () => {
    return (
        <section className="welcome-page-section" style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${welcome_bg.src})`,
            backgroundSize: "cover",
            objectPosition: "center"
        }}>
            <div className="welcome-content" >
                <Image
                    src={white_logo}
                    alt="logo"
                    height={100}
                    width={100}
                    unoptimized
                />
                <h3>THE MOST <br />
                    COMPREHENSIVE<br />
                    PLATFORM</h3>
                <p>for commercial traval information,
                    analytics and news</p>
                <Link href="/signin">
                    <button>LET’S GET STARTED</button>
                </Link>
            </div>
        </section>
    )
}

export default Welcome