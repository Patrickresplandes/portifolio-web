"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DAT = [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className='list-disc pl-2
      '>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Angular</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>PHP</li>
        <li>PL/SQL</li>
      </ul>
    )
  },
  {
    title:"Educação",
    id:"educacao",
    content:(
      <ul>
        <li>OneBitCode</li>
        <li>Alura</li>
        <li>Analise e desenvolvimento de sistemas - FACIMP</li>
      </ul>
    )
  },
  {
    title:"Certificados",
    id:"certificados",
    content: (
      <ul>
        <li>FullStack Javascript</li>
        <li>POO em Javascript - Alura</li>
        <li>Desenvolvedor Web Completo - Udemy</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

const handleTabChange = (id) =>{
  startTransition(()=> {
    setTab(id)
  })
}
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/software.png" width={500} alt='skill' height={500} className='rounded-xl'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full' >
      <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
      <p className='text-base md:text-lg'>
      Sou um desenvolvedor talentoso, habilidoso em HTML, CSS e JavaScript,
      navegando pelos frameworks Angular, React e Next.js. 
      Como analista de sistemas júnior, domino PHP, Oracle e PL/SQL. Além disso, trabalho com contêineres com Docker e trago segurança ao código
      com TypeScript. Tenho criatividade, habilidades técnicas e análise para produzir obras-primas tecnológicas.
      </p>
      <div className='flex flex-row justify-start mt-8'>
      <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>
        {" "}
        Skills{" "}
      </TabButton>
      <TabButton selectTab={()=> handleTabChange("educacao")} active={tab === "educacao"}>
        {" "}
        Educação{" "}
      </TabButton>
      <TabButton selectTab={()=> handleTabChange("certificados")} active={tab === "certificados"}>
        {" "}
        Certificados{" "}
      </TabButton>
      </div>
        <div className='mt-8'> 
          {TAB_DAT.find((t) => t.id === tab).content}
        </div>
      </div>
        </div>
    </section>
  )
}

export default AboutSection