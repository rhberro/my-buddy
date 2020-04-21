import React from 'react'

import RoutesProvider from './source/components/providers/RoutesProvider'
import StoreProvider from './source/components/providers/StoreProvider'

export default function () {
  return (
    <StoreProvider>
      <RoutesProvider />
    </StoreProvider>
  )
}
