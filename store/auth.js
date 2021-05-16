import { makeAutoObservable } from 'mobx'
import { createClient } from '@supabase/supabase-js'

class Auth {
  constructor() {
    makeAutoObservable(this)
  }

  supabase = null
  user = null

  init() {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_DB_URL,
      process.env.NEXT_PUBLIC_DB_PUBLIC
    )

    this.user = supabase.auth.session()
    this.supabase = supabase
  }

  get isInSession() {
    return Boolean(this.user)
  }
}

export const auth = new Auth()
