// import { ExchangeType } from 'entities/exchange/model/exchangeType'
// import { ShiftStatus } from 'entities/shift/types'

// export type ComputedStatuses = Record<
//   'include' | 'exclude',
//   ShiftStatus[] | undefined
// >

// export const computeStatuses = (
//   exchangeType: ExchangeType['value'],
//   statusIn: ShiftStatus[],
// ): ComputedStatuses => {
//   if (exchangeType === 'available') {
//     return {
//       include: ['available'],
//       exclude: undefined,
//     }
//   }

//   if (exchangeType === 'own') {
//     return {
//       include: statusIn.length ? statusIn : undefined,
//       exclude: statusIn.length ? undefined : ['draft', 'available'],
//     }
//   }

//   if (exchangeType === 'active') {
//     return {
//       include: statusIn.length ? statusIn : ['draft', 'available', 'active'],
//       exclude: undefined,
//     }
//   }

//   if (exchangeType === 'completed') {
//     return {
//       include: statusIn.length ? statusIn : undefined,
//       exclude: statusIn.length ? undefined : ['draft', 'available', 'active'],
//     }
//   }

//   return {
//     include: undefined,
//     exclude: undefined,
//   }
// }
