/*
====================================================
              المنتجات الرئيسية
====================================================
*/

const products = [

  {
    id:1,
    name:"كابل شحن سريع USB C",
    price:50,
    old:80,
    image:"./images/IMG_8631.PNG",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:2,
    name:"محطة شحن لا سلكية",
    price:449,
    old:599,
    image:"./images/محطة شحن لا سلكية.PNG",
    offer:false,
    best:false,
    newProduct:true
  },

  {
    id:3,
    name:"شاحن لا سلكي type C",
    price:249,
    old:329,
    image:"./images/4.PNG",
    offer:false,
    best:false,
    newProduct:false
  },

  {
    id:4,
    name:"كاميرا صغيرة للتصوير",
    price:799,
    old:999,
    image:"./images/",
    offer:false,
    best:false,
    newProduct:false
  },

  {
    id:5,
    name:"لوحة مفاتيح لاسلكية",
    price:199,
    old:249,
    image:"./images/",
    offer:false,
    best:true,
    newProduct:false
  },

  {
    id:6,
    name:"مصباح LED مكتبي",
    price:129,
    old:179,
    image:"./images/",
    offer:true,
    best:true,
    newProduct:false
  },

  {
    id:7,
    name:"كمبيوتر محمول",
    price:2899,
    old:3500,
    image:"./images/Microsoft Unveils First 5G Surface Laptop with eSIM.jpg",
    offer:true,
    best:false,
    newProduct:false
  },

  {
    id:9,
    name:"Robot tesla",
    price:8000000,
    old:900000,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:10,
    name:"Moniteurs Gamer 250 hz",
    price:1500,
    old:2000,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:11,
    name:"Iphone 18 pro max",
    price:16000,
    old:20000,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:12,
    name:"Rtx 3060",
    price:8000,
    old:10000,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:13,
    name:"ساعة كوارتز رجالية فاخرة",
    price:199,
    old:299,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:17,
    name:"كميرة صغيرة لتجسس",
    price:299,
    old:399,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:14,
    name:"مزيل الرؤوس السوداء الكهربائي",
    price:190,
    old:299,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:15,
    name:"مكينة الحلاقة المناطق الحساسة",
    price:99,
    old:298,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:16,
    name:"مكينة تشذيب شعر الانف",
    price:199,
    old:299,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:19,
    name:"ساعة ذكية مع كميرة",
    price:1600,
    old:2500,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:20,
    name:"180 قطعة من لصقات حب الشباب",
    price:199,
    old:299,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:21,
    name:"مروحة تبريد الهاتف",
    price:199,
    old:299,
    image:"./images/3.jpg",
    offer:true,
    best:false,
    newProduct:true
  },

  {
    id:22,
    name:"سماعات اذن احترافية oraimo",
    price:500,
    old:600,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },


  {
    id:23,
    name:"طاقم العناية الاحترافي",
    price:300,
    old:600,
    image:"./images/",
    offer:true,
    best:false,
    newProduct:true
  },
];


/*
====================================================
                    العناصر
====================================================
*/


/*
====================================================
              ترتيب المنتجات عشوائياً
====================================================
*/

function shuffleProducts(list){

  const arr = [...list];

  for(let i = arr.length - 1; i > 0; i--){

    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];

  }

  return arr;

}

const displayProducts = [
  ...shuffleProducts(products.filter(p => p.newProduct)),
  ...shuffleProducts(products.filter(p => !p.newProduct))
];

const productsEl =
  document.getElementById("products");

const offersEl =
  document.getElementById("offersProducts");

const bestEl =
  document.getElementById("bestProducts");

const newEl =
  document.getElementById("newProducts");

const orderPage =
  document.getElementById("orderPage");

const cartPage =
  document.getElementById("cartPage");

const homePage =
  document.getElementById("homePage");

const selected =
  document.getElementById("selectedProduct");

const searchInput =
  document.getElementById("searchInput");


let selectedProduct = null;
let checkoutFromCart = false;


/*
====================================================
                    السلة
====================================================
*/

let cart =
  JSON.parse(
    localStorage.getItem("amaronCart") || "[]"
  );


/*
====================================================
                    الطلبات
====================================================
*/

let orders =
  JSON.parse(
    localStorage.getItem("amaronOrders") || "[]"
  );


function saveCart(){

  localStorage.setItem(
    "amaronCart",
    JSON.stringify(cart)
  );

}


function saveOrders(){

  localStorage.setItem(
    "amaronOrders",
    JSON.stringify(orders)
  );

}


/*
====================================================
                    المال
====================================================
*/

function money(n){

  return Number(n).toLocaleString("fr-FR") + " درهم";

}


