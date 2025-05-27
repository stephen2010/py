import { defineRoute, Handlers } from "fresh/compat";
import { STATUS_CODE } from "@std/http/status";

export const handler: Handlers = {
  async POST(ctx) {
    const form = await ctx.req.formData();
    const title = form.get("title");
    const price = form.get("price");

    await fetch("https://apikv1.deno.dev/py", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title": title,
        "price": price,
      }),
    });
    //    return Response.json({title, price});
    return new Response(null, {
      headers: {
        location: "/py",
      },
      status: STATUS_CODE.SeeOther,
    });
  },
};

const SUBMIT_STYLES =
  "w-full text-white text-center rounded-[7px] transition duration-300 px-4 py-2 block hover:bg-white hover:text-black hover:dark:bg-gray-900 hover:dark:!text-white";

export default defineRoute(async (_ctx) => {
  let title = "";
  let price = "";
  const res = await fetch("https://apikv1.deno.dev/py");
  const jsontitleprice = await res.json();
  if (jsontitleprice) {
    title = jsontitleprice.title;
    price = jsontitleprice.price;
  }
  return (
    <>
      <main class="flex-1 flex flex-col justify-center mx-auto w-full space-y-16 p-4 max-w-6xl">
        <div class="text-center">
          <h1 class="dark:text-white heading-styles">Share your project</h1>
          <p class="dark:text-slate-400 text-gray-500">
            Let the community know about your Deno-related blog post, video or
            module!
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 md:items-center">
          <form class="flex-1 flex flex-col justify-center" method="post">
            <div>
              <label
                htmlFor="submit_title"
                class="dark:text-slate-400 block text-sm font-medium leading-6 text-gray-900"
              >
                {title}
              </label>

              <input
                id="submit_title"
                class="dark:bg-slate-700 dark:text-slate-400 input-styles w-full mt-2"
                type="text"
                name="title"
                required
                placeholder="Title"
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="submit_price"
                class="dark:text-slate-400 block text-sm font-medium leading-6 text-gray-900"
              >
                {price}
              </label>
              <input
                id="submit_price"
                class="dark:bg-slate-700 dark:text-slate-400 input-styles w-full mt-2"
                type="text"
                name="price"
                required
                placeholder="https://xxx.xxx.com"
              />
            </div>

            <div class="w-full rounded-lg bg-gradient-to-tr from-secondary to-primary p-px mt-8">
              {<button type="submit" class={SUBMIT_STYLES}>Submit</button>}
            </div>
          </form>
        </div>
      </main>
    </>
  );
});
