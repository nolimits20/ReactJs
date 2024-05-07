import { IBM_Plex_Mono } from 'next/font/google'

const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight:['400', '700'] });

export const metadata = {
  title: " about ecommerce website",
  description: "Fundamentals of React",
};

export default function RootLayout({children}) {
  return (
    <div className={ibm.className}>
        <div>This is about Layout</div>
        {children}
    </div>
  )
}
