export interface TSiteConfig {
  name: string;
  title: string;
  description: string;
  mainNav: { title: string; href: string }[];
  links: { [x: string]: string };
}

export const siteConfig: TSiteConfig = {
  name: 'CodeFleet',
  title: 'CodeFleet, a collaborative platform for Next.js developers.',
  description:
    'The official website of CodeFleet, a collaborative platform for Next.js developers.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    // twitter: 'https://twitter.com/shadcn',
    // github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
