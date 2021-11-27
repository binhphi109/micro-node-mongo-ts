import { Note, NoteModel } from "../models/Note";
import { User } from "../models/User";
import { CreateNoteType } from "../types/notes";

interface INoteRepository {
  create(note: CreateNoteType): Promise<Note>;
  find(): Promise<Note[]>;
  findOne(is: string): Promise<Note | null>;
}

class NoteRepository implements INoteRepository {
  create(note: CreateNoteType): Promise<Note> {
    return NoteModel.create(note);
  }

  find(): Promise<Note[]> {
    return NoteModel.find().exec();
  }

  findOne(id: string): Promise<Note | null> {
    return NoteModel.findOne({}).exec();
  }
}

export default new NoteRepository();
