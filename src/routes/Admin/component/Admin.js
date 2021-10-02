import React from 'react'
import ListAdminMovie from 'routes/AdminMovie/modules/ListAdminMovie';
import ListUser from 'routes/UserManagement/modules/ListUser';
import { Tabs } from 'antd';
import '../assets/admin.scss'

export default function Admin() {
    const { TabPane } = Tabs;
    return (
        <div className='admin'>
        <div className='item_admin'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="QUẢN LÝ PHIM" key="1">
                 <ListAdminMovie/>
                </TabPane>
                <TabPane tab="QUẢN LÝ NGƯỜI DÙNG" key="2">
                    <ListUser/>
                </TabPane>
               
            </Tabs>,
        </div>
  
    </div>
    )
}

