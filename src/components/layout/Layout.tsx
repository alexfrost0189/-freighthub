import { Layout } from 'antd'
import { FC } from 'react'
import { Search } from './Search'
import './Layout.css'

const { Header, Content } = Layout

export const GeneralLayout: FC = ({ children }) => {
  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Search />
      </Header>
      <Content className='Content'>{children}</Content>
    </Layout>
  )
}
