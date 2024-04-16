import { Row, Col } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <Row style={{border:'2px solid red'}} gutter={[16,300]}>
        <Col span={18} push={6} style={{border:'2px solid red'}}>Header</Col>
        <Col span={6}  pull={18} style={{border:'2px solid red'}}>Sidebar</Col>
        <Col span={18} push={6}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default AdminLayout;
