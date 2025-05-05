
import { Service, Professional } from "@/types/models";

export const services: Service[] = [
  {
    id: 1,
    name: "Corte de Cabelo Feminino",
    description: "Corte personalizado de acordo com o formato do rosto e tipo de cabelo, incluindo lavagem e finalização.",
    price: 80,
    duration: 60,
    image: "/placeholder.svg",
    category: "Cabelo"
  },
  {
    id: 2,
    name: "Coloração",
    description: "Coloração completa com produtos de alta qualidade para um resultado duradouro e brilhante.",
    price: 150,
    duration: 120,
    image: "/placeholder.svg",
    category: "Cabelo"
  },
  {
    id: 3,
    name: "Hidratação Profunda",
    description: "Tratamento intensivo para recuperar a saúde e o brilho dos cabelos danificados.",
    price: 120,
    duration: 90,
    image: "/placeholder.svg",
    category: "Cabelo"
  },
  {
    id: 4,
    name: "Manicure",
    description: "Cuidado completo para as unhas, incluindo corte, modelagem e esmaltação.",
    price: 50,
    duration: 45,
    image: "/placeholder.svg",
    category: "Unhas"
  },
  {
    id: 5,
    name: "Pedicure",
    description: "Tratamento completo para os pés, incluindo esfoliação, hidratação e esmaltação.",
    price: 70,
    duration: 60,
    image: "/placeholder.svg",
    category: "Unhas"
  },
  {
    id: 6,
    name: "Design de Sobrancelhas",
    description: "Modelagem personalizada para realçar o olhar e harmonizar o rosto.",
    price: 40,
    duration: 30,
    image: "/placeholder.svg",
    category: "Estética"
  },
  {
    id: 7,
    name: "Limpeza de Pele",
    description: "Tratamento completo para remover impurezas e revitalizar a pele.",
    price: 120,
    duration: 90,
    image: "/placeholder.svg",
    category: "Estética"
  },
  {
    id: 8,
    name: "Massagem Relaxante",
    description: "Massagem corporal com técnicas que promovem relaxamento e bem-estar.",
    price: 150,
    duration: 60,
    image: "/placeholder.svg",
    category: "Bem-estar"
  }
];

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Marina Silva",
    role: "Cabeleireira",
    image: "/placeholder.svg",
    description: "Especialista em cortes modernos e coloração, com mais de 10 anos de experiência.",
    specialties: ["Cortes", "Coloração", "Tratamentos"],
    availability: {
      days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      hours: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    }
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Barbeiro",
    image: "/placeholder.svg",
    description: "Especializado em cortes masculinos, barba e design facial, trazendo tendências internacionais.",
    specialties: ["Cortes Masculinos", "Barba", "Tratamentos Capilares"],
    availability: {
      days: ["Segunda", "Terça", "Quinta", "Sexta", "Sábado"],
      hours: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]
    }
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Manicure e Pedicure",
    image: "/placeholder.svg",
    description: "Especialista em unhas, com técnicas de nail art e atenção aos detalhes.",
    specialties: ["Manicure", "Pedicure", "Nail Art", "Unhas em Gel"],
    availability: {
      days: ["Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      hours: ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"]
    }
  },
  {
    id: 4,
    name: "Fernanda Lima",
    role: "Esteticista",
    image: "/placeholder.svg",
    description: "Profissional de estética facial e corporal, com formação em técnicas avançadas de tratamento.",
    specialties: ["Limpeza de Pele", "Massagens", "Tratamentos Faciais", "Design de Sobrancelhas"],
    availability: {
      days: ["Segunda", "Quarta", "Quinta", "Sexta", "Sábado"],
      hours: ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"]
    }
  }
];
