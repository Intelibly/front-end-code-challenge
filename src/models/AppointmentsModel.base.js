import { types } from 'mobx-state-tree'

/**
 * AppointmentBase
 * auto generated base class for the model AppointmentModel.
 *
 * An Appointment
 */
export const AppointmentModelBase = types
  .model()
  .named('AppointmentBase')
  .props({
    __typename: types.optional(types.literal('Appointment'), 'Appointment'),
    bookedAt: types.union(types.undefined, types.null, types.string),
    end: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    start: types.union(types.undefined, types.null, types.string),
  })

export { AppointmentModelBase }
