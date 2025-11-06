import { Card, Table, Button, Space, Form, Input, Row, Col } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';

const columns = [
  {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space>
        <Button type="primary" size="small" icon={<EditOutlined />}>
          编辑
        </Button>
        <Button danger size="small" icon={<DeleteOutlined />}>
          删除
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
  },
];

export default function Users() {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState(data);

  const handleSearch = () => {
    console.log('搜索:', form.getFieldsValue());
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card
        title="用户列表"
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            新增用户
          </Button>
        }
      >
        <Form form={form} layout="inline" style={{ marginBottom: 16 }}>
          <Form.Item name="username" label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="email" label="邮箱">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>
              搜索
            </Button>
          </Form.Item>
        </Form>

        <Table columns={columns} dataSource={tableData} rowKey="id" />
      </Card>
    </div>
  );
}

