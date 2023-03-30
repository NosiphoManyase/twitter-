import { getProviders, signIn } from "next-auth/react"


export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        <img 
            src="https://www.techbooky.com/wp-content/uploads/2021/07/4859E08D-388B-4475-9FCC-C05914CC654A.png" 
            alt="twitter image" 
            className="object-cover md:w-44 md:h-80 hidden rotate-6 md:inline-flex"
        />
        <div className="">
            {Object.values(providers).map(provider =>(
                <div key={provider.id} className='flex flex-col items-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png' 
                    alt="twitter logo"
                    className="w-36 object-cover" />
                    <p className="text-center text-sm italic my-10">This app is created for learning purposes</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: '/'})} className="bg-red-500 rounded-lg p-3 text-white hover:bg-red-600">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders()

    return{
        props: {
            providers,
        }
    }
}
