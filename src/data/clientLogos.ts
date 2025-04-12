
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
    logoUrl: "/lovable-uploads/cc9b6c8b-aaf1-45da-9168-793db06f8bf4.png",
    isTextOnly: false
  },
  {
    name: "Havells",
    logoUrl: "https://havells.com/media/logo/stores/1/Havells_Logo.svg"
  },
  {
    name: "InnovateX",
    logoUrl: "/lovable-uploads/d0227dd0-611f-423c-99c2-a8320b2783f2.png"
  }
];
