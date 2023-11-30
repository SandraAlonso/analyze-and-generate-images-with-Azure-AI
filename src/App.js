import React from 'react';

function App() {
  // const value = 'World';
  // return <div>Hello {value}</div>;
  const [imageUrl, setImageUrl] = useState('');

  const handleImageAnalysis = () => {
    // Aquí va el código para el análisis de imágenes
  };

  const handleImageGeneration = () => {
    // Aquí va el código para la generación de imágenes
  };

  return (
    <div>
      <h1>Título</h1>
      <input 
        type="text" 
        value={imageUrl} 
        onChange={e => setImageUrl(e.target.value)} 
        placeholder="Ingrese la URL de la imagen"
      />
      <button onClick={handleImageAnalysis}>Analizar imagen</button>
      <button onClick={handleImageGeneration}>Generar imagen</button>
    </div>
  );
}

export default App;
