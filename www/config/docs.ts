import { DocsConfig } from "types"

export const docs: DocsConfig = {
  links: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          url: "/docs",
        },
        {
          title: "Quick Start",
          url: "/docs/quick-start",
        },
      ],
    },
    {
      title: "Data Fetching",
      items: [
        {
          title: "Basic Example",
          url: "/docs/data-fetching",
        },
        {
          title: "Dynamic Pages",
          url: "/docs/data-fetching#dynamic-pages",
        },
        {
          title: "Advanced Example",
          url: "/docs/data-fetching#advanced-example",
        },
        {
          title: "Menus",
          url: "/docs/data-fetching/menus",
        },
        {
          title: "Blocks",
          url: "/docs/data-fetching/blocks",
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Query Params",
          url: "/docs/guides/jsonapi-params",
        },
        {
          title: "TypeScript",
          url: "/docs/guides/typescript",
        },
        {
          title: "Inline Images",
          url: "/docs/guides/inline-images",
        },
        {
          title: "Links",
          url: "/docs/guides/links",
        },
        {
          title: "Route Syncing",
          url: "/docs/guides/route-syncing",
        },
      ],
    },
    {
      title: "Examples",
      items: [
        {
          title: "List of nodes",
          url: "/docs/examples#list-of-nodes",
        },
        {
          title: "Node page",
          url: "/docs/examples#node-page",
        },
      ],
    },
    {
      title: "Reference",
      items: [
        {
          title: "getPathsFromContext",
          url: "/docs/reference#getpathsfromcontext",
        },

        {
          title: "getResourceTypeFromContext",
          url: "/docs/reference#getresourcetypefromcontext",
        },
        {
          title: "getResource",
          url: "/docs/reference#getresource",
        },
        {
          title: "getResourceFromContext",
          url: "/docs/reference#getresourcefromcontext",
        },
        {
          title: "getResourceByPath",
          url: "/docs/reference#getresourcebypath",
        },
        {
          title: "getResourceCollection",
          url: "/docs/reference#getresourcecollection",
        },
        {
          title: "getResourceCollectionFromContext",
          url: "/docs/reference#getresourcecollectionfromContext",
        },
        {
          title: "getMenu",
          url: "/docs/reference#getmenu",
        },
      ],
    },
    {
      title: "Hooks",
      items: [
        {
          title: "useMenu",
          url: "/docs/hooks#useMenu",
        },
      ],
    },
    {
      title: "Drupal",
      items: [
        {
          title: "SitePreviewer",
          url: "/docs/site-previewer",
        },
        {
          title: "SiteResolver",
          url: "/docs/site-resolver",
        },
      ],
    },
  ],
}
