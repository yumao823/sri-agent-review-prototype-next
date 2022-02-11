import { createAction } from '@reduxjs/toolkit'

export const setUser: any = createAction<Record<string, unknown>>('session/setUser')

export const signOut: any = createAction('session/signOut')
