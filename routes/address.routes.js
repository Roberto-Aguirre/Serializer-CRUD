import { Router } from "express";
import { createAddress, deleteAddress, getAddress, updateAddress } from "../controller/address.controller.js";

const router = Router()

router.get('/contacts/:id/address',getAddress);
router.post('/contacts/:id/address',createAddress);
router.put('/contacts/:id/address',updateAddress);
router.delete('/contacts/:id/address',deleteAddress);

export default router;