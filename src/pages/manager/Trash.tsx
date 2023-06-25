import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import styles from './Common.module.scss'
import { Typography, Empty, Table, Tag, Space, Button, Modal } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import { StarOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal

const defaultQuestionData = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '6月24日 10:00',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '6月26日 11:00',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createdAt: '6月27日 15:00',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStar: true,
    answerCount: 15,
    createdAt: '6月28日 12:00',
  },
]

const Trash: FC = () => {
  useTitle('SuperLowCode - 回收站')

  const [questionList, setQuestionList] = useState(defaultQuestionData)

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (isPublished: boolean) =>
        isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>,
    },
    {
      title: '是否星标',
      dataIndex: 'isStar',
      key: 'isStar',
      render: (isStar: boolean) =>
        isStar ? (
          <StarOutlined style={{ color: '#fadb14' }} />
        ) : (
          <StarOutlined style={{ color: 'grey' }} />
        ),
    },
    {
      title: '答卷数量',
      dataIndex: 'answerCount',
      key: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ]

  function del() {
    confirm({
      title: '确定要删除吗?',
      content: '删除后无法恢复',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const TableElement = (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" disabled={selectedRowKeys.length === 0}>
          恢复
        </Button>
        <Button danger onClick={() => del()} disabled={selectedRowKeys.length === 0}>
          彻底删除
        </Button>
      </Space>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedRowKeys(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>

      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElement}
      </div>

      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Trash