/*
====================================================
                  حساب الخصم
====================================================
*/

function discount(p){

  if(!p.old || p.old <= p.price){

    return 0;

  }

  return Math.round(
    ((p.old - p.price) / p.old) * 100
  );

}


/*
====================================================
              إنشاء بطاقة المنتج
====================================================
*/

function productCard(p){

  const d = discount(p);

  return `

    <article
      class="product"
      onclick="openOrder(${p.id})"
    >

      ${
        p.offer
        ?
        `<span class="discount">-99%</span>`
        :
        ""
      }

      ${
        p.best
        ?
        `<span class="best-badge">⭐ الأكثر مبيعاً</span>`
        :
        ""
      }

      ${
        p.newProduct
        ?
        `<span class="new-badge">جديد</span>`
        :
        ""
      }

      <img
        src="${p.image}"
        onerror="this.src='images/placeholder.svg'"
        alt="${p.name}"
      >

      <h3>${p.name}</h3>

      <div>

        <span class="price">
          ${money(p.price)}
        </span>

        <span class="old">
          ${money(p.old)}
        </span>

      </div>

      <button
        class="buy"
        onclick="event.stopPropagation();openOrder(${p.id})"
      >
        اطلب الآن
      </button>

      <button
        class="add-cart"
        onclick="event.stopPropagation();addToCart(${p.id})"
      >
        🛒 أضف إلى السلة
      </button>

    </article>

  `;

}


/*
====================================================
                  عرض المنتجات
====================================================
*/

function render(list = displayProducts){

  productsEl.innerHTML =
    list.map(productCard).join("");

}


/*
====================================================
                    العروض
====================================================
*/

function renderOffers(){

  const list =
    shuffleProducts(products.filter(p => p.offer));

  offersEl.innerHTML =
    list.map(productCard).join("");

}


/*
====================================================
                  الأكثر مبيعاً
====================================================
*/

function renderBest(){

  const list =
    shuffleProducts(products.filter(p => p.best));

  bestEl.innerHTML =
    list.map(productCard).join("");

}


/*
====================================================
                       جديد
====================================================
*/

function renderNew(){

  const list =
    shuffleProducts(products.filter(p => p.newProduct));

  newEl.innerHTML =
    list.map(productCard).join("");

}


/*
====================================================
                 فتح صفحة الطلب
====================================================
*/

function openOrder(id){

  checkoutFromCart = false;

  selectedProduct =
    products.find(p => p.id === id);

  if(!selectedProduct){

    return;

  }

  document.getElementById(
    "productName"
  ).value =
    selectedProduct.name;


  selected.innerHTML = `

    <img
      src="${selectedProduct.image}"
      onerror="this.src='images/placeholder.svg'"
    >

    <h3>
      ${selectedProduct.name}
    </h3>

    <div class="price">
      ${money(selectedProduct.price)}
    </div>

  `;


  homePage.classList.add("hidden");

  cartPage.classList.add("hidden");

  orderPage.classList.remove("hidden");

  window.scrollTo(0,0);

}


/*
====================================================
                  إضافة للسلة
====================================================
*/

function addToCart(id){

  const product =
    products.find(p => p.id === id);

  if(!product){

    return;

  }


  const existing =
    cart.find(item => item.id === id);


  if(existing){

    existing.quantity += 1;

  }else{

    cart.push({

      id:product.id,
      quantity:1

    });

  }


  saveCart();

  updateCartCount();

  showToast(
    "تمت إضافة المنتج إلى السلة 🛒"
  );

}


/*
====================================================
                  عدد السلة
====================================================
*/

function updateCartCount(){

  const count =
    cart.reduce(
      (total,item) =>
        total + item.quantity,
      0
    );


  const cartCount =
    document.getElementById("cartCount");

  if(cartCount){

    cartCount.textContent = count;

  }


  const cartItemsCount =
    document.getElementById("cartItemsCount");

  if(cartItemsCount){

    cartItemsCount.textContent =
      count + " منتجات";

  }

}


/*
====================================================
                    عرض السلة
====================================================
*/

