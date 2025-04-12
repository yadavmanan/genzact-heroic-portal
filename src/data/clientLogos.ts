
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
    logoUrl: "/lovable-uploads/435d5c4b-4ef8-47b2-a44f-e3d60dabc4a4.png",
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

