import React from "react";
import { useTranslations } from "next-intl";
import  ContactForm  from "@/ui/contactForm/contactForm";
import Image from "next/image";




const Contact = ({locale}: {locale: string} ) => {
    const t = useTranslations("Contact");
    
    return(
        <div className="w-full  p-4 mt-0">
            <div className="columns-2 gap-8 m-auto w-3/4 min-h-[300px]">
                <div className="column-lg ">
                    <h1 className="text-center text-3xl font-bold">{t("title")}</h1>
                    <div className='w-full flex justify-center items-center mb-5'>
                         
                                    <Image
                                        src="/img/contact-MauricioCasado.png"
                                        alt='Logo Mauricio Casado'
                                        width={300}
                                        height={300}
                                        className="center"
                                    />
                    </div>
                   
                    <p>{t("descCont")}</p>
                    <p className=" mb-3"><strong>{t("telCont")}: ;</strong>+52 222 2581829</p>
                    <p className=" mb-3"><strong>{t("emailCont")}:</strong> contact@mauriciocasado.com</p>
                    <p className=" mb-3"><strong>{t("locationCont")}:</strong> Puebla Pue. México</p>
                
                </div>
                <div className="column-lg ">
                    <h1 className="text-center text-3xl font-bold">{t("titleForm")}</h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;