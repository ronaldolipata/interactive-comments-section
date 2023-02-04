import { Schema, model, Model } from 'mongoose'

enum InteractionType {
  Comment = 'comment',
  Upvote = 'upvote',
  Downvote = 'downvote'
}

export type Interaction = {
  type: InteractionType
  content: string
  createdAt: Date
  updatedAt: Date
}

const interactionSchema = new Schema<
  Interaction,
  Model<Interaction>,
  Interaction
>({
  type: {
    required: true
  },
  content: {
    required: true
  },
  createdAt: {
    default: () => Date.now()
  },
  updatedAt: {
    default: () => Date.now()
  }
})

interactionSchema.pre('updateOne', async function (next) {
  this.set({ updatedAt: Date.now() })
  next()
})

export default model('Interaction', interactionSchema)
