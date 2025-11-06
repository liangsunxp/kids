import { Card, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // 调用后端 API
    fetch('http://localhost:8102/')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={16}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={11928}
              precision={0}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="日活用户"
              value={9280}
              precision={0}
              valueStyle={{ color: '#52c41a' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总销售额"
              value={93124568}
              precision={2}
              valueStyle={{ color: '#faad14' }}
              prefix="¥"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="访问量"
              value={78000}
              precision={0}
              valueStyle={{ color: '#f5222d' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: '24px' }} title="API 测试">
        <p>后端响应: {data ? JSON.stringify(data) : '加载中...'}</p>
      </Card>
    </div>
  );
}

