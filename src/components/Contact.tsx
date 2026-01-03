// src/components/Contact.tsx
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
import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const info = [
  { icon: <FaMapMarkerAlt />, title: "Adresse", description: "Parakou, Bannikani" },
  { icon: <FaEnvelope />, title: "Email", description: "epiphanedev@gmail.com" },
  { icon: <FaPhoneAlt />, title: "Téléphone", description: "+229 01 542 15693" },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
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

      const res = await fetch("https://formsubmit.co/ajax/epiphanedev@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Erreur:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" } }}
      className="py-12 xl:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="xl:w-1/2 order-2 xl:order-none"
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Travaillons ensemble</h3>
                  <p className="text-white/70 leading-relaxed">
                    Prêt à construire ensemble ? Que ce soit pour un site vitrine, une application web ou un projet ambitieux, je suis là pour vous accompagner.
                  </p>
                </div>

                {/* Statut */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/30 border border-green-500/50 text-green-300 rounded-lg"
                  >
                    Message envoyé avec succès ! Je vous répondrai sous 24h.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/30 border border-red-500/50 text-red-300 rounded-lg"
                  >
                    Erreur d’envoi. Essayez encore ou contactez-moi directement à{" "}
                    <a href="mailto:epiphanedev@gmail.com" className="underline">
                      epiphanedev@gmail.com
                    </a>
                    .
                  </motion.div>
                )}

                {/* Champs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Prénom"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-white/10 focus:border-accent"
                  />
                  <Input
                    type="text"
                    placeholder="Nom"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-white/10 focus:border-accent"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-white/10 focus:border-accent sm:col-span-2"
                  />
                  <Input
                    type="tel"
                    placeholder="Téléphone (optionnel)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-white/10 focus:border-accent sm:col-span-2"
                  />
                </div>

                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="bg-background/50 border-white/10 focus:border-accent">
                    <SelectValue placeholder="Choisissez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="Développement Web">Développement Web</SelectItem>
                     
                      <SelectItem value="Application Mobile">optimisation SEO</SelectItem>
                      
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Décrivez votre projet..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="h-40 resize-none bg-background/50 border-white/10 focus:border-accent"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Infos */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex-1 order-1 xl:order-none flex flex-col justify-center gap-8"
            >
              {info.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-background/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent transition-all">
                    <div className="text-2xl text-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}