import { API_URL } from '../constants'
import { Shipment } from '../types'

export const API = {
  getShipments: async () => {
    const response = await fetch(`${API_URL}/shipments`)
    const result = await response.json()
    return result
  },
  getShipmentsByQuery: async (query: string) => {
    const response = await fetch(`${API_URL}/shipments?q=${query}`)
    const result = await response.json()
    return result
  },
  getShipmentById: async (id: string) => {
    const response = await fetch(`${API_URL}/shipments/${id}`)
    const result = await response.json()
    return result
  },
  updateShipmentById: async (id: string, payload: Partial<Shipment> = {}) => {
    const response = await fetch(`${API_URL}/shipments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const result = await response.json()
    return result
  }
}
