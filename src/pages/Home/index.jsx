import { useState } from "react";
import { apiViaCep } from "../../services/apiViaCep";
import { Container, Input, Label } from "./styles";



const Home = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);

  const handleFindAddress = async () => {
    setLoading(true);

    try {
      const { data } = await apiViaCep.get(`${cep}/json`);
      setAddress(data);
    } catch (error) {
      alert("CEP não encontrado.");
    } finally {
      setLoading(false);
    }
  };

  console.log(address);

  return (
    <main>
      <label htmlFor="cep">Insira seu cep:</label>
      <input
        type="text"
        name="cep"
        placeholder="00000-00"
        onChange={(e) => setCep(e.target.value)}
      />
      <button disabled={loading === true} onClick={handleFindAddress}>
        Buscar
      </button>

      {  (
        <div>
        <Container>
        <Label>
            lograudoro
          <Input type="text" defaultValue={address?.logradouro}  />
         </Label>

         <Label>
          bairo
          <Input type="text" defaultValue={address?.bairro} />
         </Label>

         <Label>
          Localidade
          <Input type="text" defaultValue={address?.localidade}/>
         </Label>

         <Label>
          uf 
          <Input type="text" defaultValue={address?.uf}/>
         </Label>

         <Label>
          Complemento 
          <Input type="text" placeholder="Apto6, bloco 2" required />
         </Label>
          {/* <label htmlFor="complemento">Complemento:</label>
          <input type="text" placeholder="Apto 6, bloco 2" required /> */}
          
        </Container>
        </div>
      )}
    </main>
  );
};

export default Home;

