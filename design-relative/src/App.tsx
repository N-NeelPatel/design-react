import { data } from "./data";
import Card from "./components/Card";
import Shiba from "./images/SHIBA INU (SHIB).svg";
import Binance from "./images/Binance Coin (BNB).svg";
import Bitcoin from "./images/Bitcoin.png";
import Ethereum from "./images/Ethereum (ETH).svg";
import Solana from "./images/Solana (SOL).svg";
import Activity from "./images/activity.svg";
import "./App.css";
import { FC } from "react";

interface IconObject {
  [key: string]: string;
}

interface GradientColorsMap {
  [key: string]: string;
}

interface GradientColorsOpacity {
  [key: string]: string;
}

interface PopularPair {
  name: string;
  ticker: string;
}

interface Data {
  id: string;
  name: string;
  ticker: string;
  current_price: string;
  last_change: number;
  tvl: string;
  popular_pairs: PopularPair[];
}

const iconObject: IconObject = {
  BTC: Bitcoin,
  ETH: Ethereum,
  BNB: Binance,
  SHIB: Shiba,
  SOL: Solana,
};

const gradientColorsMap: GradientColorsMap = {
  BTC: "#EAB300",
  ETH: "#EDF0F4",
  BNB: "#EAB300",
  SHIB: "#E42D04",
  SOL: "#DC1FFF",
};

const gradientColorsOpacity: GradientColorsOpacity = {
  BTC: "0.6",
  ETH: "0.1",
  BNB: "0.6",
  SHIB: "0.1",
  SOL: "0.1",
};

const App: FC = () => {
  return (
    <main className="container">
      <div className="trending-assets">
        <img src={Activity} alt="Activity" />
        <div className="trending-text text-base font-semibold">
          Trending Assets
        </div>
      </div>
      <div className="cards">
        {data.map((currentData: Data) => (
          <div className="selected-card" key={currentData.id}>
            <Card
              data={currentData}
              iconObject={iconObject}
              gradientColorsMap={gradientColorsMap}
              gradientColorsOpacity={gradientColorsOpacity}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
