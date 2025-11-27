import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

function TopoJSON({ data, style, onEachFeature, pointToLayer, ...defProps }) {
  const layerRef = useRef(null);

  const addData = (layer, jsonData) => {
    if (!jsonData) {
      console.error("No data provided for TopoJSON");
      return;
    }

    if (jsonData.type === "Topology") {
      for (const key in jsonData.objects) {
        const geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson); // Safely add GeoJSON data
      }
    } else {
      layer.addData(jsonData);
    }
  };

  useEffect(() => {
    const layer = layerRef.current;

    if (layer) {
      layer.clearLayers(); // Clear existing layers to avoid duplicates
      addData(layer, data); // Add new data
    }
  }, [data]);

  return (
    <GeoJSON
      ref={layerRef}
      style={style}
      onEachFeature={onEachFeature}
      pointToLayer={pointToLayer}
      {...defProps}
    />
  );
}

export const convertTopoJSONToGeoJSON = (topoJSONData) => {
  if (!topoJSONData || !topoJSONData.objects) {
    throw new Error("Invalid TopoJSON data");
  }

  // Combine all objects into a single GeoJSON FeatureCollection
  const features = [];
  for (const key in topoJSONData.objects) {
    const geoJSON = topojson.feature(topoJSONData, topoJSONData.objects[key]);
    features.push(...geoJSON.features); // Merge features
  }

  return {
    type: "FeatureCollection",
    features,
  };
};
export default TopoJSON;
