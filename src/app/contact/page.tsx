"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React, { useState } from 'react';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const info = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Parakou, Bannikani",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "epiphanedev@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "+229 015421593",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      const response = await fetch("https://formsubmit.co/ajax/epiphanedev@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 gap-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none flex-1">
            <form
              className="flex flex-col gap-6 p-6 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-accent text-2xl">Travaillons ensemble</h3>
              <p className="text-white/60">

Prêt à construire ensemble ?
Avez-vous une idée, un projet ambitieux ou un défi technique à relever ? En tant que développeur web, je suis là pour transformer vos concepts en solutions numériques performantes et innovantes. Que ce soit pour un site vitrine, une application web complexe ou l&apos;optimisation de votre présence en ligne, discutons de la meilleure façon de donner vie à votre vision.


              </p>

              {/* Affichage des messages de statut */}
              {submitStatus === 'success' && (
                <div className="p-4 mb-4 text-green-300 bg-green-900/30 rounded-lg">
                  Message envoyé avec succès! Je vous répondrai dès que possible.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 mb-4 text-red-300 bg-red-900/30 rounded-lg">
                  Une erreur est survenue. Veuillez réessayer ou me contacter directement à epiphanedev@gmail.com
                </div>
              )}

              {/* input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="Prénom" 
                  name="firstname" 
                  value={formData.firstname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="text" 
                  placeholder="Nom" 
                  name="lastname" 
                  value={formData.lastname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="Adresse email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="tel" 
                  placeholder="Numéro de téléphone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              
              {/* select */}
              <Select onValueChange={handleSelectChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sélectionnez un service</SelectLabel>
                    <SelectItem value="Développement Web">Développement Web</SelectItem>
                    <SelectItem value="Design UI/UX">Design UI/UX</SelectItem>
                    <SelectItem value="Design de Logo">Design de Logo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Tapez votre message ici"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></Textarea>

              <Button 
                size="md" 
                className="max-w-60" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex flex-col justify-center gap-6 order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex rounded-md items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl">{item.title}</h4>
                    <p className="text-white/20">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;