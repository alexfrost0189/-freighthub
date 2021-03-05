import { PageHeader, Skeleton, Alert } from 'antd'
import { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { API } from '../../../services'
import { Shipment } from '../../../types'
import { ShipmentDetails } from './ShipmentDetails'

interface MatchParams {
  id: string
}

interface ShipmentDetailsState {
  data: Shipment | null
  error: boolean
  isLoading: boolean
}

export const ShipmentDetailsPage = () => {
  const history = useHistory()
  const match = useRouteMatch<MatchParams>()
  const [data, setData] = useState<ShipmentDetailsState>({
    data: null,
    error: false,
    isLoading: false
  })

  useEffect(() => {
    setData(state => ({
      ...state,
      isLoading: true
    }))

    API.getShipmentById(match.params.id)
      .then(data => {
        setData({
          isLoading: false,
          error: false,
          data: data
        })
      })
      .catch(() => {
        setData({
          isLoading: false,
          data: null,
          error: true
        })
      })
  }, [match.params.id])

  const handleSubmitName = (name: string) => {
    const payload = { name: name }
    if (data.data) {
      API.updateShipmentById(data.data.id, payload)
        .then(data => {
          setData({
            isLoading: false,
            error: false,
            data: data
          })
        })
        .catch(() => {
          setData({
            isLoading: false,
            data: null,
            error: true
          })
        })
    }
  }

  return (
    <>
      <PageHeader
        className='PageHeader'
        onBack={() => history.push('/')}
        title={`Details`}
        subTitle={data.data ? `Shipment ${data.data.id} - ${data.data.name}` : ''}
      />
      {data.isLoading && <Skeleton />}
      {data.error && <Alert message='Failed to load shipment details' type='error' />}
      {data.data && <ShipmentDetails data={data.data} onSubmitName={handleSubmitName} />}
    </>
  )
}
