import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className=' text-red-500 text-4xl'>ERROR 404</h2>
        <p>We could not find the ticket you are looking for</p>
        <p>
            Go back to <Link href="/tickets">tickets</Link>
        </p>

    </main>
  )
}
