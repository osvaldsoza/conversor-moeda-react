import React, {useState} from 'react'

export default props => {
    const [moedaAValue, setMoedaAValue] = useState('0.00')
    const [moedaBValue, setMoedaBValue] = useState(0)

    const formatarMoeda = (moedaConvertida, cotacao) => {
        switch (props.moedaB) {
            case 'BRL':
                moedaConvertida = (cotacao * parseFloat(moedaAValue))
                    .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                return setMoedaBValue(moedaConvertida)
            case 'USD':
                moedaConvertida = (cotacao * parseFloat(moedaAValue))
                    .toLocaleString('usd', {style: 'currency', currency: 'USD'})
                return setMoedaBValue(moedaConvertida)
            case 'CAD':
                moedaConvertida = (cotacao * parseFloat(moedaAValue))
                    .toLocaleString('usd', {style: 'currency', currency: 'usd'})
                return setMoedaBValue(moedaConvertida)
            case 'EUR':
                moedaConvertida = (cotacao * parseFloat(moedaAValue))
                    .toLocaleString('eur', {style: 'currency', currency: 'eur'})
                return setMoedaBValue(moedaConvertida)
            default:
                return setMoedaBValue(moedaConvertida)
        }
    }

    const converter = async () => {
        const de_para = `${props.moedaA}_${props.moedaB}`;
        const uri = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=8760e82836b16b39ea54`;
        const dados = fetch(uri)
            .then(res => {
                return res.json();
            })
        await dados.then(json => {
            const cotacao = json[de_para]
            let moedaConvertida = 0.00
            formatarMoeda(moedaConvertida, cotacao)
        });
    }

    const handleOnChange = (e) => {
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