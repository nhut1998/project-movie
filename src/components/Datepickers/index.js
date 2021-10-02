import React, {  useCallback, useEffect, useState } from 'react'
import {  DatePicker as AntDatePicker} from 'antd';
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/ja_JP'
import _ from 'lodash'


export const  DatePicker=({ name, value, cb, dateFormat, placeHolder })=> {
  
    const [date, setDate] = useState('')

    const hdChange = useCallback((date, dateString) => {
        cb({ name, value: dateString })
        setDate(date)
    }, [name, cb])

    const formatDate = useCallback(
        () => {
               let date = 'YYYY/MM/DD'
        switch (dateFormat) {
            case 'yyyy/MM/dd':
                break
            case 'MM/dd':
                date = 'MM/DD'
                break
            case 'yyyy/MM':
                date = 'YYYY/MM'
                break
            case 'dd/MM/yyyy':
                date = 'DD/MM/YYYY'
                break
            default: break
        }
        return date
        },
        [dateFormat],
    )

    useEffect(() => {
        if (!_.isEmpty(value)) {
            setDate(moment(value, formatDate(dateFormat)))
        } else {
            setDate(null)
        }
    }, [dateFormat, formatDate, value])


    return (

        <AntDatePicker
            // style={{ width: '100%' }}
            locale={locale}
            format={formatDate(dateFormat)}
            onChange={hdChange}
            value={date}
            placeholder={placeHolder || 'yyyy/mm/dd'}
        />

    )
}


DatePicker.defaultProps = {
    name: 'date',
    value: '',
    cb: () => { },
    dateFormat: 'dd/MM/yyyy',
    placeHolder: ''
}

