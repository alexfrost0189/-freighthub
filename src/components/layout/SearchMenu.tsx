import { Menu, Skeleton } from 'antd'
import { Shipment } from '../../types'
import { Link } from 'react-router-dom'

interface SearchMenuProps {
  data: Shipment[]
  loading: boolean
}

export const SearchMenu = ({ data, loading }: SearchMenuProps) => (
  <Menu>
    {loading ? (
      <Skeleton active={true} />
    ) : (
      data.map(item => (
        <Menu.Item key={item.id}>
          <Link key={item.id} to={`/${item.id}`}>{`${item.id} - ${item.name}`}</Link>
        </Menu.Item>
      ))
    )}
  </Menu>
)
