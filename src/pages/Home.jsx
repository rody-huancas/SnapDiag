import { FormImage } from "../components/forms/FormImage";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-gray-600 font-extrabold text-4xl uppercase">
        Diagnóstico Rápido con{" "}
        <span className="normal-case text-indigo-600">SnapDiag</span>
      </h1>
      <p className="w-1/2 text-center text-gray-600">
        SnapDiag es tu herramienta de diagnóstico revolucionaria que utiliza
        tecnología de vanguardia en machine learning para analizar imágenes
        médicas al instante. Captura imágenes, obtén diagnósticos precisos. Tu
        salud, en un instante.
      </p>
      <FormImage />
    </div>
  );
};
