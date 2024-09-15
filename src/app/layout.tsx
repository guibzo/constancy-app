import '@/styles/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Constancy',
  description: 'Crie e gerencie suas metas com facilidade',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt'>
      <body className='antialiased bg-background text-foreground min-h-screen'>
        <div className='mx-auto max-w-5xl w-full p-5 h-screen'>{children}</div>
      </body>
    </html>
  )
}
