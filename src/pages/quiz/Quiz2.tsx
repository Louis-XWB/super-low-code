import React, { FC, useEffect } from 'react'
import styles from './Quiz.module.scss'
import { Button, Card, Divider, Input, Typography } from 'antd'
import {
  CheckCircleOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  CodeFilled,
  DoubleRightOutlined,
} from '@ant-design/icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useNavigate } from 'react-router-dom'
import { useSafeState } from 'ahooks'

const { Title, Paragraph, Text } = Typography

const codeString = `int a = 103;\n\nint b = -3;`

const Quiz2: FC = () => {
  const nav = useNavigate()

  const [value1, setValue1] = React.useState<string>('')
  function handleValue1Change(event: React.ChangeEvent<HTMLInputElement>) {
    setValue1(event.target.value)
  }

  const [value2, setValue2] = React.useState<string>('')
  function handleValue2Change(event: React.ChangeEvent<HTMLInputElement>) {
    setValue2(event.target.value)
  }

  const [tipsText, setTipsText] = useSafeState('Wrong')
  const [tipsIcon, setTipsIcon] = useSafeState(<CloseCircleOutlined />)
  const [tipsColor, setTipsColor] = useSafeState('red')
  const [hasSubmit, setHasSubmit] = useSafeState(false)
  const [hasInputValue, setHasInputValue] = useSafeState(false)
  useEffect(() => {
    if (value1 && value1.length > 0 && value2 && value2.length > 0) {
      setHasInputValue(true)
    } else {
      setHasInputValue(false)
    }
  }, [value1, value2])

  function submitValue() {
    setHasSubmit(true)
    if ((value1 === 'int' || value1 === 'uint') && value2 === 'int') {
      setTipsIcon(<CheckCircleOutlined />)
    } else {
      setTipsIcon(<CloseCircleOutlined />)
    }

    if ((value1 === 'int' || value1 === 'uint') && value2 === 'int') {
      setTipsText('Correct')
    } else {
      setTipsText('Wrong')
    }

    if ((value1 === 'int' || value1 === 'uint') && value2 === 'int') {
      setTipsColor('green')
    } else {
      setTipsColor('red')
    }
  }

  function finishQuiz() {
    nav({
      pathname: '/roadmap',
      search: '?lesson=2',
    })
  }

  return (
    <div className={styles.container}>
      <h1>Signed Integers</h1>
      <Paragraph style={{ fontSize: 18 }}>
        Please fill in the integer variable declaration with <Text code>uint</Text> or{' '}
        <Text code>int</Text>.
      </Paragraph>
      <Card size="small" style={{ marginTop: 10, background: '#cfd9df' }}>
        <div>
          <Input style={{ width: 50 }} value={value1} onChange={handleValue1Change} /> b = 6;
        </div>
      </Card>

      <Card size="small" style={{ marginTop: 10, background: '#cfd9df' }}>
        <div>
          <Input style={{ width: 50 }} value={value2} onChange={handleValue2Change} /> c = -6;
        </div>
      </Card>

      {hasInputValue && (
        <Button
          type="primary"
          onClick={submitValue}
          style={{ width: 100, margin: '0 auto', marginTop: 10 }}
        >
          Submit
        </Button>
      )}

      <Divider />
      {hasSubmit && (
        <Button
          type="primary"
          size="large"
          icon={tipsIcon}
          style={{
            background: tipsColor,
            marginBottom: 50,
            height: 70,
            fontSize: 23,
            fontWeight: 'bold',
          }}
        >
          {tipsText}
        </Button>
      )}
      <Button type="primary" size="large" icon={<DoubleRightOutlined />} onClick={finishQuiz}>
        Finish
      </Button>
    </div>
  )
}

export default Quiz2
