import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { uniq, includes, sum } from "ramda";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getWeather } from "../actions/action-fetch";
import { CardComponent } from "../components/Card/CardComponent";
import { TempConverter } from "../components/TempConverter/TempConverter";
import { BarChart } from "../components/BarChart/BarChart";
import { getDate } from "../utils";

const WeatherContainer = props => {
  const { dispatch, isLoading, weather } = props;
  const { list = [] } = weather || {};

  const [degree, setDegree] = useState("C");
  const [toggleChart, setToggleChart] = useState(0);

  const date = list.map(item => {
    return getDate(item.dt_txt);
  });
  const formattedDate = uniq(date);

  const formattedTemp = formattedDate.reduce((acc, currDate) => {
    const currDateTemps = list
      .map(tempObj => {
        if (includes(currDate, tempObj.dt_txt)) {
          if (degree === "C") {
            return tempObj.main.temp;
          } else {
            return (tempObj.main.temp * 9) / 5 + 32;
          }
        } else {
          return;
        }
      })
      .filter(item => item !== undefined);

    return [
      ...acc,
      {
        date: currDate,
        seriesData: currDateTemps,
        avgTemp: sum(currDateTemps) / currDateTemps.length
      }
    ];
  }, []);

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  if (isLoading) {
    return (
      <div>
        <div> Loading!! </div>
      </div>
    );
  }
  return (
    <div>
      <TempConverter degree={degree} setDegree={setDegree} />
      <Slider {...settings}>
        {formattedTemp.map((item, index) => {
          return (
            <div>
              <div
                onClick={() => {
                  setToggleChart(index);
                }}
              >
                <CardComponent
                  key={index}
                  degree={degree}
                  date={item.date}
                  avgTemp={item.avgTemp}
                />
              </div>

              {toggleChart === index && (
                <BarChart
                  categories={item.seriesData}
                  degree={degree}
                  series={[
                    {
                      name: item.date,
                      data: item.seriesData
                    }
                  ]}
                />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    weather: state.weather,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(WeatherContainer);
