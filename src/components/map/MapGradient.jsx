import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts/core";
import { convertTopoJSONToGeoJSON } from "./Topojson";

const MapGradient = (props) => {
  const chartRef = useRef(null);
  const min = useRef(0);
  const max = useRef(5000);
  const [graphData, setGraphData] = useState([]);
  const geoJson = convertTopoJSONToGeoJSON(props?.district_geo);

  useEffect(() => {
    if (props?.data?.length) {
      let ans = props?.data.map((item) => ({
        name: item.id,
        name_show: item.name,
        value: item.value,
      }));
      setGraphData(ans);
      min.current = Math.min(...props?.data.map((item) => item.value));
      max.current = Math.max(...props?.data.map((item) => item.value)) + 1;
    } else {
      setGraphData([]); // Reset data when props?.data is empty or undefined
      min.current = 0; // Default min value
      max.current = 5000; // Default max value
    }
  }, [props?.data]);
  
  useEffect(() => {
    if (geoJson) {
      const myChart = echarts.init(chartRef.current);
      echarts.registerMap("CG", geoJson || [], {});
      graphData &&
        graphData.sort(function (a, b) {
          return a.value - b.value;
        });
      const option = {
        universalTransition: true,
        title: {
          text: props?.title,
          subtext: props?.subtitle,
          textStyle: { color: "#000", fontSize: 15 },
            // subtextStyle: {
            //     fontSize: 14
            // },
          left: "right",
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            const { data } = params;
            if (data) {
              return `<b>${data.name_show}</b><br/>Value: ${data.value}`;
            }
            return "";
          },
        },
        visualMap: {
          right: "1.5%",
          top: "35%",
          min: min.current,
          max: max.current,
          inRange: {
            color: props?.inverse 
              ? [
                  "#be0a0a", "#cc3116", "#da5823", "#e98030", "#f7a73d", 
                  "#eabf47", "#c2c74d", "#99cf54", "#70d75a", "#48df61"
                ]
              : [
                  "#48df61", "#70d75a", "#99cf54", "#c2c74d", "#eabf47", 
                  "#f7a73d", "#e98030", "#da5823", "#cc3116", "#be0a0a"
                ]
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            name: props?.title,
            type: "map",
            animationDurationUpdate: 1000,
            universalTransition: true,
            map: "CG",
            roam: false,
            aspectScale: 1,
            label: {
              show: false,
              formatter: function (params) {
                const { data } = params;
                return data ? data.name_show : "";
              },
              position: "outside",
              fontSize: 10,
              color: "#000",
            },
            emphasis: {
              label: {
                show: true,
                formatter: function (params) {
                  const { data } = params;
                  return data ? `${data.name_show}\nValue: ${data.value}` : "";
                },
                fontSize: 12,
                fontWeight: "bold",
              },
            },
            nameProperty: props?.nameProp ? props?.nameProp:"dist_id",
            data: graphData ? graphData : [],
          },
        ],
      };
      myChart.setOption(option);
      return () => {
        myChart.dispose();
      };
    }
  }, [geoJson, graphData, props?.title, props?.subtitle,props?.nameProp]);

  return (
    <>
      <div ref={chartRef} style={{ width: "100%", height: "370px" }} />
    </>
  );
};

export default MapGradient;
