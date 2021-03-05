import { Shipment, ShipmentStatus } from '../../../types'
import { Table, Tag } from 'antd'
import { Link } from 'react-router-dom'

interface ShipmentTableProps {
  data: Shipment[]
  loading: boolean
}

const statusWeights = { NEW: 1, ACTIVE: 2, COMPLETED: 3 }
const statusColors = { NEW: 'gold', ACTIVE: 'cyan', COMPLETED: 'green' }

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a: Shipment, b: Shipment) => `${a.name}`.localeCompare(b.name),
    render: (value: string, item: Shipment) => <Link to={`/${item.id}`}>{value}</Link>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: Shipment, b: Shipment) => `${a.name}`.localeCompare(b.name),
    render: (value: string, item: Shipment) => <Link to={`/${item.id}`}>{value}</Link>
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin',
    sorter: (a: Shipment, b: Shipment) => `${a.name}`.localeCompare(b.name)
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
    sorter: (a: Shipment, b: Shipment) => `${a.name}`.localeCompare(b.name)
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: ShipmentStatus) => (
      <Tag color={statusColors[status]} key={status}>
        {status}
      </Tag>
    ),
    sorter: (a: Shipment, b: Shipment) => statusWeights[a.status] - statusWeights[b.status]
  }
]

export const ShipmentsTable = ({ data, loading }: ShipmentTableProps) => {
  return (
    <div className='ShipmentsTable'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 20 }}
        loading={loading}
        rowKey={({ id }) => id}
      />
    </div>
  )
}