function renderCart(){

  const container =
    document.getElementById("cartItems");

  const empty =
    document.getElementById("emptyCart");

  const totalEl =
    document.getElementById("cartTotal");


  if(!container || !empty || !totalEl){

    return;

  }


  if(cart.length === 0){

    container.innerHTML = "";

    empty.classList.remove("hidden");

    totalEl.textContent =
      money(0);

    updateCartCount();

    return;

  }


  empty.classList.add("hidden");


  let total = 0;


  container.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );


      if(!product){

        return "";

      }


      const itemTotal =
        product.price * item.quantity;


      total += itemTotal;


      return `

        <div class="cart-item">

          <img
            src="${product.image}"
            onerror="this.src='images/placeholder.svg'"
          >

          <div class="cart-info">

            <h3>
              ${product.name}
            </h3>

            <div class="cart-price">
              ${money(product.price)}
            </div>

            <div class="quantity">

              <button
                onclick="changeQuantity(${product.id},-1)"
              >
                −
              </button>

              <strong>
                ${item.quantity}
              </strong>

              <button
                onclick="changeQuantity(${product.id},1)"
              >
                +
              </button>

            </div>

          </div>

          <div>

            <strong>
              ${money(itemTotal)}
            </strong>

            <br><br>

            <button
              class="remove"
              onclick="removeFromCart(${product.id})"
            >
              🗑 إزالة
            </button>

          </div>

        </div>

      `;

    }).join("");


  totalEl.textContent =
    money(total);


  updateCartCount();

}


/*
====================================================
                  تغيير الكمية
====================================================
*/

function changeQuantity(id,amount){

  const item =
    cart.find(i => i.id === id);

  if(!item){

    return;

  }


  item.quantity += amount;


  if(item.quantity <= 0){

    cart =
      cart.filter(
        i => i.id !== id
      );

  }


  saveCart();

  renderCart();

}


/*
====================================================
                  حذف من السلة
====================================================
*/

function removeFromCart(id){

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveCart();

  renderCart();

  showToast(
    "تمت إزالة المنتج من السلة"
  );

}


/*
====================================================
                    فتح السلة
====================================================
*/

const cartBtn =
  document.getElementById("cartBtn");

if(cartBtn){

  cartBtn.onclick = () => {

    homePage.classList.add("hidden");

    orderPage.classList.add("hidden");

    cartPage.classList.remove("hidden");

    renderCart();

    window.scrollTo(0,0);

  };

}


/*
====================================================
                  العودة للمتجر
====================================================
*/

const cartBackBtn =
  document.getElementById("cartBackBtn");

if(cartBackBtn){

  cartBackBtn.onclick = () => {

    cartPage.classList.add("hidden");

    homePage.classList.remove("hidden");

    window.scrollTo(0,0);

  };

}


const backBtn =
  document.getElementById("backBtn");

if(backBtn){

  backBtn.onclick = () => {

    orderPage.classList.add("hidden");

    homePage.classList.remove("hidden");

  };

}


/*
====================================================
                    البحث
====================================================
*/

function normalizeText(text){

  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[أإآ]/g,"ا")
    .replace(/ة/g,"ه")
    .replace(/ى/g,"ي");

}


function searchProducts(){

  if(!searchInput){

    return;

  }


  const q =
    normalizeText(
      searchInput.value
    );


  /*
  إذا كان مربع البحث فارغاً
  نعرض جميع المنتجات
  */

  if(!q){

    render(displayProducts);

    return;

  }


  /*
  البحث داخل جميع المنتجات
  */

  const result =
    displayProducts.filter(product => {

      const name =
        normalizeText(
          product.name
        );

      return name.includes(q);

    });


  /*
  إذا وجد منتجات
  */

  if(result.length > 0){

    render(result);

  }

  /*
  إذا لم يجد
  */

  else{

    productsEl.innerHTML = `

      <div class="no-results">

        <div style="font-size:50px;">
          🔍
        </div>

        <h3>
          لم يتم العثور على المنتج
        </h3>

        <p>
          لا يوجد منتج يطابق:
          <strong>
            ${searchInput.value}
          </strong>
        </p>

        <button
          onclick="clearSearch()"
          style="
            padding:12px 25px;
            border:0;
            border-radius:8px;
            background:#ffd814;
            cursor:pointer;
            font-weight:bold;
          "
        >
          عرض جميع المنتجات
        </button>

      </div>

    `;

  }


  /*
  الانتقال إلى المنتجات
  */

  productsEl.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}


/*
====================================================
              البحث أثناء الكتابة
====================================================
*/

if(searchInput){

  searchInput.addEventListener(
    "input",
    searchProducts
  );


  searchInput.addEventListener(
    "keydown",
    function(e){

      if(e.key === "Enter"){

        e.preventDefault();

        searchProducts();

      }

    }
  );

}


/*
====================================================
                  مسح البحث
====================================================
*/

function clearSearch(){

  if(!searchInput){

    return;

  }

  searchInput.value = "";

  render(displayProducts);

  productsEl.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}


/*
====================================================
                  أزرار التنقل
====================================================
*/

