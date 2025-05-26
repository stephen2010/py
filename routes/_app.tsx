import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html class="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>py4</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="dark:bg-slate-800 ">
        <Component />
      </body>
    </html>
  );
}
