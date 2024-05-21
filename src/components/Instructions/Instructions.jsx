
export default function Instructions() {
    
    return (
        <article className="flex bg-white/20 w-fit px-4 py-3 rounded-xl text-sm">
            <div className='flex flex-col items-start gap-1'>
                <p className='text-xl text-white font-semibold mb-3'>Instructions:</p>
                <p className='text-white font-medium'>• Guess the word related to physics</p>
                <p className='text-white font-medium'>• Each incorrect letter will add a part to the hangmans doll</p>
                <p className='text-white font-medium'>• If you get more than six wrong letters, you will be eliminated</p>
            </div>
        </article>
    );
}