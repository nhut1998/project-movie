import React,{useCallback,useEffect} from 'react'
import ListUser from '../conponent/ListUser'
import { fetchInfoListUser,fetchDeleteUser } from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
import Loading from '../../../../Loading/component/Loading'

export default function ListUserContainer() {
  const dispatch = useDispatch()

  const listInfoUser = useSelector(state=>state.infoUser.userList)
  console.log(listInfoUser)

  const searchUser = useCallback((tuKhoa) => {
        dispatch(fetchInfoListUser(tuKhoa ||''))
      },
      [dispatch],
  )


const remove = useCallback(
    (xoa) => {
     dispatch(fetchDeleteUser(xoa))
     dispatch(fetchInfoListUser())
    },
    [dispatch],
)
useEffect(() => {
    dispatch(fetchInfoListUser())
}, [dispatch])
    return (
        <>
           <ListUser listInfoUser={listInfoUser} remove={remove} searchUser={searchUser}/> 
        </>
    )
}
