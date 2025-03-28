// This file defines all of our routes
import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  // prefix to define both routes to have an intiall patth of countries
  ...prefix("countries", [
    index("routes/countries.tsx"),
    route(":countryName", "routes/country.tsx")
  ]),

] satisfies RouteConfig;
