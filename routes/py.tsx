import { defineRoute, Handlers } from "$fresh/server.ts";


const SUBMIT_STYLES =
  "w-full text-white text-center rounded-[7px] transition duration-300 px-4 py-2 block hover:bg-white hover:text-black hover:dark:bg-gray-900 hover:dark:!text-white";

export default defineRoute(async (_req, _ctx) => {
  return (
    <>
      <main class="flex-1 flex flex-col justify-center mx-auto w-full space-y-16 p-4 max-w-6xl">
        <div class="text-center">
          <h1 class="heading-styles">Share your project</h1>
          <p class="text-gray-500">
            Let the community know about your Deno-related blog post, video or
            module!
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 md:items-center">

        </div>
      </main>
    </>
  );
});