
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";


const ImgDownload = () => {

    const handleDownload = () =>{

        const link = document.createElement("a")
        link.href = "/mi_portafolio/images/EN_PROCESO.png"
        link.download = "Certificado.png"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    };

    return (
        <div className="justify-normal">
            <a 
                className="text-lg text-purple-500 hover:text-purple-700 cursor-pointer"
                onClick={handleDownload}
                >Descarga el Certificado</a>
        </div>
    );


};

export default ImgDownload;