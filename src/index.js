import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Button,
  Icon,
  Select,
  Input,
  Row,
  Col,
  Tabs,
  Table,
  List,
  message,
  Modal,
} from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;

const Demo = () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record, index) => {
        console.log(record);
        return (
          <Button
            type="link"
            onClick={() => {
              Modal.info({
                title: '测试',
                content: '当前用户名称:' + record.name,
              });
            }}
          >
            查看
          </Button>
        );
      },
    },
  ];

  const [dataSource, setdataSource] = React.useState([]);
  const [dataList, setdataList] = React.useState([]);

  //表格方法
  const onAddTab = React.useCallback(() => {
    if (dataSource.length >= 5) {
      message.warning('最多新增五条！');
      return;
    }
    const data = {
      key: '',
      name: '胡彦斌' + (dataSource.length + 1),
      age: 32,
      address: '西湖区湖底公园1号',
    };
    const a =
      dataSource.length === 0
        ? (data.key = '1')
        : (data.key = String(
            Number(dataSource[dataSource.length - 1].key) + 1
          ));
    const newdata = [].concat(dataSource);
    newdata.push(data);
    setdataSource(newdata);
  }, [dataSource]);

  const onDelTab = React.useCallback(() => {
    const newdata = [].concat(dataSource);
    newdata.pop();
    setdataSource(newdata);
  }, [dataSource]);

  //列表方法
  const onAddList = React.useCallback(() => {
    if (dataList.length >= 5) {
      message.warning('最多新增五条！');
      return;
    }
    const newdata = [].concat(dataList);
    newdata.push({
      title: 'Ant Design Title' + (dataList.length + 1),
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    });
    setdataList(newdata);
  }, [dataList]);

  const onDelList = React.useCallback(() => {
    const newdata = [].concat(dataList);
    newdata.pop();
    setdataList(newdata);
  }, [dataList]);
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

        <Tabs defaultActiveKey="2">
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
            <Row>
              <Col span={4}>
                <Button icon="plus" onClick={onAddTab}>
                  新增
                </Button>
              </Col>
              <Col>
                <Button icon="minus" onClick={onDelTab}>
                  删除
                </Button>
              </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />;
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Row>
              <Col span={4}>
                <Button icon="plus" onClick={onAddList}>
                  新增
                </Button>
              </Col>
              <Col>
                <Button icon="minus" onClick={onDelList}>
                  删除
                </Button>
              </Col>
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={dataList}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="#">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
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
