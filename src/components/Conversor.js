import React, { useState } from 'react'

export default props => {
    const [moedaAValue, setMoedaAValue] = useState('0.00')
    const [moedaBValue, setMoedaBValue] = useState(0)

    const converter = () => {
      const de_para = `${props.moedaA}_${props.moedaB}`;
      const uri = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=8760e82836b16b39ea54`;
      fetch(uri)
      .then(res =>{
          return res.json();
      })
      .then(json =>{
          const cotacao = json[de_para]
          const moedaConvertida = (cotacao * parseFloat(moedaAValue)).toFixed(2)
          setMoedaBValue(moedaConvertida)
      });
    }

    const handleOnChange = (e)=>{
        setMoedaAValue(e.target.value)
    }

    return (
        <div className="conversor">
            <h2>{props.moedaA} to {props.moedaB}</h2>
            <input type="text" 
            onChange={handleOnChange}
            value={moedaAValue}
            />
            <button onClick={converter}>Converter</button>
            <h2>{moedaBValue}</h2>
        </div>
    )
}