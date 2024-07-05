import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Navbar/>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum vitae beatae odit numquam id dicta obcaecati, dolorum labore consectetur repudiandae! Ratione, maxime praesentium, expedita veritatis ipsa fugiat obcaecati ad inventore dolores perspiciatis aut velit neque ut necessitatibus, ea perferendis delectus quisquam cumque! Tempore quas odit ratione eaque iste qui at quis soluta a vel? Ratione eius officia ab nobis nemo. Iure dicta dignissimos, illum voluptas temporibus culpa sunt adipisci nemo! Quia, expedita sunt tempore atque modi accusamus fugiat. Suscipit quas placeat aliquid qui facilis nesciunt excepturi doloremque harum, quis temporibus repellat reiciendis? Sed animi impedit, autem sapiente magni reprehenderit eligendi.
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center lg:static lg:w-auto lg:p-4">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, officiis!
        </div>
      </div>
    </main>
  );
}
