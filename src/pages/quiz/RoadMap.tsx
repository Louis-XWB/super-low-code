import React, { FC, useEffect } from 'react'
import styles from './RoadMap.module.scss'
import { Card, Space } from 'antd'
import { CheckOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useNavigate, useSearchParams } from 'react-router-dom'

const RoadMap: FC = () => {
  const nav = useNavigate()
  function onClickInt() {
    nav('/concept')
  }

  const [searchParams] = useSearchParams()

  const [lesson, setLesson] = React.useState<string>('')
  useEffect(() => {
    const lessonValue = searchParams?.get('lesson') || ''
    setLesson(lessonValue)
  }, [searchParams])

  return (
    <div className={styles.container}>
      <Space direction="vertical" size={16}>
        <Card size="small" className={styles.card} onClick={onClickInt}>
          <p style={{ fontSize: 25, fontWeight: 'bold' }}>1.1 Integer</p>
          <p>Variable type: integer</p>
          {lesson === '2' || lesson === '3' ? (
            <div className={styles.status}>
              <p style={{ color: 'green', fontSize: 18 }}>learned</p>
              <CheckOutlined style={{ color: 'green', fontSize: 16 }} />
            </div>
          ) : (
            <div className={styles.status}>
              <p style={{ color: 'blue', fontSize: 18 }}>unlearned</p>
              <DoubleRightOutlined style={{ color: 'blue', fontSize: 16 }} />
            </div>
          )}
        </Card>
        <Card size="small" className={styles.card}>
          <p style={{ fontSize: 25, fontWeight: 'bold' }}>2.1 memory</p>
          <p>Data Location - memory</p>
          {lesson === '3' ? (
            <div className={styles.status}>
              <p style={{ color: 'green', fontSize: 18 }}>learned</p>
              <CheckOutlined style={{ color: 'green', fontSize: 16 }} />
            </div>
          ) : (
            <div className={styles.status}>
              <p style={{ color: 'blue', fontSize: 18 }}>unlearned</p>
              <DoubleRightOutlined style={{ color: 'blue', fontSize: 16 }} />
            </div>
          )}
        </Card>
      </Space>
    </div>
  )
}

export default RoadMap
