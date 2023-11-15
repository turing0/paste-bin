import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Providers } from '@/app/providers'
import Footer from '@/components/Footer'
import Modal from '@/components/modal/Modal'
import Nav from '@/components/nav/Nav'
import classNames from 'classnames'
import { Inter } from 'next/font/google'
import ToastContainerLayout from '@/components/ToastContainerLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pastebin - Laphel',
  description: 'A pastebin clone built with Next.js, MongoDB and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(inter.className, 'bg-gray-100 dark:bg-zinc-900')}>
        <div className="flex flex-col min-h-screen"> {/* 添加 flex 容器 */}
          <Providers>
            <Nav />
            <main className="flex-grow"> {/* 确保主内容区域可以伸展 */}
              {children}
            </main>
            <Footer />
            <Modal />
            <ToastContainerLayout />
          </Providers>
        </div>
      </body>
    </html>
  )
}
