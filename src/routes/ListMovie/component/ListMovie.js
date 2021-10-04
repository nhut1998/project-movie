import React from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../assets/listMovie.scss'
import {useHistory} from 'react-router-dom'


export default function ListMovie({ xemThem, movieListNext }) {
    const { TabPane } = Tabs;
    function callback(key) {
        xemThem(key)
       
    }
    const history = useHistory()
    return (
        <>
            <div className='page_tabs' name='ListMovie'>    
                <Tabs defaultActiveKey="2" onChange={callback} className='nav_tabs'>
                    <TabPane tab="ĐANG CHIẾU" key="2">
                        <div className='items row'>
                            {
                                movieListNext.items?.map((item, index) => (
                                    <div key={index} className='items_tabs col-xl-3 col-lg-3 col-md-4 col-6 '>

                                        <div className='items_picture'>
                                            <div className='picture'>
                                                <img src={item.hinhAnh} alt=""></img>                           
                                                <h5>{item.tenPhim}</h5>
                                                 <button className='btn-picture'onClick={()=> history.push(`/${item.maPhim}/chitietphim`)}>Chi tiết</button>
                                                 <div className='overlow'></div>
                                            </div>                                 
                                        </div>                               
                                    </div>
                                ))
                            }
                        </div>
                    </TabPane>
                    <TabPane tab="SẮP CHIẾU" key="3">
                    <div className='items row'>
                            {
                                movieListNext.items?.map((item, index) => (
                                    <div key={index} className='items_tabs col-xl-3 col-lg-3 col-md-4 col-6 '>

                                        <div className=' items_picture'>
                                            <div className='picture'>
                                                <img src={item.hinhAnh} alt=""></img>
                                                <h5>{item.tenPhim}</h5>
                                                <button className='btn-picture'onClick={()=> history.push(`/${item.maPhim}/chitietphim`)}>Chi tiết</button>
                                                 <div className='overlow'></div> 

                                            </div>
                                       
                                        </div>
                                       
                                    </div>
                                ))
                            }
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            

            
        </>
    )
}
