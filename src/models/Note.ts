import mongoose, { Document, model } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "./User";


@Schema()
export class Note {
  _id!: string;
  
  @Prop({ required: true }) 
  content!: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }) 
  user!: User;

  @Prop({ required: true }) 
  createDate!: Date;

  @Prop({ required: true }) 
  editDate!: Date;
}

export type NoteDocument = Note & Document;
export const NoteSchema = SchemaFactory.createForClass(Note);

export const NoteModel = model<NoteDocument>(Note.name, NoteSchema);