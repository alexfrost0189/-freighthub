import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Search.css'
import { Shipment } from '../../types'
import { useState, useRef, useEffect } from 'react'
import { API } from '../../services'
import { Dropdown } from 'antd'
import { SearchMenu } from './SearchMenu'
import { useRouteMatch } from 'react-router-dom'

interface SearchState {
  data: Shipment[]
  isLoading: boolean
}

export const Search = () => {
  const timerId = useRef(0)
  const [value, setValue] = useState('')
  const [data, setData] = useState<SearchState>({
    data: [],
    isLoading: false
  })
  const match = useRouteMatch()

  useEffect(() => {
    if (value.length < 3) {
      if (data.data.length) {
        setData({
          data: [],
          isLoading: false
        })
      }
      return
    }

    setData(state => ({
      ...state,
      isLoading: true
    }))

    timerId.current = window.setTimeout(() => {
      API.getShipmentsByQuery(value).then(data => {
        setData({
          isLoading: false,
          data: data
        })
      })
    }, 500)
    return () => {
      clearTimeout(timerId.current)
    }
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    if (value.length) {
      setValue('')
    }
    // eslint-disable-next-line
  }, [match.params])

  return (
    <div className='Search'>
      <Dropdown overlay={<SearchMenu data={data.data} loading={data.isLoading} />}>
        <div className='Search__wrapper'>
          <Input
            placeholder='Enter ID to find shipment'
            prefix={<SearchOutlined />}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </Dropdown>
    </div>
  )
}
