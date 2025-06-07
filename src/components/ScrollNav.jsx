import { useEffect, useState } from "react";

const sections = [
    {id: 'inicio', label: 'inicio'},
    {id: 'sobre-mi', label: 'Sobre mi'},
    {id: 'Experiencia', label: 'Experiencia'},
    {id: 'Estudios', label: 'Mis Estudios'},
    {id: 'Contacto', label: 'Redes y Contacto'}
];

const ScrollNav = () => {
    const [active, setActive] = useState('');

    useEffect(()=> {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = '';
            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if(el && el.offsetTop - 100 <= scrollY){
                    current = section.id;
                }
            });
            setActive(current)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed left-1 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 md:left-5">
            {sections.map((section) => (
                <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="group relative flex items-center"
                    >
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                active === section.id ? 'bg-white scale-125' : 'bg-gray-500'
                            }`}
                        ><div>
                            <span className="ml-2 text-sm scale-0 group-hover:scale-100 transition-transform origin-left text-white bg-black px-2 py-2 rounded shadow-lg absolute left-6 whitespace-nowrap min-w-[80px]">
                                {section.label}
                            </span>
                        </div>

                        </div>
                </a>
            ))}
        </div>
    )

}

export default ScrollNav;