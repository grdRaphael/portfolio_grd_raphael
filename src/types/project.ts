export type Project = {
  id: string;
  // « P05 » pour un projet de la formation, « PERSO » pour un projet personnel
  code: string;
  year: string;
  title: string;
  tagline: string;
  category: string;
  cover: string;
  video?: string;
  // Une grande capture puis une capture verticale (ordinateur + mobile, ou montre + iPhone)
  captures: {
    src: string;
    alt: string;
  }[];
  logos: {
    name: string;
    src: string;
  }[];
  context: string;
  objectives: string;
  stack: string;
  skills: string;
  results: string;
  improvements: string;
  // Tous les projets n'ont pas de démo ni de dépôt public : la note explique pourquoi
  links: {
    demo?: string;
    github?: string;
    note?: string;
  };
};
