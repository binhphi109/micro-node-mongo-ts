import { Router } from 'express';
import { LoginAccess } from '../policies/auth';
import { asyncErrorHandler } from '../core/middlewares/errorHandler';
import { UserDto } from './../models/User';
import NoteService from '../services/NoteService.ts';

const router = Router();
  
router.get('', LoginAccess, asyncErrorHandler(async function (req, res) {
  const notes = await NoteService.find();

  res.json(notes);
}));

router.post('', LoginAccess, asyncErrorHandler(async function (req, res) {
  const note = req.body;
  const user = req.user as UserDto;

  const createdNote = await NoteService.create({
    ...note,
    userId: user.id
  });

  res.json(createdNote);

}));

router.get('/:noteId', LoginAccess, asyncErrorHandler(async function (req, res) {
  const noteId = req.params.noteId;
  
  const note = await NoteService.findById(noteId);
  
  res.json(note);

}));

export default router;
