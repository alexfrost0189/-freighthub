import { API } from '../../../services'
import React, { useEffect, useState } from 'react'
import { Shipment } from '../../../types'
import { ShipmentsTable } from './ShipmentsTable'
import { PageHeader } from 'antd'

interface ShipmentsState {
  data: Shipment[]
  error: boolean
  isLoading: boolean
}

export const ShipmentsPage = () => {
  const [data, setData] = useState<ShipmentsState>({
    data: [],
    error: false,
    isLoading: false
  })

  useEffect(() => {
    setData(state => ({
      ...state,
      isLoading: true
    }))

    API.getShipments()
      .then(data => {
        setData(() => ({
          isLoading: false,
          data: data,
          error: false
        }))
      })
      .catch(() => {
        setData(() => ({
          isLoading: false,
          data: [],
          error: true
        }))
      })
  }, [])

  return (
    <>
      <PageHeader title={`Shipments`} />
      <ShipmentsTable data={data.data} loading={data.isLoading} />
    </>
  )
}
