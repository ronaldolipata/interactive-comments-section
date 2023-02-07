import { Schema, model, Model } from 'mongoose'

export enum InteractionType {
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
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
})

interactionSchema.pre('updateOne', async function (next) {
  this.set({ updatedAt: Date.now() })
  next()
})

export default model('Interaction', interactionSchema)
