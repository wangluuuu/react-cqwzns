import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Icon, Select, Input, Row, Col, Tabs } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <>
      <div>
        <Button type="primary" icon="search" size="large">
          Search
        </Button>

        <Icon type="qq" />

        <Select defaultValue="lucy">
          <Option value="javk">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>

        <Input
          placeholder="Enter your username"
          prefix="￥"
          suffix="RMB"
        ></Input>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <Row>
              <Col span={8}>
                <Row gutter={[, 16]}>
                  <Col span={8}>
                    <Button type="primary" icon="search">
                      查看
                    </Button>
                  </Col>
                  <Col span={8} offset={8}>
                    <Button icon="redo">重置</Button>
                  </Col>
                </Row>
                <Row gutter={[, 16]}>
                  <Col span={8}>
                    <Button type="primary" icon="search">
                      查看
                    </Button>
                  </Col>
                  <Col span={8} offset={8}>
                    <Button icon="redo">重置</Button>
                  </Col>
                </Row>
                <Row gutter={[, 16]}>
                  <Col span={8}>
                    <Button type="primary" icon="search">
                      查看
                    </Button>
                  </Col>
                  <Col span={8} offset={8}>
                    <Button icon="redo">重置</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  document.getElementById('container')
);
