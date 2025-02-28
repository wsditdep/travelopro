import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const SignUp = dynamic(() => import("@/components/auth/SignUp"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <>
            <section className="auth-section page_animation">
                <div className="auth-wrapper">
                    <SignUp />
                </div>
            </section>
        </>
    )
}

export default page