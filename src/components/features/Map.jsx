{
  /** Precipitation Map */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';
import { useContext, useEffect, useRef, useState } from 'react';
import { TiInfo } from 'react-icons/ti';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

import { useMapEvents } from 'react-leaflet/hooks';
import { LocationContext } from '../../context/LocationContext';

const Map = ({ handleClick, isExpanded }) => {
  const mapRef = useRef(null);
  const location = useContext(LocationContext);

  const [locationPermission, setLocationPermission] = useState('pending'); // track permission status

  useEffect(() => {
    // Attempt to get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Permission granted and location fetched
          setLocationPermission('granted');
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            // Permission denied
            setLocationPermission('denied');
          }
        }
      );
    } else {
      // Geolocation not supported
      setLocationPermission('unsupported');
    }
  }, [locationPermission]);

  const isLocationAvailable = location.latitude && location.longitude;

  // Custom hook to update the map center when location changes
  function UpdateMapCenter({ location }) {
    const map = useMap();
    useEffect(() => {
      if (location.latitude && location.longitude) {
        map.setView([location.latitude, location.longitude], 9);
      }
    }, [location, map]);
    return null;
  }

  return (
    <Card className="col-span-2  row-span-2">
      <div className="flex flex-row justify-between">
        <CardHeader title="sunrise" />
        <TiInfo className="text-yellow-500 " />
      </div>

      <div className="grow mt-2 rounded-lg border border-slate-500 truncate">
        {/* Conditionally show the message based on permission status */}
        {!isLocationAvailable && locationPermission !== 'granted' && (
          // <div className="absolute h-full flex flex-col justify-center content-center items-center bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center w-full text-wrap z-[9999]">
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center z-[9999]">
            {locationPermission === 'pending' && (
              <p className="text-xl font-semibold text-gray-800 max-w-full text-wrap">
                Please provide location permission
              </p>
            )}
            {locationPermission === 'denied' && (
              <p className="text-xl font-semibold text-red-500 max-w-full text-wrap text-left p-8">
                Location access denied. Please enable it in your browser
                settings.
              </p>
            )}
            {locationPermission === 'unsupported' && (
              <p className="text-xl font-semibold text-red-500 max-w-full">
                Geolocation is not supported by your browser.
              </p>
            )}
          </div>
        )}
        <div className="h-full">
          {/* // Make sure you set the height and width of the map container
          otherwise the map won't show */}
          <MapContainer
            center={[
              location.latitude || 0, // Default to 0 if null
              location.longitude || 0,
            ]}
            zoom={18}
            ref={mapRef}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            dragging={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
            {/* <TileLayer url="https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid={3d4034bdb6abc1f6f797d2a8238e0c63}" /> */}

            {/* Update the map center when the location changes */}
            <UpdateMapCenter location={location} />
          </MapContainer>
        </div>
      </div>
    </Card>
  );
};

export default Map;
