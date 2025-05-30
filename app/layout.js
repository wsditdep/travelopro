import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/auth.scss";
import "./styles/appLayout.scss";
import "./styles/styles.scss";
import "./styles/global.scss";
import { Toaster } from "react-hot-toast";
import favicon from "@/public/favicon.jpg";
import NextTopLoader from 'nextjs-toploader';
import LiveSupport from '@/components/liveSupport/LiveSupport';

export const metadata = {
  title: "Travel Solutions | Travel Website | Travel API | Travel GDS",
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
        <div className="platform-layout-parent">
          <div className="platform-layout-childs">
            <NextTopLoader />
            {children}
          </div>
        </div>
        <LiveSupport />
      </body>
    </html>
  );
}
