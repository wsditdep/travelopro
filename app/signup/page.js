import SignUp from "@/components/auth/SignUp";

export const dynamic = "force-dynamic"

const page = () => {
    return (
        <>
            <section className="auth-section">
                <div className="auth-wrapper">
                    <SignUp />
                </div>
            </section>
        </>
    )
}

export default page