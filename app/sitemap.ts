export default function sitemap() {
  const baseUrl = "https://www.rabbitbreedguide.com";

  const rabbitPages = [
    "american-chinchilla",
    "american-fuzzy-lop",
    "american-rabbit",
    "american-sable",
    "argente-brun",
    "belgian-hare",
    "beveren",
    "blanc-de-hotot",
    "blue-holicer",
    "britannia-petite",
    "californian",
    "champagne-dargent",
    "checkered-giant",
    "cinnamon",
    "creme-dargent",
    "czech-frosty",
    "dutch",
    "dwarf-hotot",
    "dwarf-papillon",
    "english-angora",
    "english-lop",
    "english-spot",
    "flemish-giant",
    "florida-white",
    "french-angora",
    "french-lop",
    "giant-angora",
    "giant-chinchilla",
    "harlequin",
    "havana",
    "himalayan",
    "holland-lop",
    "jersey-wooly",
    "lilac",
    "lionhead-rabbit",
    "mini-californian",
    "mini-lop",
    "mini-rex",
    "mini-satin",
    "netherland-dwarf",
    "new-zealand",
    "palomino",
    "polish",
    "rex",
    "rhinelander",
    "satin",
    "satin-angora",
    "silver",
    "silver-fox",
    "silver-marten",
    "standard-chinchilla",
    "tan",
    "thrianta",
  ];

  const staticPages = ["", "about", "privacy", "terms", "contact"];

  return [
    ...staticPages.map((page) => ({
      url: page ? `${baseUrl}/${page}` : `${baseUrl}/`,
      lastModified: new Date(),
    })),

    ...rabbitPages.map((slug) => ({
      url: `${baseUrl}/rabbits/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
