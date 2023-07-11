import React, { FC } from 'react'
import styles from './Quiz.module.scss'
import { Button, Card, Divider, Typography } from 'antd'
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

const { Title, Paragraph, Text } = Typography

const codeString = `int a = 103;\n\nint b = -3;`

const Quiz: FC = () => {
  const nav = useNavigate()
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1)

  const color1 = selectedIndex === 0 ? '#ff9a9e' : '#ffffff'
  const color2 = selectedIndex === 1 ? '#ff9a9e' : '#ffffff'
  const color3 = selectedIndex === 2 ? '#84fab0' : '#ffffff'

  let tipsColor = 'green'
  if (selectedIndex === 0 || selectedIndex === 1) {
    tipsColor = 'red'
  }

  let tipsText = 'Correct'
  if (selectedIndex === 0 || selectedIndex === 1) {
    tipsText = 'Wrong'
  }

  let tipsIcon = <CheckCircleOutlined />
  if (selectedIndex === 0 || selectedIndex === 1) {
    tipsIcon = <CloseCircleOutlined />
  }

  return (
    <div className={styles.container}>
      <h1>Signed Integers</h1>
      <Paragraph style={{ fontSize: 18 }}>Which one is correct?</Paragraph>
      <Card
        size="small"
        style={{ marginTop: 10, background: color1 }}
        onClick={() => setSelectedIndex(0)}
      >
        <div>in a = 6;</div>
      </Card>
      <Card
        size="small"
        style={{ marginTop: 10, background: color2 }}
        onClick={() => setSelectedIndex(1)}
      >
        <div>uint b = -9;</div>
      </Card>
      <Card
        size="small"
        style={{ marginTop: 10, background: color3 }}
        onClick={() => setSelectedIndex(2)}
      >
        <div>int c = 7;</div>
      </Card>
      <Divider />
      {selectedIndex >= 0 && (
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
      <Button
        type="primary"
        size="large"
        icon={<DoubleRightOutlined />}
        onClick={() => nav('/concept2')}
      >
        Continue
      </Button>
    </div>
  )
}

export default Quiz
