import { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import './App.css'
const conversion = require('./conversion.json')
const { Option } = Select

function App() {
  const [result, setResult] = useState(0)
  const [from, setFrom] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('COP')
  const runConversion = () => {
    setResult( from * conversion[toCurrency] / conversion[fromCurrency] )
  }
  useEffect(() => {
    runConversion()
  }, [from, fromCurrency, toCurrency])
  let currencies = []
  for(let currency in conversion) {
    currencies.push(currency)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <Form wrapperCol={{ span: 16 }} labelCol={{ span: 8 }}>
          <Form.Item label="From">
            <Input.Group compact>
              <InputNumber value={from} onChange={setFrom} style={{ width: '60%' }} />
              <Select value={fromCurrency} onChange={setFromCurrency} style={{ width: '40%' }} >
                {currencies.map(item => <Option key={item} value={item}>{item}</Option>)}
              </Select>
            </Input.Group>
          </Form.Item>
          <Form.Item label="To" name="to">
            <Input.Group>
              <div style={{ width: '60%', display: 'inline-block', backgroundColor: 'white', padding: '5px 12px' }}>
                {result.toLocaleString()}
              </div>
              <Select value={toCurrency} onChange={setToCurrency} style={{ width: '40%' }} >
                {currencies.map(item => <Option key={item} value={item}>{item}</Option>)}
              </Select>
            </Input.Group>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default App
