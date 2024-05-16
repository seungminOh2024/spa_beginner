# Node.js 과제 - 상품 CRUD 구현하기

##1. api 명세서
   + 상품 생성 : post
   + 상품 목록 조회 : get
   + 상품 상세 목록 조회 : get
   + 상품 수정 : put
   + 상품 삭제 : delete

##2. 사용설명(api 요청 url)
   + 상품 생성 : post/api/products
   + 상품 목록 조회 : get/api/products
   + 상품 상세 목록 조회 : get/api/products/:productsId
   + 상품 수정 : put/api/products/:productsId
   + 상품 삭제 : delete /api/products/:productsId

##3. 폴더 구조
+.
+├── node_modules // Git에는 올라가지 않습니다.
+├── src
+│   ├── middlewarmies
+│   │   └── error-handler.middleware.js
+│   ├── routers
+│   │   └── products.router.js
+│   ├── schemas
+│   │   ├── index.js
+│   │   └── product.schema.js
+│   └── app.js
+├── .env // Git에는 올라가지 않습니다.
+├── .gitignore
+├── .prettierrc
+├── package.json
+├── README.md
+└── yarn.lock // npm을 사용하면 package-lock.json
