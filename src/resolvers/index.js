import UserResolvers from './users'
import testimonial from './testimonial'
import dateTimeScalar from './CustomScalar'

export default {
  ...UserResolvers.TYPES,
  ...testimonial.TYPES,
  DateTime: dateTimeScalar,
  Query: {
    ...UserResolvers.QUERIES,
    ...testimonial.QUERIES,
  },
  Mutation: {
    ...UserResolvers.MUTATIONS,
    ...testimonial.MUTATIONS,
  },
  Subscription: {
  }
}