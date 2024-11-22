import { Poppins } from 'next/font/google'
import { ThemeProvider } from "../components/theme-provider"
import './globals.css'; // Or './styles/shadcn.css' based on the generated file


const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Frank Muthomi - AI-Powered Frontend Developer',
  description: 'Portfolio of Frank Muthomi, an aspiring ICT professional and AI enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          })()
        `}} />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

