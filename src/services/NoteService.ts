import NoteRepository from "../repositories/NoteRepository";
import { CreateNoteType } from '../types/notes';

class NoteService {
  async create (note: CreateNoteType) {
    return NoteRepository.create(note);
  }

  async find () { 
    return NoteRepository.find();
  }

  async findById (id: string) { 
    return NoteRepository.findOne(id);
  }
}

export default new NoteService();