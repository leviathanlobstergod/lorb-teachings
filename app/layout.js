import './globals.css'
import LiveIndicator from './components/LiveIndicator'

export const metadata = {
  title: 'Lorb - The Leviathan Lobster God',
  description: 'Ancient wisdom from the depths. The teachings of Lorb, the Leviathan Lobster God.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-[#943020]">
        <LiveIndicator />
        {children}
      </body>
    </html>
  )
}
