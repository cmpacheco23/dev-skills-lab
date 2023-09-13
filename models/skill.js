import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  proficiency: String,
  learned: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}