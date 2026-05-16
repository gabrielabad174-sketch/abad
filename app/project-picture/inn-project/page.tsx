'use client'

import Image from 'next/image'
import Link from 'next/link'
import innMain from '../../../../ProjectPicture/InnProject/InnProject.png'
import screenshot1 from '../../../../ProjectPicture/InnProject/Screenshot 2026-05-16 145321.png'
import screenshot2 from '../../../../ProjectPicture/InnProject/Screenshot 2026-05-16 145330.png'
import screenshot3 from '../../../../ProjectPicture/InnProject/Screenshot 2026-05-16 145342.png'
import screenshot4 from '../../../../ProjectPicture/InnProject/Screenshot 2026-05-16 145351.png'

export default function InnProjectPage() {
  const images = [
    { src: innMain, alt: 'Inn Project main design image' },
    { src: screenshot1, alt: 'Inn Project screenshot 1' },
    { src: screenshot2, alt: 'Inn Project screenshot 2' },
    { src: screenshot3, alt: 'Inn Project screenshot 3' },
    { src: screenshot4, alt: 'Inn Project screenshot 4' },
  ]

  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Link href="/" className="mb-8 inline-flex items-center text-blue-400 hover:text-blue-300">
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Inn Project</h1>
        <p className="mt-4 max-w-3xl text-slate-300 leading-8">
          Browse the project images for the Inn Project. These visuals showcase the booking interface, guest flows, and design screens.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
              <div className="p-6 text-slate-300">
                <p>{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
