import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Download, 
  Edit3, 
  Eye, 
  Plus, 
  Trash2,
  ChevronRight,
  Github,
  Award,
  BookOpen,
  Briefcase,
  Languages,
  Wrench
} from 'lucide-react';
import { CVData, initialCVData } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [data, setData] = useState<CVData>(initialCVData);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'exp' | 'edu' | 'skills' | 'lang'>('info');

  const handlePrint = () => {
    window.print();
  };

  const updatePersonalInfo = (field: keyof CVData['personalInfo'], value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [
        { company: 'Nouvelle Entreprise', role: 'Poste', period: '2024 - Présent', location: 'Ville', description: ['Nouvelle mission'] },
        ...prev.experience
      ]
    }));
  };

  const removeExperience = (index: number) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="mx-auto max-w-6xl px-6 py-12 lg:flex lg:gap-12">
        {/* Editor Sidebar */}
        <AnimatePresence>
          {isEditing && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="no-print mb-8 w-full shrink-0 lg:mb-0 lg:w-80"
            >
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-400">Sections</h2>
                  <nav className="space-y-1">
                    {[
                      { id: 'info', label: 'Infos Perso', icon: Mail },
                      { id: 'exp', label: 'Expérience', icon: Briefcase },
                      { id: 'edu', label: 'Éducation', icon: BookOpen },
                      { id: 'skills', label: 'Compétences', icon: Wrench },
                      { id: 'lang', label: 'Langues', icon: Languages },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          activeTab === tab.id 
                            ? "bg-stone-900 text-white" 
                            : "text-stone-600 hover:bg-stone-50"
                        )}
                      >
                        <tab.icon size={16} />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  {activeTab === 'info' && (
                    <div className="space-y-4">
                      <h3 className="font-medium">Informations Personnelles</h3>
                      <div className="space-y-3">
                        <label className="block">
                          <span className="text-xs text-stone-500">Photo de profil</span>
                          <div className="mt-1 flex items-center gap-3">
                            {data.personalInfo.avatar && (
                              <img src={data.personalInfo.avatar} className="h-10 w-10 rounded-lg object-cover" alt="Preview" />
                            )}
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    updatePersonalInfo('avatar', reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="w-full text-xs text-stone-500 file:mr-4 file:rounded-full file:border-0 file:bg-stone-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-stone-700 hover:file:bg-stone-200"
                            />
                          </div>
                        </label>
                        <label className="block">
                          <span className="text-xs text-stone-500">Nom Complet</span>
                          <input 
                            type="text" 
                            value={data.personalInfo.fullName}
                            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-stone-900 focus:outline-none"
                          />
                        </label>
                        <label className="block">
                          <span className="text-xs text-stone-500">Titre</span>
                          <input 
                            type="text" 
                            value={data.personalInfo.title}
                            onChange={(e) => updatePersonalInfo('title', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-stone-900 focus:outline-none"
                          />
                        </label>
                        <label className="block">
                          <span className="text-xs text-stone-500">Résumé</span>
                          <textarea 
                            value={data.personalInfo.summary}
                            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                            rows={4}
                            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-stone-900 focus:outline-none"
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {activeTab === 'exp' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Expériences</h3>
                        <button onClick={addExperience} className="text-stone-900 hover:text-stone-600">
                          <Plus size={18} />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {data.experience.map((exp, idx) => (
                          <div key={idx} className="group relative rounded-lg border border-stone-100 bg-stone-50 p-3">
                            <button 
                              onClick={() => removeExperience(idx)}
                              className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white group-hover:block"
                            >
                              <Trash2 size={12} />
                            </button>
                            <input 
                              className="w-full bg-transparent font-medium focus:outline-none"
                              value={exp.company}
                              onChange={(e) => {
                                const newExp = [...data.experience];
                                newExp[idx].company = e.target.value;
                                setData({ ...data, experience: newExp });
                              }}
                            />
                            <input 
                              className="w-full bg-transparent text-xs text-stone-500 focus:outline-none"
                              value={exp.role}
                              onChange={(e) => {
                                const newExp = [...data.experience];
                                newExp[idx].role = e.target.value;
                                setData({ ...data, experience: newExp });
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* CV Preview */}
        <div className="flex-1">
          {/* Simple Layout */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cv-container mx-auto w-full max-w-[210mm] border border-stone-200 bg-white p-12 shadow-xl"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-stone-900">{data.personalInfo.fullName}</h2>
                <p className="text-xl font-medium text-stone-600">{data.personalInfo.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
                  <span className="flex items-center gap-1"><Mail size={12} /> {data.personalInfo.email}</span>
                  <span className="flex items-center gap-1"><Phone size={12} /> {data.personalInfo.phone}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {data.personalInfo.location}</span>
                </div>
              </div>
              {data.personalInfo.avatar && (
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-stone-200">
                  <img src={data.personalInfo.avatar} alt={data.personalInfo.fullName} className="h-full w-full object-cover" />
                </div>
              )}
            </div>

            <hr className="my-8 border-stone-200" />

            <div className="space-y-8">
              <section>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-900">Profil</h3>
                <p className="text-sm leading-relaxed text-stone-700">{data.personalInfo.summary}</p>
              </section>

              <section>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-stone-900">Expérience</h3>
                <div className="space-y-6">
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-stone-900">{exp.role} — {exp.company}</h4>
                        <span className="text-xs font-medium text-stone-500">{exp.period}</span>
                      </div>
                      <ul className="list-inside list-disc space-y-1 text-sm text-stone-600">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-stone-900">Formation</h3>
                  <div className="space-y-4">
                    {data.education.map((edu, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-bold text-stone-900">{edu.degree}</p>
                        <p className="text-stone-600">{edu.school}</p>
                        <p className="text-xs text-stone-400">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-stone-900">Compétences & Langues</h3>
                  <div className="space-y-4">
                    {data.skills.map((skillGroup, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-bold text-stone-900">{skillGroup.category}</p>
                        <p className="text-stone-600">{skillGroup.items.join(', ')}</p>
                      </div>
                    ))}
                    <div className="text-sm">
                      <p className="font-bold text-stone-900">Langues</p>
                      <p className="text-stone-600">
                        {data.languages.map(l => `${l.language} (${l.level})`).join(', ')}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Floating Controls Overlay */}
      <div className="no-print fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-stone-200 bg-white/80 p-2 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-all",
            isEditing ? "bg-emerald-500 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          )}
          title={isEditing ? "Voir l'aperçu" : "Modifier le CV"}
        >
          {isEditing ? <Eye size={18} /> : <Edit3 size={18} />}
        </button>

        <button
          onClick={handlePrint}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white shadow-lg transition-all hover:bg-stone-800 active:scale-95"
          title="Exporter en PDF"
        >
          <Download size={18} />
        </button>
      </div>
    </div>
  );
}
