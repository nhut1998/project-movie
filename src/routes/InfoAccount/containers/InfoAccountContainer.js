import React, { useEffect, useCallback } from 'react'
import InfoAccount from '../component/InfoAccount'
import { getAccount } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import OnchangePassword from '../component/OnchangePassword'
import TicketInfo from '../component/TicketInfo'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../assets/infoAccount.scss'
import { useHistory, withRouter } from 'react-router'


 function InfoAccountContainer({location}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const updateInfo = useSelector(state => state.user.credential)
    const updateInfo1 = useSelector(state => state.account.accountList)
    console.log(updateInfo)


    useEffect(() => {
        dispatch(getAccount(updateInfo.taiKhoan))
    }, [dispatch, updateInfo.taiKhoan])

    const { TabPane } = Tabs;

    
    const hdCallback = useCallback(
        (activeKey) => {
           history.push('/account'+ activeKey)
        },
        [history],
    )



    return (
        <div className='combination'>
            <div className='combinationItem'>
                <Tabs defaultActiveKey="1" onChange={hdCallback} activeKey={location.hash || '#thongtintaikhoan'}>
                    <TabPane tab="THÔNG TIN TÀI KHOẢN" key="#thongtintaikhoan">
                    <InfoAccount updateInfo={updateInfo}
                        updateInfo1={updateInfo1}
                    />
                    </TabPane>
                    <TabPane tab="ĐỔI MẬT KHẨU" key="#doimatkhau">
                    <OnchangePassword
                        updateInfo={updateInfo}
                        updateInfo1={updateInfo1}
                    />
                    </TabPane>
                    <TabPane tab="DANH SÁCH ĐẶT VÉ" key="#danhsachdatve">
                    <TicketInfo
                        inforTicket={updateInfo1}
                    />
                    </TabPane>
                </Tabs>,
            </div>
      
        </div>

    )
}
export default withRouter(InfoAccountContainer)