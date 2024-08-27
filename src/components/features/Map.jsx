{
  /** Precipitation Map */
}
import Card from '../ui/Card';
import CardHeader from '../ui/CardHeader';
import { useRef } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);
  const latitude = -37.8136;
  const longitude = 144.9631;

  return (
    <Card className="col-span-2  row-span-2">
      <CardHeader title="precipitation map" />

      <div className="grow mt-2 rounded-lg border border-slate-500 truncate">
        <div className="h-full">
          {/* // Make sure you set the height and width of the map container
          otherwise the map won't show */}
          <MapContainer
            center={[latitude, longitude]}
            zoom={9}
            ref={mapRef}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
            {/* <TileLayer url="https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid={3d4034bdb6abc1f6f797d2a8238e0c63}" /> */}
          </MapContainer>
        </div>
      </div>
    </Card>
  );
};

export default Map;
