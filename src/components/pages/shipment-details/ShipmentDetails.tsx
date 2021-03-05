import { Shipment } from '../../../types'
import { Descriptions, Button, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ChangeEvent, useState } from 'react'
import './ShipmentDetails.css'

interface ShipmentDetailsProps {
  data: Shipment
  onSubmitName: (name: string) => void
}

export const ShipmentDetails = ({ data, onSubmitName }: ShipmentDetailsProps) => {
  const [name, setValue] = useState(data.name)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target!.value)
  }

  const handleSubmitName = () => {
    onSubmitName(name)
  }

  return (
    <Descriptions
      bordered
      className='ShipementDetails'
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label='ID:'>{data.id}</Descriptions.Item>
      <Descriptions.Item label='Name:'>
        <Input.Group className='InputGroup'>
          <Input value={name} onChange={handleChangeName} />
          {name !== data.name && (
            <Button onClick={handleSubmitName} type='link' icon={<EditOutlined />} />
          )}
        </Input.Group>
      </Descriptions.Item>
      <Descriptions.Item label='Status:'>{data.status}</Descriptions.Item>
      <Descriptions.Item label='Total:'>{data.total}</Descriptions.Item>
      <Descriptions.Item label='Type:'>{data.type}</Descriptions.Item>
      <Descriptions.Item label='User ID:'>{data.userId}</Descriptions.Item>
      <Descriptions.Item label='Mode:'>{data.mode}</Descriptions.Item>
      <Descriptions.Item label='Origin:'>{data.origin}</Descriptions.Item>
      <Descriptions.Item label='Destination:'>{data.destination}</Descriptions.Item>
      <Descriptions.Item label='Cargo:'>
        {data.cargo.map((cargo, i) => (
          <p key={i}>
            {i + 1}) Type: {cargo.type}, Description: {cargo.description}, Volume: {cargo.volume}
          </p>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label='Services:'>
        {data.services.map(service => (
          <p key={service.type}>{service.type}</p>
        ))}
      </Descriptions.Item>
    </Descriptions>
  )
}
