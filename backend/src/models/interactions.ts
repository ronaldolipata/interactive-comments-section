import { Schema, model, Model } from 'mongoose'

export enum InteractionType {
  Comment = 'comment',
  Upvote = 'upvote',
  Downvote = 'downvote'
}

export type Interaction = {
  type: InteractionType
  content: string
  upvotes: number
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
  upvotes: {
    type: Number,
    required: false,
    default: 0
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
