'use client'
import React from 'react';
import  CardText  from '@/app/ui/cardstext/cardtext';
import { useTranslations } from 'next-intl';




export const Skills = ()=>{
  const t = useTranslations("Skills");
    return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardText
            imageSrc="/img/UX-UIdesign_MC.png" 
            imageAlt='UX/UI Design Mauricio Casado'
            title= {t("titleS1")}
            description={t("descS1")}
            buttonText={t("buttonText")}
            buttonLink=''

          />
          <CardText
            imageSrc="/img/marketing-digital-MC.png" 
            imageAlt='Digital Marketing'
            title={t("titleS2")}
            description={t("descS2")}
            buttonText={t("buttonText")}
            buttonLink=''

          />
          <CardText
            imageSrc="/img/Consulting_MC.png" 
            imageAlt='UX/UI Design Mauricio Casado'
            title={t("titleS3")}
            description={t("descS3")}
            buttonText={t("buttonText")}
            buttonLink=''
           
          />
        </div>
      </div>
    </section>
  );
};

export default  Skills;
// export
