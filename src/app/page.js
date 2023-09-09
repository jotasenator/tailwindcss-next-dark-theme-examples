
'use client';

export default function Home ()
{

  return (
    <>
      <div className='p-5 '>
        <div className="text-center text-lg font-extrabold">Hello World!</div>
        <div className="w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md my-4 p-2">
          <div className="text-center font-mono">A div</div>
        </div>

        {/* Layout */ }
        <div className="fixed w-10 h-10 bg-red-500  top-0"></div>
        <div className="flex justify-between">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-violet-500 h-12 m-2"></div>
          <div className="bg-violet-500 h-12 m-2"></div>
          <div className="bg-violet-500 h-12 m-2"></div>
          <div className="bg-violet-500 h-12 m-2"></div>
          <div className="bg-violet-500 h-12 m-2"></div>
        </div>

        <div className="md:block hidden">
          <p>I will appear for device resolution <span className="font-bold">{ '> > >' }</span> 768px </p>
        </div>
        <div className="max-md:block hidden">
          <p>I will appear for device resolution <span className="font-bold">{ '< < <' }</span > 768px</p>
        </div>
        <button className="my-2 rounded-lg bg-gray-400 p-2 text-white hover:bg-gray-500 focus:outline-none focus:ring focus:ring-red-200 active:bg-blue-800">Click me</button>

        <ul className="my-2 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-100">item</li>
          <li className="bg-white p-2 odd:bg-blue-200 even:bg-green-200 first:bg-yellow-100">item</li>
          <li className="bg-white p-2 odd:bg-blue-200 even:bg-green-200 first:bg-yellow-100">item</li>
          <li className="bg-white p-2 odd:bg-blue-200 even:bg-green-200 first:bg-yellow-100">item</li>
        </ul>
      </div>
      {/* Theme dark: */ }
      <div className="bg-white  m-5 py-2 rounded-lg">
        <div className='m-10 rounded-lg px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black'>
          <h3 className='text-base font-medium tracking-tight text-slate-900 dark:text-white'>
            This is a text element
          </h3>
          <p className='mt-2 text-sm text-slate-500 dark:text-blue-500'>
            This is an even longer p tag element
          </p>

        </div>
      </div>
    </>
  );
}
