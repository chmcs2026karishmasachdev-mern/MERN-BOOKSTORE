import { NotebookIcon } from 'lucide-react'
import {Link }from 'react-router'


const BookNotFound = () => {
  return (
    <><div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
      <NotebookIcon className='size-10 text-primary' />
    </div><h3 className='text-2xl font-bold'> no books yet</h3>
    <p className='text-base-content/70'>Ready to add books? add first book to the bookstore.</p>
    <Link to='/create' className='btn btn-primary'>Add first book to the bookstore</Link>
    </>
  )
}

export default BookNotFound
