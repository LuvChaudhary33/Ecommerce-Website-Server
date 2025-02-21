import express from "express";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/payment.js";
import { adminOnly } from "../middlewares/auth.js";

const app=express.Router();

app.post("/create", createPaymentIntent);
app.post("/coupon/new", adminOnly,newCoupon);
app.get("/discount", applyDiscount);
app.get("/discount/all", adminOnly,allCoupons);
app.delete("/discount/:id", adminOnly,deleteCoupon);

export default app;