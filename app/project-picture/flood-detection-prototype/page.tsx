'use client'

import Image from 'next/image'
import Link from 'next/link'
import flood1 from '../../../ProjectPicture/FloodDetectionPrototype/03c50dd8-6942-4eae-ac8a-1ce37b17142a.jpg'
import flood2 from '../../../ProjectPicture/FloodDetectionPrototype/8c1e6d2c-64fc-4a03-b17a-47f4fe8cce13.jpg'

export default function FloodDetectionPrototype() {
  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Link href="/" className="mb-8 inline-flex items-center text-blue-400 hover:text-blue-300">
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Flood Detection Prototype</h1>
        <p className="mt-4 max-w-3xl text-slate-300 leading-8">
          Browse the project images for the flood detection prototype. Click each image to view the design screens and concept visuals.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            { src: flood1, alt: 'Flood Detection Prototype screenshot 1' },
            { src: flood2, alt: 'Flood Detection Prototype screenshot 2' },
          ].map((item, index) => (
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
