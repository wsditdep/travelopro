import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/auth.scss";
import "./styles/appLayout.scss";
import "./styles/styles.scss";
import "./styles/global.scss";
import { Toaster } from "react-hot-toast";
import { Suspense } from 'react'
import LiveSupport from '@/components/liveSupport/LiveSupport';
import favicon from "@/public/favicon.jpg";
import Loader from '@/components/loading/Loader';

export const metadata = {
  title: "Welcome - Travelopro",
  description: "",
  icons: {
    icon: {
      url: { favicon },
      type: "image/jpg",
    },
    shortcut: { url: "/favicon.jpg", type: "image/jpg" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontSize: '1.4rem',
              fontWeight: 'bold',
            },
          }}
        />
        <Suspense fallback={<Loader />}>
          <div className="platform-layout-parent">
            <div className="platform-layout-childs">
              {children}
            </div>
          </div>
        </Suspense>
        {/* <LiveSupport /> */}
      </body>
    </html>
  );
}