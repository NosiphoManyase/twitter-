import {EllipsisHorizontalIcon} from '@heroicons/react/24/solid'
import {ChatBubbleOvalLeftEllipsisIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon} from '@heroicons/react/24/outline'
import Moment from 'react-moment'

export default function Post({ post}) {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>

        <img src={post.data().userImg} alt='user image'
        className='h-11 w-11 object-cover object-center rounded-full mr-4 '/>

        {/* Post header */}
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1 whitespace-nowrap'>
                    <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.data().name}</h4>
                    <span className='text-sm sm:text-[15px]'>@{post.data().username} - </span>
                    <span className='text-sm sm:text-[15px] hover:underline'>
                        <Moment date={post.timestamp} fromNow />
                    </span>
                </div>
                <EllipsisHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
            </div>

            <div className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.data().text}</div>

            <img src={post.data().image}
                alt='' 
                className='rounded-2xl mr-2'
            />

            <div className='flex justify-between text-gray-500 p-2'>
                <ChatBubbleOvalLeftEllipsisIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
            </div>            
        </div>
    </div>
  )
}
