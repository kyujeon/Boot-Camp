// 돈을 넣는 함수
function insertCoin(amount) {
  return new promise((resolve, reject) => {
    if (!amount) {
      reject("돈을 넣으세요");
      return;
    }
    console.log(`${amount}`);
    resolve();
  });
}

// 음료를 고르는 함수
function selectDrink(drinkName) {
  return new promise((resolve) => {
    console.log(`${drinkName}`);
    resolve(drinkName);
  });
}

// 음료를 받는 함수
function getDrink(drinkName) {
  return new promise((resolve) => {
    console.log(`${drinkName}`);
    resolve(drinkName);
  });
}

//////

insertCoin(amount)
  .then(() => {
    return selectDrink(drink);
  })
  .then(() => {
    return selectDrink(drinkName);
  })
  .then(() => {
    return getDrink(drinkName);
  })
  .then(() => {
    console.log("done!");
  });

/////////

async function vend(amount, drinkName) {
  try {
    await insertCoin(amount);

    await selectDrink(drinkName);

    await getDrink(drinkName);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("done!");
  }
}
vend();
