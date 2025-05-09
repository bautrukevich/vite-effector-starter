import { type RouteRecord, createRoutesView } from "atomic-router-react";

const pages = import.meta.glob<
  true,
  string,
  { default: RouteRecord<object, object> }
>("./**/@route.ts", { eager: true });

const routes = Object.values(pages).map((page) => page.default);

export const Pages = createRoutesView({ routes });
