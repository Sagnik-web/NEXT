import {z} from "zod"

const formDataZod = z.object({
    username:z.string().max(10).nullable(),
    email:z.string().email().nullable(),
    password:z.string().min(6),
    address:z.string()
})

export default formDataZod
