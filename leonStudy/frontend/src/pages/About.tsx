import { Card, Descriptions, Space, Tag } from 'antd';

export default function About() {
  return (
    <div style={{ padding: '24px' }}>
      <Card title="项目信息">
        <Descriptions bordered column={1}>
          <Descriptions.Item label="项目名称">
            Leon Study
          </Descriptions.Item>
          <Descriptions.Item label="版本">
            1.0.0
          </Descriptions.Item>
          <Descriptions.Item label="描述">
            前后端分离学习项目
          </Descriptions.Item>
          <Descriptions.Item label="技术栈">
            <Space>
              <Tag color="blue">React 18</Tag>
              <Tag color="blue">Ant Design Pro</Tag>
              <Tag color="cyan">FastAPI</Tag>
              <Tag color="cyan">Python</Tag>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item label="后端 API">
            http://localhost:8102
          </Descriptions.Item>
          <Descriptions.Item label="前端应用">
            http://localhost:3000
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

