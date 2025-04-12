
export interface ClientLogo {
  name: string;
  logoUrl: string;
  isTextOnly?: boolean;
}

export const clientLogos: ClientLogo[] = [
  {
    name: "Noratel",
    logoUrl: "/lovable-uploads/c73b9331-1744-40ec-81da-752b99b32432.png"
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
    logoUrl: "/lovable-uploads/943aadfb-a8b3-4591-8cba-128f99dbff77.png"
  }
];