document.querySelectorAll(
  "[data-section]"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const id =
        button.dataset.section;


      if(id === "offers"){

        document.getElementById(
          "offersSection"
        ).scrollIntoView({
          behavior:"smooth"
        });

      }


      if(id === "best"){

        document.getElementById(
          "bestSection"
        ).scrollIntoView({
          behavior:"smooth"
        });

      }


      if(id === "new"){

        document.getElementById(
          "newSection"
        ).scrollIntoView({
          behavior:"smooth"
        });

      }


      if(id === "home"){

        window.scrollTo({
          top:0,
          behavior:"smooth"
        });

      }

    }
  );

});


/*
====================================================
                  إتمام الطلب من السلة
====================================================
*/

const checkoutBtn =
  document.getElementById("checkoutBtn");

if(checkoutBtn){

  checkoutBtn.onclick = () => {

    if(cart.length === 0){

      showToast(
        "السلة فارغة"
      );

      return;

    }


    openCartCheckout();

  };

}


/*
====================================================
                    نموذج الطلب
====================================================
*/

const orderForm =
  document.getElementById("orderForm");

if(orderForm){

  orderForm.onsubmit = async e => {

    e.preventDefault();

    const status =
      document.getElementById("status");

    if(!selectedProduct){

      status.className = "error";
      status.textContent = "يرجى اختيار منتج أولاً";
      return;

    }

    let orderItems;

    if(checkoutFromCart){

      orderItems = cart.map(item => {

        const product =
          products.find(p => p.id === item.id);

        if(!product) return null;

        return {
          id: product.id,
          name: product.name,
          price: Number(product.price),
          quantity: Math.max(1, Number(item.quantity) || 1),
          image: product.image
        };

      }).filter(Boolean);

      if(!orderItems.length){

        status.className = "error";
        status.textContent = "السلة فارغة";
        return;

      }

    }else{

      const qty = Math.max(
        1,
        Number(document.getElementById("quantity").value) || 1
      );

      orderItems = [{
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: Number(selectedProduct.price),
        quantity: qty,
        image: selectedProduct.image
      }];

    }

    const total = orderItems.reduce(
      (sum,item) => sum + item.price * item.quantity,
      0
    );

    const totalQuantity = orderItems.reduce(
      (sum,item) => sum + item.quantity,
      0
    );

    /*
    هذا النص يحتوي على جميع المنتجات،
    لذلك Order.php سيستقبلها كلها في product.
    */

    const productText = orderItems
      .map(item => `${item.name} × ${item.quantity}`)
      .join("\n");

    status.className = "";
    status.textContent = "جارٍ إرسال الطلب...";

    const data = {

      product: productText,

      products: orderItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),

      items: orderItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),

      price: total,
      total: total,

      name: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      quantity: totalQuantity

    };

    try{

      const r = await fetch(
        "/send-order",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        }
      );

      const j = await r.json();

      if(!j.success){

        throw new Error(
          j.message || "تعذر إرسال الطلب"
        );

      }

      orders.push({

        id: Date.now(),

        product: productText,

        products: orderItems,

        items: orderItems,

        price: total,

        total: total,

        quantity: totalQuantity,

        createdAt: Date.now(),

        status: "pending"

      });

      saveOrders();

      status.className = "success";
      status.textContent =
        "تم استلام طلبك بنجاح، سنتواصل معك قريباً.";

      e.target.reset();

      if(checkoutFromCart){

        cart = [];

      }else{

        cart = cart.filter(
          item => item.id !== selectedProduct.id
        );

      }

      saveCart();
      updateCartCount();
      renderCart();

      checkoutFromCart = false;

    }
    catch(err){

      status.className = "error";
      status.textContent =
        err.message ||
        "حدث خطأ أثناء إرسال الطلب";

    }

  };

}

