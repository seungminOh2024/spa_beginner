import express from "express";
import Products from "../schemas/product.schema.js";

const router = express.Router();

//product 생성
router.post("/products", async (req, res) => {
  const { name, description, manager, password, status } = req.body;

  // 이미 존재하는 상품인지 확인
  const existingProduct = await Products.findOne({ name }).exec();
  if (existingProduct) {
    return res
      .status(400)
      .json({ errorMessage: "이미 존재하는 데이터입니다." });
  }

  const createdProduct = await Products.create({
    name,
    description,
    manager,
    password,
    status,
  });

  return res.status(201).json({ product: createdProduct });
});

//product 조회
router.get("/products", async (req, res) => {
  const products = await Products.find().sort({ createdAt: -1 }).exec();
  return res.status(200).json({ products });
});

//product 상세 조회
router.get("/products/:productsId", async (req, res) => {
  const { productsId } = req.params;

  const product = await Products.findById(productsId).exec();
  if (!product) {
    return res
      .status(404)
      .json({ errorMessage: "존재하지 않는 product 데이터입니다." });
  }

  return res.status(200).json({
    name: product.name,
    description: product.description,
    manager: product.manager,
    status: product.status,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  });
});

//product 수정
router.put("/products/:productsId", async (req, res) => {
  const { productsId } = req.params;
  const { name, description, manager, password, status } = req.body;

  const product = await Products.findById(productsId).exec();

  if (!product) {
    return res.status(404).json({ errorMessage: 'product 데이터가 존재하지 않습니다.' });
  }

  if (password !== product.password) {
    return res.status(401).json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
  }

  const updatedProduct = await Products.findByIdAndUpdate(
    productsId,
    { name, description, manager, status }
  ).exec();

  return res.status(200).json(updatedProduct);
});

//product 삭제
router.delete("/products/:productsId", async (req, res) => {
  const { productsId } = req.params;
  const { password } = req.body;

  const product = await Products.findById(productsId).exec();
  if (!product) {
    return res
      .status(404)
      .json({ errorMessage: "존재하지 않는 productId입니다." });
  }

  if (password !== product.password) {
    //비밀번호 검증
    return res.status(401).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
  }

  await Products.deleteOne({ _id: productsId }).exec();

  return res.status(200).json({});
});

export default router;