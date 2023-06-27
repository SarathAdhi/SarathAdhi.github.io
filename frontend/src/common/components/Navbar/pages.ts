// export const pages = [
//   {
//     isSeparateChild: true,
//     items: [
//       {
//         name: "/Home",
//         href: "/",
//       },
//     ],
//   },

//   {
//     isSeparateChild: false,
//     items: [
//       {
//         name: "#About",
//         href: "/#about",
//       },
//       {
//         name: "#Skills",
//         href: "/#skills",
//       },
//       {
//         name: "#Contact",
//         href: "/#contact",
//       },
//     ],
//   },

//   {
//     isSeparateChild: true,
//     items: [
//       {
//         name: "/Projects",
//         href: "/projects",
//       },
//     ],
//   },
// ];

export const pages = [
  {
    isSeparateChild: true,
    title: "Home",
    items: [
      {
        name: "Home",
        href: "/#",
        description:
          "Embark on a journey through my awesome landing page, designed to captivate and inspire.",
      },
      {
        name: "About",
        href: "/#about",
        description:
          "Unveil the story behind my passion and expertise on the About Me page.",
      },
      {
        name: "Skills",
        href: "/#skills",
        description:
          "Discover a treasure trove of in-demand skills showcased on my Skills page.",
      },
      {
        name: "Contact",
        href: "/#contact",
        description:
          "Connect with me directly through the Contact Me page, and let's create something amazing together.",
      },
    ],
  },

  {
    isSeparateChild: true,
    title: "Projects",
    items: [
      {
        name: "Projects",
        href: "/projects",
        description:
          "Delve into a gallery of my personal projects, each crafted with love and innovation.",
      },
      {
        name: "Favorite Projects",
        href: "/projects?tab=starred",
        description:
          "Explore a curated selection of my favorite projects that highlight my creativity and skills.",
      },
    ],
  },

  {
    isSeparateChild: false,
    title: "Certificates",
    items: [
      {
        name: "Certificates",
        href: "/certificates",
        description:
          "Witness the recognition and accomplishments I have earned through a collection of prestigious certificates.",
      },
    ],
  },
];
