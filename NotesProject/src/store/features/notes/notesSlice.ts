import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Note } from "../../../types/Note";

interface NotesStateType {
  notes: Note[];
}
  const initialState: NotesStateType = {
  notes: [{id:'1',title:'v',content:'ff',category:Category.Work, createdAt:"a"}],
};

export const NotesSlice = createSlice({
  initialState,
  name: "notes",
  reducers: {
    addNote: (state, action: PayloadAction<{ note: Note }>) => {
      state.notes.push(action.payload.note);
    },
    updateNote: (state, action: PayloadAction<{ note: Note }>) => {
      const idx = state.notes.findIndex((n) => n.id === action.payload.note.id);
      state.notes.splice(idx, 1, action.payload.note);
    },
    deleteNote: (state, action: PayloadAction<{ noteId: string }>) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload.noteId);
    },
  },
});

export const { addNote, deleteNote, updateNote } = NotesSlice.actions;
export default NotesSlice.reducer;
