import React, { FC } from 'react'
import styles from './Concept.module.scss'
import { Button, Divider, Typography } from 'antd'
import { CodeFilled } from '@ant-design/icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph, Text } = Typography

const codeString = `int a = 103;\n\nint b = -3;`

const Concept: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <h1>Concept</h1>
      <Paragraph style={{ fontSize: 18 }}>
        In this lesson, we will learn another basic variable type:
        <Text style={{ fontSize: 18 }} strong>
          integer
        </Text>
        .{' '}
      </Paragraph>
      <Paragraph style={{ fontSize: 18 }}>
        There’re two types of integer variables in Solidity: signed integer <Text code>int</Text>{' '}
        and unsigned integer
        <Text code>uint</Text>.
      </Paragraph>
      {/* Unsigned Integers are positive whole numbers. */}
      <Paragraph style={{ fontSize: 18 }}>
        Signed Integers are positive or negative whole numbers.
        <Text code>uint</Text>.
      </Paragraph>
      <div>
        <SyntaxHighlighter
          language="java"
          style={darcula}
          customStyle={{
            borderRadius: '5px',
            backgroundColor: '#001E3C',
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <Divider />
      <Button type="primary" size="large" icon={<CodeFilled />} onClick={() => nav('/quiz')}>
        Practice
      </Button>
    </div>
  )
}

export default Concept
