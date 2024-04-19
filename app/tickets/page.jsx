import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function page() {
  return (
    <main>
        <nav className='justify-between'>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently open tickets..</small></p>
            </div>
            <Link href="/tickets/create">
            <button  className="btn-primary">
      
                <span className='text-white'>Add Ticket</span>
            </button>
            </Link>
        </nav>

        
        <Suspense fallback={<Loading />}>
            <TicketList />
        </Suspense>
    </main>
  )
}

