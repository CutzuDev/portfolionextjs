export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <div className="rounded-md bg-gradient-to-r from-pink-500  via-red-400 to-blue-500 p-1">
        <div className="rounded-md bg-black p-5 text-xl font-medium text-white">
          Hello, gradient
        </div>
      </div>
      <div className="maskingClass shadow-insetGlow relative isolate flex items-center justify-center overflow-hidden rounded-full p-2 after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-l after:from-[rgba(156,178,255,0.24)] after:via-[rgba(186,156,255,0.24)] after:to-[rgba(229,156,255,0.24)] after:p-[1px]">
        <div> New: Our AI integration just landed</div>
      </div>
      {/*  */}
    </main>
  );
}