function openCartCheckout(){

  if(cart.length === 0){

    showToast("السلة فارغة");
    return;

  }

  const detailedCart = cart.map(item => {

    const product =
      products.find(p => p.id === item.id);

    if(!product) return null;

    return {
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: Math.max(1, Number(item.quantity) || 1),
      image: product.image
    };

  }).filter(Boolean);

  if(!detailedCart.length){

    showToast("السلة فارغة");
    return;

  }

  checkoutFromCart = true;

  selectedProduct =
    products.find(p => p.id === detailedCart[0].id);

  if(!selectedProduct){

    checkoutFromCart = false;
    return;

  }

  const total = detailedCart.reduce(
    (sum,item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = detailedCart.reduce(
    (sum,item) => sum + item.quantity,
    0
  );

  document.getElementById("productName").value =
    "طلب متعدد المنتجات";

  selected.innerHTML = `

    <img
      src="${selectedProduct.image}"
      onerror="this.src='images/placeholder.svg'"
    >

    <h3>طلب متعدد المنتجات</h3>

    <div class="price">
      ${money(total)}
    </div>

    <p>
      عدد المنتجات المختلفة:
      <strong>${detailedCart.length}</strong>
    </p>

    <p>
      إجمالي الكمية:
      <strong>${totalQuantity}</strong>
    </p>

    <div style="
      margin-top:15px;
      padding:12px;
      background:#f5f6f8;
      border-radius:10px;
    ">

      ${detailedCart.map(item => `

        <div style="
          display:flex;
          justify-content:space-between;
          gap:10px;
          padding:8px 0;
          border-bottom:1px solid #ddd;
        ">

          <span>
            ${item.name} × ${item.quantity}
          </span>

          <strong>
            ${money(item.price * item.quantity)}
          </strong>

        </div>

      `).join("")}

    </div>

  `;

  const quantityInput =
    document.getElementById("quantity");

  if(quantityInput){
    quantityInput.value = totalQuantity;
  }

  cartPage.classList.add("hidden");
  homePage.classList.add("hidden");
  orderPage.classList.remove("hidden");

  window.scrollTo(0,0);

}

function showToast(message){

  const toast =
    document.getElementById("toast");


  if(!toast){

    return;

  }


  toast.textContent =
    message;


  toast.style.display =
    "block";


  setTimeout(() => {

    toast.style.display =
      "none";

  },2500);

}


/*
====================================================
                    الطلبات
====================================================
*/

function renderOrders(){

  const container =
    document.getElementById(
      "ordersList"
    );


  if(!container){

    return;

  }


  if(orders.length === 0){

    container.innerHTML = `

      <div class="order-history">

        لا توجد طلبات حالياً.

      </div>

    `;

    return;

  }


  container.innerHTML =
    orders.map(order => {

      const elapsed =
        Date.now() -
        order.createdAt;


      const fourHours =
        4 * 60 * 60 * 1000;


      const canCancel =
        elapsed < fourHours &&
        order.status !== "cancelled";


      return `

        <div class="order-history">

          <div class="order-history-header">

            <strong>
              📦 ${order.product}
            </strong>

            ${
              canCancel

              ?

              `

                <button
                  class="cancel-btn"
                  onclick="cancelOrder(${order.id})"
                >
                  التراجع عن الطلب
                </button>

              `

              :

              `

                <button
                  class="cancel-btn cancel-disabled"
                  onclick="cancelOrder(${order.id})"
                >
                  لا يمكن التراجع
                </button>

              `
            }

          </div>


          <p>

            الكمية:
            ${order.quantity}

          </p>


          <p>

            السعر:
            ${money(
              order.price *
              order.quantity
            )}

          </p>


          <small>

            ${
              order.status === "cancelled"

              ?

              "تم إلغاء الطلب"

              :

              canCancel

              ?

              "يمكنك التراجع عن الطلب لمدة 4 ساعات."

              :

              "لقد تم شحن المنتجات بالفعل."

            }

          </small>

        </div>

      `;

    }).join("");

}


/*
====================================================
                  إلغاء الطلب
====================================================
*/

function cancelOrder(id){

  const order =
    orders.find(
      o => o.id === id
    );


  if(!order){

    return;

  }


  const elapsed =
    Date.now() -
    order.createdAt;


  const fourHours =
    4 * 60 * 60 * 1000;


  if(elapsed >= fourHours){

    showToast(
      "لقد تم شحن المنتجات بالفعل، لا يمكن التراجع عن الطلب الآن."
    );

    return;

  }


  if(order.status === "cancelled"){

    showToast(
      "تم إلغاء هذا الطلب مسبقاً."
    );

    return;

  }


  order.status =
    "cancelled";


  saveOrders();

  renderOrders();


  showToast(
    "تم التراجع عن الطلب بنجاح."
  );

}


/*
====================================================
                  تشغيل المشروع
====================================================
*/

render(displayProducts);

renderOffers();

renderBest();

renderNew();

renderCart();

updateCartCount();


/*
====================================================
                  إشعار الزائر
====================================================
*/

if(
  !sessionStorage.getItem(
    "visitorNotified"
  )
){

  fetch(
    "/visitor",
    {
      method:"POST",

      headers:{
        "Content-Type":
          "application/json"
      },

      body:
        JSON.stringify({
          page:
            location.href
        })
    }
  ).catch(() => {});


  sessionStorage.setItem(
    "visitorNotified",
    "1"
  );

}
