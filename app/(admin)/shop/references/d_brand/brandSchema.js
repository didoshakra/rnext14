// import { bytesToMb } from "@/helper";
import * as yup from "yup"

export const brandSchema = yup.object({
  name: yup.string().min(3).max(30).required().typeError("Повинно бути > 3 і < 30 символів"),
})
