
export interface ClientLogo {
  name: string;
  logoUrl: string;
  isTextOnly?: boolean;
}

export const clientLogos: ClientLogo[] = [
  {
    name: "Noratel",
    logoUrl: "/assets/logos/noratel-logo.png"
  },
  {
    name: "Thefirms.in",
    logoUrl: "/lovable-uploads/281c69ad-7af6-4d69-95a7-7ad65e1b0e77.png",
    isTextOnly: true
  },
  {
    name: "Havells",
    logoUrl: "https://havells.com/media/logo/stores/1/Havells_Logo.svg"
  },
  {
    name: "InnovateX",
    logoUrl: "/assets/logos/innovatex-logo.jpg"
  }
];
