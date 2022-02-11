function order(prepaid, stock) {
  if (prepaid === 500) {
    console.log("500元定金预购，得到100优惠券");
    return;
  }
  if (prepaid === 200) {
    console.log("200元定金预购，得到50优惠券");
    return;
  }

  if (stock > 0) {
    console.log("普通购买，无优惠券");
    return;
  }

  console.log("手机库存不足");
}

const methods = [prepaid500, prepaid200, normal];

function orderPro(prepaid, stock) {
  const fn = methods[0];
  const result = fn?.(prepaid, stock);

  if (result === "next") {
    return orderPro(prepaid, methods.slice(1));
  }

  return result;
}

function prepaid500(prepaid, stock) {
  if (prepaid === 500) {
    console.log("500元定金预购，得到100优惠券");
    return;
  }
  return "next";
}

function prepaid200(prepaid, stock) {
  if (prepaid === 200) {
    console.log("200元定金预购，得到50优惠券");
    return;
  }
  return "next";
}

function normal(prepaid, stock) {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
    return;
  }
  console.log("手机库存不足");
}
