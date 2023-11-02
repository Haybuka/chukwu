interface CardUi {
  name: string;
  description: string;
  stack: string;
  links: Link[];
}

interface Link {
  label: string;
  path: string;
  icon: string;
}

// {
//   label: string;
//   path: string;
//   icon: string;
// }
