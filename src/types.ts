export interface CVData {
  personalInfo: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    address?: string;
    nationality?: string;
    birthDate?: string;
    website?: string;
    linkedin?: string;
    summary: string;
    avatar?: string;
  };
  experience: {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
    location: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    language: string;
    level: string;
  }[];
  projects?: {
    name: string;
    description: string;
    link?: string;
  }[];
}

export const initialCVData: CVData = {
  personalInfo: {
    fullName: "YUMBA MUSOYA GUINOT",
    title: "Opérateur d’Engins Mobiles | Licencié en Génie de Procédé",
    email: "assaniwap@gmail.com",
    phone: "+243 971 805 322 / +243 821 355 135",
    location: "Lubumbashi, R.D. Congo",
    address: "126, AV colonel MUJINGA Q/KASAPA C/ ANNEXE",
    nationality: "Congolaise",
    birthDate: "22 juillet 1974",
    summary: "Professionnelle avec expérience en environnement minier et industriel, notamment dans les opérations de concassage. Formée à la conduite d’engins lourds, rigoureuse dans l’application des normes HSE et capable de travailler efficacement dans un environnement exigeant. Expertise en conception et amélioration de procédés industriels.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", // Placeholder for the professional photo provided
  },
  experience: [
    {
      company: "MOUNTEN GROUPE",
      role: "Superviseur de marqueteur",
      period: "2021 - 2023",
      location: "Lubumbashi",
      description: [
        "Supervision des équipes de marketing et de promotion.",
        "Gestion des opérations de terrain et reporting."
      ]
    },
    {
      company: "C.S. Les Missionnaires",
      role: "Enseignant (Math, Physique, Chimie, Dessin Scientifique)",
      period: "2018 - 2021",
      location: "Lubumbashi",
      description: [
        "Enseignement des matières scientifiques au niveau secondaire.",
        "Préparation des élèves aux examens d'État."
      ]
    },
    {
      company: "Boss Mining Luita",
      role: "Professionnalisation (Opérateur d'Engins)",
      period: "2016 - 2017",
      location: "Luita",
      description: [
        "Appui aux opérations industrielles.",
        "Application rigoureuse des standards de sécurité minière."
      ]
    },
    {
      company: "MMG Kinsevere",
      role: "Stage de professionnalisation (Département Concassage)",
      period: "2015 - 2016",
      location: "Kinsevere",
      description: [
        "Service de production au sein du département de concassage.",
        "Respect des procédures de sécurité et participation aux activités de production."
      ]
    }
  ],
  education: [
    {
      school: "Université de Lubumbashi",
      degree: "Diplôme de Licence en Génie de Procédé",
      period: "Diplômé",
      location: "Lubumbashi"
    },
    {
      school: "Complexe Scolaire La Charité",
      degree: "Diplôme d’État en Mathématique-Physique",
      period: "Diplômé",
      location: "Lubumbashi"
    },
    {
      school: "EP KABUKWIKWI",
      degree: "Certificat d’études Primaires",
      period: "Diplômé",
      location: "Lubumbashi"
    }
  ],
  skills: [
    {
      category: "Compétences Techniques",
      items: [
        "Conduite d’engins mobiles lourds",
        "Conception & étude de procédés industriels",
        "Respect des normes HSE",
        "Surveillance des équipements",
        "Amélioration de procédés"
      ]
    },
    {
      category: "Logiciels Maîtrisés",
      items: ["Word", "Excel", "Windows", "Access", "Power Point"]
    },
    {
      category: "Qualités Personnelles",
      items: ["Autonomie", "Travail sous pression", "Esprit d'équipe", "Discipline"]
    }
  ],
  languages: [
    { language: "Français", level: "Courant" },
    { language: "Swahili", level: "Courant" },
    { language: "Lingala", level: "Courant" },
    { language: "Anglais", level: "Notions" }
  ]
};
