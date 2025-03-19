export const performCalculations = (props) => {
  const {
    flat,
    pattiHot,
    pattiCold,
    circle,
    utensils,
    scrap,
    rod,
    coil,
    jal,
    flatPurchased,
    pattiHotPurchased,
    pattiColdPurchased,
    circlePurchased,
    utensilsPurchased,
    scrapPurchased,
    rodPurchased,
    coilPurchased,
    jalPurchased,
    flatSold,
    pattiHotSold,
    pattiColdSold,
    circleSold,
    utensilsSold,
    scrapSold,
    rodSold,
    coilSold,
    jalSold,
    flatLeft,
    pattiHotLeft,
    pattiColdLeft,
    circleLeft,
    rodLeft,
    coilLeft,
    jalLeft,
    shortage,
    scrap1,
    scrap2,
    shortage2,
  } = props;
  const hotBalance =
    Number(pattiHot) +
    Number(pattiHotPurchased) -
    Number(pattiHotSold) -
    Number(pattiHotLeft);
  console.log(
    Number(pattiHot),
    Number(pattiHotPurchased),
    Number(pattiHotSold),
    Number(pattiHotLeft)
  );
  console.log(hotBalance, "hotBalanceeee");

  const coil_balance =
    Number(coil) + Number(coilPurchased) - Number(coilSold) - Number(coilLeft);

  const total_flat_for_conv =
    Number(flat) +
    Number(flatPurchased) -
    Number(flatSold) -
    Number(flatLeft) +
    Number(hotBalance);
  console.log(total_flat_for_conv, "total_flat_for_conv");

  const cold_made =
    total_flat_for_conv -
    (Number(shortage) / 100) * total_flat_for_conv +
    coil_balance;
  console.log(cold_made, "cold_made");

  const cold_for_circle =
    Number(pattiCold) -
    Number(pattiColdSold) -
    Number(pattiColdLeft) +
    Number(pattiColdPurchased) +
    cold_made;
  console.log(cold_for_circle, "cold_for_circle");

  const circle_made =
    cold_for_circle - (Number(scrap1) / 100) * cold_for_circle;
  console.log(circle_made, "circle_made");

  const x = (Number(scrap1) / 100) * cold_for_circle;

  const jal_balance =
    Number(jal) - Number(jalLeft) + Number(jalPurchased) - Number(jalSold);
  const circle_for_utensils =
    jal_balance / 2 +
    Number(circle) +
    circle_made -
    Number(circleSold) -
    Number(circleLeft) +
    Number(circlePurchased);
  console.log(circle_for_utensils, "circle_for_utensils");

  const utensils_made =
    circle_for_utensils -
    ((Number(scrap2) + Number(shortage2)) / 100) * circle_for_utensils +
    Number(rod) +
    Number(rodPurchased) -
    Number(rodLeft) -
    Number(rodSold);
  console.log(utensils_made, "utensils_made");
  console.log("Rod Balance", rod, rodPurchased, rodLeft, rodSold);

  const y = (Number(scrap2) / 100) * circle_for_utensils;

  const utensils_left =
    Number(utensils) +
    Number(utensilsPurchased) -
    Number(utensilsSold) +
    Number(utensils_made);
  console.log(utensils_left, "utensils_left");

  const scrap_left =
    Number(scrap) +
    Number(scrapPurchased) -
    Number(scrapSold) +
    x +
    y +
    jal_balance / 2;
  console.log(scrap, scrapPurchased);
  console.log(scrap_left, "scrap_left");

  console.log(utensils_left, scrap_left);
  const shortage_a = (Number(shortage) / 100) * total_flat_for_conv;
  const shortage_b = (Number(shortage2) / 100) * circle_for_utensils;

  return { utensils_left, scrap_left, shortage_a, shortage_b };
};
