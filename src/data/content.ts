// Edit this file to update site content. Empty values are not rendered (no dead links).
export const contact = {
  whatsapp: '6285173405100',
  email: 'imamwijayanto62@gmail.com',
  github: 'https://github.com/imamwijaya',
  linkedin: 'https://www.linkedin.com/in/imam-wijayanto/'
};
export const whatsappDisplay = '+62 851-7340-5100';
export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo Imam, aku melihat portofoliomu dan ingin berdiskusi.')}`;
export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'software', label: 'Software & Data Analytics' },
  { key: 'ai', label: 'AI & Machine Learning' },
  { key: 'creative', label: 'Creative Portfolio' },
] as const;
export const skills = [
  { title: 'Software Development', items: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Dart'] },
  { title: 'Data Analytics', items: ['Python', 'Data visualization'] },
  { title: 'AI & Machine Learning', items: ['Machine learning', 'Deep learning', 'Computer vision'] },
  { title: 'Creative Production', items: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Canva'] },
  { title: 'Productivity & Design Tools', items: ['Microsoft Office'] },
];
