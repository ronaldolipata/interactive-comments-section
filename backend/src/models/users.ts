import { Model, model, Schema } from 'mongoose'

export type User = {
  username: string
  password: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<User, Model<User>, User>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
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

userSchema.pre('updateOne', async function (next) {
  this.set({ updatedAt: Date.now() })
  next()
})

export default model('User', userSchema)
