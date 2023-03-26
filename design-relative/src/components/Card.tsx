import React from "react";
import "./Card.css";

interface Props {
  iconObject: Record<string, string>;
  gradientColorsMap: Record<string, string>;
  gradientColorsOpacity: Record<string, string>;
  data: {
    id: string;
    name: string;
    ticker: string;
    current_price: string;
    last_change: number;
    tvl: string;
    popular_pairs: { name: string; ticker: string }[];
  };
}

const Card: React.FC<Props> = ({
  iconObject,
  gradientColorsMap,
  gradientColorsOpacity,
  data,
}) => {
  return (
    <div className="container">
      <div className="circle-logo">
        <svg
          className="circle-svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_28_854)">
            <path
              d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
              fill="url(#paint0_linear_28_854)"
              fillOpacity="0.1"
            />
            <path
              d="M99.5 50C99.5 77.3381 77.3381 99.5 50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5C77.3381 0.5 99.5 22.6619 99.5 50Z"
              stroke="url(#paint1_linear_28_854)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_28_854"
              x="-100"
              y="-100"
              width="300"
              height="300"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_28_854"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_28_854"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_28_854"
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#626A88" />
              <stop
                offset="1"
                stopColor={gradientColorsMap[data.ticker]}
                stopOpacity={gradientColorsOpacity[data.ticker]}
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_28_854"
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECF0FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#3B3F57" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="circle-logo-inside">
        <img
          src={iconObject[data.ticker]}
          height="50px"
          width="50px"
          title={data.name}
          alt={data.name}
        />
      </div>
      <svg
        className="the-svg"
        width="291"
        height="351"
        viewBox="0 0 291 351"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_11928_2)">
          <path
            d="M273.74 0.920044H234.74C227.467 0.943622 220.365 3.12713 214.334 7.19354C208.304 11.26 203.618 17.026 200.87 23.76C196.35 34.7647 188.66 44.1771 178.778 50.8012C168.895 57.4253 157.267 60.962 145.37 60.962C133.473 60.962 121.845 57.4253 111.963 50.8012C102.08 44.1771 94.3906 34.7647 89.8701 23.76C87.1222 17.026 82.4357 11.26 76.4055 7.19354C70.3753 3.12713 63.2731 0.943622 56 0.920044H17C12.4913 0.920044 8.16737 2.71111 4.97925 5.89923C1.79113 9.08735 0 13.4114 0 17.92V334C0 338.509 1.79113 342.833 4.97925 346.021C8.16737 349.209 12.4913 351 17 351H273.74C278.249 351 282.573 349.209 285.761 346.021C288.949 342.833 290.74 338.509 290.74 334V17.92C290.74 13.4114 288.949 9.08735 285.761 5.89923C282.573 2.71111 278.249 0.920044 273.74 0.920044Z"
            fill="url(#paint0_linear_11928_2)"
            fillOpacity="0.1"
          />
          <path
            d="M201.333 23.95L201.333 23.9489C204.044 17.3066 208.666 11.6191 214.614 7.60809C220.562 3.59722 227.567 1.44346 234.741 1.42004H273.74C278.116 1.42004 282.313 3.15843 285.407 6.25278C288.502 9.34714 290.24 13.544 290.24 17.92V334C290.24 338.376 288.502 342.573 285.407 345.667C282.313 348.762 278.116 350.5 273.74 350.5H17C12.6239 350.5 8.42715 348.762 5.3328 345.667C2.23845 342.573 0.5 338.376 0.5 334V17.92C0.5 13.544 2.23845 9.34714 5.3328 6.25278C8.42715 3.15843 12.6239 1.42004 17 1.42004H55.9992C63.173 1.44346 70.1781 3.59722 76.126 7.60809C82.074 11.6191 86.6967 17.3066 89.4072 23.949L89.4076 23.95C93.9657 35.0464 101.72 44.5372 111.684 51.2165C121.649 57.8958 133.374 61.462 145.37 61.462C157.366 61.462 169.091 57.8958 179.056 51.2165C189.021 44.5372 196.775 35.0464 201.333 23.95Z"
            stroke="url(#paint1_linear_11928_2)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_11928_2"
            x="-100"
            y="-99.08"
            width="490.74"
            height="550.08"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_11928_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_11928_2"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_11928_2"
            x1="145.37"
            y1="0.920044"
            x2="145.37"
            y2="377"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#626A88" stopOpacity="1" />
            <stop offset="100%" stopColor="#2E3149" stopOpacity="1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11928_2"
            x1="145.37"
            y1="0.920044"
            x2="145.37"
            y2="377"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ECF0FF" stopOpacity="0.1" />
            <stop offset="1" stopColor="#2E3149" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="data-content">
        <div className="name">
          <div className="name-content">
            {data.name} ({data.ticker})
          </div>
        </div>
        <svg
          className="elipse-container"
          width="242"
          height="40"
          viewBox="0 0 242 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="241"
            height="39"
            rx="16.5"
            fill="#14172B"
            stroke="url(#paint0_linear_11928_60)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11928_60"
              x1="121"
              y1="0"
              x2="121"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECF0FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#3B3F57" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="price">
          <div className="dumy"></div>
          <div className="current-price">{data.current_price}</div>
          <div
            className={`price-change ${data.last_change < 0 ? "red" : "green"}`}
          >
            {data.last_change > 0 ? "+" : ""}
            {data.last_change}%
          </div>
        </div>
        <div className="price-text">
          <div className="price-content">Price</div>
        </div>

        <svg
          className="elipse-container"
          width="242"
          height="40"
          viewBox="0 0 242 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="241"
            height="39"
            rx="16.5"
            fill="#14172B"
            stroke="url(#paint0_linear_11928_60)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11928_60"
              x1="121"
              y1="0"
              x2="121"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECF0FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#3B3F57" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="tvl-container">
          <div className="tvl">{data.tvl}</div>
        </div>
        <div className="price-text">
          <div className="price-content">TVL</div>
        </div>

        <div className="small-container">
          <svg
            className="the-svg-small"
            width="122"
            height="40"
            viewBox="0 0 122 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="121.755" height="40" rx="20" fill="#14172B" />
          </svg>
        </div>
        <div className="pair-container">
          <div className="pairs">
            {data.popular_pairs.map((pair) => (
              <div className="icons" key={pair.name}>
                <img src={iconObject[pair.ticker]} height="25" />
              </div>
            ))}
          </div>
        </div>

        <div className="price-text">
          <div className="price-content">Popular pairs</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
