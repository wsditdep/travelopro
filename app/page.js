import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const Welcome = dynamic(()=> import("@/components/welcome/Welcome"), {
    loading: ()=> <GlobalProgress />
});

export default function Home() {
  return (
    <>
      <Welcome />
    </>
  );
}
