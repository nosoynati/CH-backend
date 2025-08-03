import { Router } from "express";
const router = Router()

// endpoints
router.get("/", async(req, res) => {
  try {
    // res.status(200).send("hola a todos!")
    res.status(200).json({message: "hola a todoooos"})
  }catch(e){
    res.status(400).json({ error: error.message})
  }
})
export default router;