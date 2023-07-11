import React, { FC } from 'react'
import styles from './Concept2.module.scss'
import { Button, Divider, Typography } from 'antd'
import { CodeFilled } from '@ant-design/icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph, Text } = Typography

const codeString = `uint a = 103; // correct \n\nuint b = -3; //wrong`

const Concept2: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <h1>Unsigned Integers</h1>
      <Paragraph style={{ fontSize: 18 }}>
        <Text style={{ fontSize: 18 }} code>
          uint
        </Text>{' '}
        could only be positive, which means you cannot have any negative numbers as the value of
        <Text style={{ fontSize: 18 }} code>
          uint
        </Text>
        .{' '}
      </Paragraph>
      <div>
        <SyntaxHighlighter
          language="solidity"
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
      <Button type="primary" size="large" icon={<CodeFilled />} onClick={() => nav('/quiz2')}>
        Practice
      </Button>
    </div>
  )
}

export default Concept2
