import React, { useMemo, useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ZoomControl,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../styles/dashboard.css";
import customMarkerIcon from "../../assets/logo/ibitf.svg";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";
import {  useSelector } from "react-redux";
import { authorization } from "./AuthStatus";
import MapGradient from "./MapGradient";
import TopoJSON from "./Topojson";

// Define custom styles
const districtStyle = {
  // color: "#808B96",
  color: "blue",
  weight: 1.5,
  opacity: 1,
  fillOpacity: 0.1,
};

const blockStyle = {
  color: "#2E86C1",
  weight: 1.2,
  opacity: 1,
  fillOpacity: 0.1,
};
const indiaStyle = {
  color: `#91769c`,
  weight: 1.2,
  opacity: 1,
  fillOpacity: 0.1,
};

// Define popup content for each feature
const onEachFeature1 = (feature, layer) => {
  if (feature.properties && feature.properties.District_N) {
    layer.bindPopup(
      `<strong>District:</strong> ${feature.properties.District_N}`
    );
  }
};
const onEachFeature = (feature, layer) => {
  if (feature.properties && feature.properties.block) {
    layer.bindPopup(`<strong>Block:</strong> ${feature.properties.block}`);
  }
};

// Create a custom icon
const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComp = (props) => {
  const [schoolData, setSchoolData] = useState([]);
  const { block_geo, india_geo, district_geo, status, error } = useSelector(
    (state) => state?.map,
  );
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const cancelToken = axios.CancelToken.source();
  const geoJsonLayerRef = useRef(null);

  const onEachFeature1 = (feature, layer, district) => {
    if (feature.properties) {
      layer.bindPopup(
        `<strong>District:</strong> ${feature.properties.name}`,
      );
      // if (feature.properties.dist_id === district) {
      //   layer.setStyle({
      //     color: "#ffff9f",
      //     fillColor: "#ffff9f",
      //     fillOpacity: 0.5,
      //   });
      // }
    }
  };
  useEffect(() => {
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.eachLayer((layer) => {
        const feature = layer.feature;
        if (feature.properties && feature.properties.dist_id) {
          layer.setStyle({
            color: "#808B96",
            fillColor: "#808B96",
            weight: 1.2,
            opacity: 1,
            fillOpacity: 0.1,
          });
          if (feature.properties.dist_id === props.district) {
            layer.setStyle({
              color: "#91769c",
              fillColor: "#91769c",
              fillOpacity: 0.5,
            });
          }
        }
      });
    }
  }, [props.district]);
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.block) {
      layer.bindPopup(`<strong>Block:</strong> ${feature.properties.block}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchSchoolData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        props?.URL,
        {
          ...props?.body,
          getAll: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization()}`,
          },
          cancelToken: cancelToken.token,
        },
      );
      setSchoolData(response.data?.[props?.bodyData] || []);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request Cancelled");
      } else {
        console.error("There was an error fetching the school data!", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (props?.isTable && props?.body !== null) {
      if (props?.district) {
        fetchSchoolData();
      } else {
        setSchoolData([]);
      }
    } else {
      setSchoolData([]);
      setLoading(false);
    }
    return () => {
      cancelToken.cancel();
    };
  }, [props?.isTable, props?.body, props?.district]);

  const markers = useMemo(
    () =>
      schoolData
        ?.map((school) => {
          try {
            if (!school?.[props?.lat_name] || !school?.[props?.long_name])
              return null;

            return (
              <Marker
                key={school?.[props?.udise_name] || "None"}
                position={[
                  school?.[props?.lat_name] || 0,
                  school?.[props?.long_name] || 0,
                ]}
                icon={customIcon}
              >
                <Popup>
                  <div style={{ textAlign: "center" }}>
                    <div className="GisHeading">
                      <strong>{school?.[props?.school_name]}</strong>
                    </div>
                    <table className="GisPopBox">
                      <tbody>
                        <tr>
                          <td>
                            <strong>UDISE Code:</strong>
                          </td>
                          <td>{school?.[props?.udise_name]}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>School Name:</strong>
                          </td>
                          <td>{school?.[props?.school_name]}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>District Name:</strong>
                          </td>
                          <td>{school?.[props?.district_name]}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Block Name:</strong>
                          </td>
                          <td>{school?.[props?.block_name]}</td>
                        </tr>
                        {(school?.[props?.cluster_name] &&
                        <tr>
                          <td>
                            <strong>Cluster Name:</strong>
                          </td>
                          <td>{school?.[props?.cluster_name]}</td>
                        </tr>)}
                      </tbody>
                    </table>
                  </div>
                </Popup>
              </Marker>
            );
          } catch (e) {
            console.log("Leaflet Error : \n", e);
            return null;
          }
        })
        .filter((marker) => marker !== null),
    [schoolData],
  );

  const MapEventHandler = () => {
    const map = useMap();

    useEffect(() => {
      const handleMapStable = () => {
        if (schoolData.length > 0) {
          const markerArray = schoolData.map((school) => [
            school?.[props?.lat_name] || 0,
            school?.[props?.long_name] || 0,
          ]);
          const bounds = L.latLngBounds(markerArray);
          const southWest = bounds.getSouthWest();
          const northEast = bounds.getNorthEast();
          const paddingLat = 0.005; 
          const paddingLng = 0.005; 

          const extendedBounds = L.latLngBounds(
            L.latLng(southWest.lat - paddingLat, southWest.lng - paddingLng),
            L.latLng(northEast.lat + paddingLat, northEast.lng + paddingLng) 
          );
          map.fitBounds(extendedBounds);
          map.flyToBounds(extendedBounds);
        } else {
          map.setView([21.278658, 81.866142]);
          map.setZoom(6);
        }
      };
      if (map) {
        map.whenReady(handleMapStable);
      }
    }, [schoolData, map]);

    return null;
  };

  return (
    <div style={{ background: props?.district === "" ? "linear-gradient(0deg, #d6e9ff, #ffffff)" : "" }}>
      {props?.district === "" ? (
        <>
          {(district_geo &&
            <MapGradient
              data={props?.countData}
              district_geo={district_geo}
              title={props?.title}
              subtitle={props?.subtitle}
              nameProp={props?.nameProp}
              inverse={props?.inverse}
            />)}
        </>
      ) : (
        <MapContainer
          center={[21.278658, 81.866142]}
          zoom={6}
          scrollWheelZoom
          fullscreenControl
          zoomControl={false}
          style={{
            height: props.height ? props.height : "355px",
            width: "100%",
          }}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Standard">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Outdoor">
              <TileLayer
                attribution='&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Light">
              <TileLayer
                attribution='&copy; <a href="https://carto.com/attribution">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Dark">
              <TileLayer
                attribution='&copy; <a href="https://www.thunderforest.com/maps/spinal-map/">Thunderforest</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          {india_geo && (
            <TopoJSON
              data={india_geo}
              style={indiaStyle}
              onEachFeature={onEachFeature}
            />
          )}
          {district_geo && (
            <TopoJSON
              data={district_geo}
              style={districtStyle}
              onEachFeature={(feature, layer) =>
                onEachFeature1(feature, layer, props?.district)
              }
              ref={geoJsonLayerRef}
            />
          )}
          {block_geo && props?.district !== "" && (
            <TopoJSON
              data={block_geo}
              style={blockStyle}
              onEachFeature={onEachFeature}
            />
          )}
          {markers && markers}
          <ZoomControl position="bottomright" />
          {markers && <MapEventHandler />}
        </MapContainer>
      )}
    </div>
  );
};

export default MapComp;
