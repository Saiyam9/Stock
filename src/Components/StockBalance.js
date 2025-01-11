import React, { useState } from "react";
import "./stockBalance.css";
import Navbar from "./Navbar";
import { performCalculations } from "../Utilities/PerformCalculations";
const StockBalance = () => {
  const [flat, setFlat] = useState(0);
  const [pattiCold, setPattiCold] = useState(0);
  const [pattiHot, setPattiHot] = useState(0);
  const [circle, setCircle] = useState(0);
  const [utensils, setUtensils] = useState(0);
  const [scrap, setScrap] = useState(0);
  const [rod, setRod] = useState(0);
  const [coil, setCoil] = useState(0);
  const [jal, setJal] = useState(0);
  const [flatPurchased, setFlatPurchased] = useState(0);
  const [pattiHotPurchased, setPattiHotPurchased] = useState(0);
  const [pattiColdPurchased, setPattiColdPurchased] = useState(0);
  const [circlePurchased, setCirclePurchased] = useState(0);
  const [utensilsPurchased, setUtensilsPurchased] = useState(0);
  const [scrapPurchased, setScrapPurchased] = useState(0);
  const [rodPurchased, setRodPurchased] = useState(0);
  const [coilPurchased, setCoilPurchased] = useState(0);
  const [jalPurchased, setJalPurchased] = useState(0);
  const [flatSold, setFlatSold] = useState(0);
  const [pattiHotSold, setPattiHotSold] = useState(0);
  const [pattiColdSold, setPattiColdSold] = useState(0);
  const [circleSold, setCircleSold] = useState(0);
  const [utensilsSold, setUtensilsSold] = useState(0);
  const [scrapSold, setScrapSold] = useState(0);
  const [rodSold, setRodSold] = useState(0);
  const [coilSold, setCoilSold] = useState(0);
  const [jalSold, setJalSold] = useState(0);
  const [flatLeft, setFlatLeft] = useState(0);
  const [pattiHotLeft, setPattiHotLeft] = useState(0);
  const [pattiColdLeft, setPattiColdLeft] = useState(0);
  const [circleLeft, setCircleLeft] = useState(0);

  const [rodLeft, setRodLeft] = useState(0);
  const [coilLeft, setCoilLeft] = useState(0);
  const [jalLeft, setJalLeft] = useState(0);
  const [shortage, setShortage] = useState(0);
  const [scrap1, setScrap1] = useState(0);
  const [scrap2, setScrap2] = useState(0);
  const [shortage2, setShortage2] = useState(0);
  const [balance, setBalance] = useState({});

  const [showPurchased, setShowPurchased] = useState(false);
  const [showSold, setShowSold] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showConvert, setShowConvert] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const handleNext = () => {
    setShowPurchased(true);
  };
  const handleNextPurchased = () => {
    setShowSold(true);
  };
  const handleNextSold = () => {
    setShowLeft(true);
  };
  const handleNextLeft = () => {
    setShowConvert(true);
  };
  const handleNextConvert = () => {
    setShowBalance(true);
    const output = performCalculations({
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
    });
    console.log(
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
      shortage2
    );
    setBalance(output);
  };
  return (
    <>
      <Navbar />
      <div>
        <h1>Opening Stock</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th> SS Flat </th>
            <th> SS Hot Patti </th>
            <th> SS Cold Patti </th>
            <th> SS Circle </th>
            <th> SS Utensils </th>
            <th> SS Scrap </th>
            <th> SS Rod </th>
            <th> SS Coil </th>
            <th> SS Jal </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={flat}
                onChange={(e) => {
                  setFlat(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={pattiHot}
                onChange={(e) => {
                  setPattiHot(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={pattiCold}
                onChange={(e) => {
                  setPattiCold(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={circle}
                onChange={(e) => {
                  setCircle(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={utensils}
                onChange={(e) => {
                  setUtensils(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={scrap}
                onChange={(e) => {
                  setScrap(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={rod}
                onChange={(e) => {
                  setRod(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={coil}
                onChange={(e) => {
                  setCoil(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                disabled={showPurchased}
                type="number"
                value={jal}
                onChange={(e) => {
                  setJal(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleNext}>Next</button>
      {showPurchased && (
        <>
          <div>
            <h1>Purchased </h1>
          </div>
          <table>
            <thead>
              <tr>
                <th> SS Flat </th>
                <th> SS Hot Patti </th>
                <th> SS Cold Patti </th>
                <th> SS Circle </th>
                <th> SS Utensils </th>
                <th> SS Scrap </th>
                <th> SS Rod </th>
                <th> SS Coil </th>
                <th> SS Jal </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={flatPurchased}
                    onChange={(e) => {
                      setFlatPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiHotPurchased}
                    onChange={(e) => {
                      setPattiHotPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiColdPurchased}
                    onChange={(e) => {
                      setPattiColdPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={circlePurchased}
                    onChange={(e) => {
                      setCirclePurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={utensilsPurchased}
                    onChange={(e) => {
                      setUtensilsPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={scrapPurchased}
                    onChange={(e) => {
                      setScrapPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={rodPurchased}
                    onChange={(e) => {
                      setRodPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={coilPurchased}
                    onChange={(e) => {
                      setCoilPurchased(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={jalPurchased}
                    onChange={(e) => {
                      setJalPurchased(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleNextPurchased}>Next</button>
        </>
      )}
      {showSold && (
        <>
          <div className="sold">
            <h1>Sold</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th> SS Flat </th>
                <th> SS Hot Patti </th>
                <th> SS Cold Patti </th>
                <th> SS Circle </th>
                <th> SS Utensils </th>
                <th> SS Scrap </th>
                <th> SS Rod </th>
                <th> SS Coil </th>
                <th> SS Jal </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={flatSold}
                    onChange={(e) => {
                      setFlatSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiHotSold}
                    onChange={(e) => {
                      setPattiHotSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiColdSold}
                    onChange={(e) => {
                      setPattiColdSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={circleSold}
                    onChange={(e) => {
                      setCircleSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={utensilsSold}
                    onChange={(e) => {
                      setUtensilsSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={scrapSold}
                    onChange={(e) => {
                      setScrapSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={rodSold}
                    onChange={(e) => {
                      setRodSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={coilSold}
                    onChange={(e) => {
                      setCoilSold(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={jalSold}
                    onChange={(e) => {
                      setJalSold(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleNextSold}>Next</button>
        </>
      )}
      {showLeft && (
        <>
          <div className="sold">
            <h1>Left</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th> SS Flat </th>
                <th> SS Hot Patti </th>
                <th> SS Cold Patti </th>
                <th> SS Circle </th>
                <th> SS Rod </th>
                <th> SS Coil </th>
                <th> SS Jal </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={flatLeft}
                    onChange={(e) => {
                      setFlatLeft(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiHotLeft}
                    onChange={(e) => {
                      setPattiHotLeft(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={pattiColdLeft}
                    onChange={(e) => {
                      setPattiColdLeft(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={circleLeft}
                    onChange={(e) => {
                      setCircleLeft(e.target.value);
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={rodLeft}
                    onChange={(e) => {
                      setRodLeft(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={coilLeft}
                    onChange={(e) => {
                      setCoilLeft(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={jalLeft}
                    onChange={(e) => {
                      setJalLeft(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleNextLeft}>Next</button>
        </>
      )}
      {showConvert && (
        <>
          <div>
            <h1>Conversion </h1>
          </div>
          <div className="inline-inputs">
            <span>SS Flat</span>
            <input
              type="number"
              value={shortage}
              onChange={(e) => {
                setShortage(e.target.value);
              }}
              placeholder="%shortage"
            />

            <span>SS Patti</span>
            <input
              type="number"
              value={scrap1}
              onChange={(e) => {
                setScrap1(e.target.value);
              }}
              placeholder="%Scrap"
            />
            <span>SS Circle</span>
            <input
              type="number"
              value={scrap2}
              onChange={(e) => {
                setScrap2(e.target.value);
              }}
              placeholder="%Scrap"
            />

            <span>SS utensils Int (Add shortage) </span>
            <input
              type="number"
              value={shortage2}
              onChange={(e) => {
                setShortage2(e.target.value);
              }}
              placeholder="%Shortage"
            />
            <span>SS utensils Final </span>
          </div>

          <button onClick={handleNextConvert}>Next</button>
        </>
      )}
      {showBalance && (
        <>
          <div>
            <h1>Balance </h1>
          </div>
          <table>
            <thead>
              <tr>
                <th> SS Flat </th>
                <th> SS Patti Hot </th>
                <th> SS Patti Cold </th>
                <th> SS Circle </th>
                <th> SS Utensils </th>
                <th> SS Scrap </th>
                <th> SS Rod </th>
                <th> SS Coil </th>
                <th> SS Jal </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{flatLeft}</td>
                <td>{pattiColdLeft}</td>
                <td>{pattiHotLeft}</td>
                <td>{circleLeft}</td>
                <td>{balance.utensils_left}</td>
                <td>{balance.scrap_left}</td>
                <td>{rodLeft}</td>
                <td>{coilLeft}</td>
                <td>{jalLeft}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default StockBalance;
