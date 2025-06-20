import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
// Importa 'locales' desde tu archivo centralizado de routing
import { locales } from "./src/i18n/routing"; 

export default getRequestConfig(async({locale})=>{
    // Valida que el locale entrante es válido.
    if(!locales.includes(locale as typeof locales[number])) notFound(); 
            
    return{
        locale,
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
