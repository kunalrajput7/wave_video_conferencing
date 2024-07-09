import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wave",
  description: "Video Conferencing App",
  icons: 'icons/wave-logo.png'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout