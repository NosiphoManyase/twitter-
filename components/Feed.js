import {SparklesIcon} from '@heroicons/react/24/outline'
import Input from './Input'
import Post from './Post'

export default function Feed() {
    const posts = [
        {
            id: '1',
            name: 'Reign Collum',
            username: 'reignCollumm1',
            userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
            img: 'https://plus.unsplash.com/premium_photo-1670513671607-a15caaf818c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            text: 'my 2 fave peeps', 
            timestamp: '2 hours ago'
        },
        {
            id: '2',
            name: 'Frank Sinatra',
            username: 'loverBoi247',
            userImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            img: 'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5ub3llZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            text: 'people can really get on your nerves',
            timestamp: '3 hours ago'
        },
    ]

  return (
    <div className="xl:ml-[370px] border-l border-r border-x-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-lg font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5' />
            </div>
        </div>
        <Input />
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    </div>
  )
}
