import { Response, Request } from "express"
import { createClient } from '@supabase/supabase-js'
require("dotenv").config();

const supabaseUrl: string = 'https://pajskhhwbrarkwprcttq.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIwODMxODY3LCJleHAiOjE5MzY0MDc4Njd9.hG_pLyCvzyIgw9L1uPgsaSdP8gtCrx9LYayqNPlh2yo'
const supabase = createClient(supabaseUrl, supabaseKey)

export const todosPacientes = async (req: Request, res: Response): Promise<void> => {
  
  try {
    let actived = await supabase
      .from("Pacientes")
      .select("*")

      res.send(actived)
  } catch (e) {
    alert('prueba')
  }
}