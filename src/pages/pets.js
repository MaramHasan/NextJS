import React from 'react'
import Image from 'next/image'
import img from '../../public/1.jpg'

export default function PetsPage() {
    return (
        <div>
            <Image src={img} placeholder="blur" alt="pet" width="280" height="420" />
            {
                ['1', '2', '3', '4', '5'].map((path) => {
                    return (
                        <div key={path}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {/* <img src={`../../${path}.jpg`} alt={path} width="280" height="420" /> */}
                            <Image src={`/${path}.jpg`} alt={`${path}_pet`}
                                width="280" height="420" />
                        </div>
                    )
                })
            }
        </div>
    )
}
