export interface Shipment {
  id: string
  name: string
  mode: string
  type: string
  destination: string
  origin: string
  total: string
  status: ShipmentStatus
  userId: string
  services: ShipmentService[]  
  cargo: ShipmentCargo[]
}

export type ShipmentStatus = 'ACTIVE' | 'COMPLETED' | 'NEW'

export interface ShipmentCargo {
  type: string
  description: string
  volume: string
}

export interface ShipmentService {
  type: string
  value?: string
}
